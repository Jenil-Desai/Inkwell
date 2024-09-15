import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Auth from "../components/Auth";
import Quote from "../components/Quote";
import { useEffect } from "react";

export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/blogs");
    }
  }, []);

  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signup" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
}
