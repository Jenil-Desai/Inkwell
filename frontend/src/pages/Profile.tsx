import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { profileTabs } from "../constants/profileTabs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

export default function Profile() {
  const navigate = useNavigate();
  const { token } = useToken();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, []);

  return (
    <Tabs id="custom-animation" value="my-blogs">
      <TabsHeader className="h-10 m-5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {profileTabs.map(({ label, value }) => (
          <Tab className="bg-slate-300 rounded-full mr-3" key={value} value={value} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="px-5"
      >
        {profileTabs.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc()}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
