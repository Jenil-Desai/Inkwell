import { useEffect } from "react";
import Appbar from "../components/Appbar";
import Auth from "../components/Auth";
import Quote from "../components/Quote";
import { useNavigate } from "react-router-dom";

export default function Signin() {
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
          <Auth type="signin" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
}
