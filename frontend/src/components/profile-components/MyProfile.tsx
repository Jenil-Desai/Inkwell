import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../constants/Config";
import useToken from "../../hooks/useToken";
import { Button, Card, Input } from "@material-tailwind/react";
import { editUserDetails } from "@jenil-desai/medium-common";
import { useToast } from "../../context/ToastContext";

type extendedEditUserDetails = editUserDetails & {
  id: string;
};

export default function MyProfile() {
  const [user, setUser] = useState<extendedEditUserDetails>();
  const [loading, setLoading] = useState(true);
  const { token } = useToken();
  const { addToast } = useToast();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/user`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function handleSubmit() {
    setLoading(true);
    try {
      await axios
        .put(
          `${BACKEND_URL}/user`,
          {
            name: user?.name,
            email: user?.email,
            phrase: user?.phrase,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          if (res.data.success) addToast("User details updated successfully", "success");
        });
    } catch (err) {
      addToast("Failed to update user details", "error");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className="gap-y-5 p-4">
      <div className="flex justify-between items-center gap-x-5">
        <Input
          color="gray"
          placeholder="Username"
          value={user?.name}
          variant="outlined"
          label="Name"
          disabled={loading}
          onChange={(e) => {
            setUser((prev) => {
              if (!prev) return prev;
              return {
                ...prev,
                name: e.target.value,
              };
            });
          }}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          color="gray"
          placeholder="Email"
          value={user?.email}
          variant="outlined"
          label="Email"
          disabled={loading}
          onChange={(e) => {
            setUser((prev) => {
              if (!prev) return prev;
              return {
                ...prev,
                email: e.target.value,
              };
            });
          }}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
      </div>

      <Input
        color="gray"
        placeholder="Phrase"
        value={user?.phrase}
        variant="outlined"
        label="Phrase"
        disabled={loading}
        onChange={(e) => {
          setUser((prev) => {
            if (!prev) return prev;
            return {
              ...prev,
              phrase: e.target.value,
            };
          });
        }}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
      <div className="flex justify-end items-center gap-x-5">
        <Button color="blue" disabled={loading} ripple={true} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onClick={handleSubmit}>
          Submit
        </Button>
        <Button color="gray" disabled={loading} ripple={true} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Reset
        </Button>
      </div>
    </Card>
  );
}
