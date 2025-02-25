import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Quote from "../components/Quote";
import Auth from "../components/Auth";
import useToken from "../hooks/useToken";

export default function Signin() {
  const navigate = useNavigate();
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      navigate("/blogs");
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signin" />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
