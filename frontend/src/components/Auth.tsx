import { signUpInput } from "@jenil-desai/medium-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LablledInput from "./LablledInput";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import Alert from "./Alert";

export default function Auth({ type }: { type: "signup" | "signin" }) {
  const [postInputs, setPostInputs] = useState<signUpInput>({
    name: "",
    username: "",
    password: "",
  });
  const [alert, setAlert] = useState({ vis: false, type: "error", msg: "" });
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error: any) {
      setAlert({ vis: true, type: "error", msg: error.response.data.error });
      console.log(error);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">{type === "signup" ? "Create a account" : "Login to account"}</div>
            <div className="text-slate-400">
              {type === "signin" ? "Don't Have Account?" : "Already have an account?"}
              <Link to={type === "signin" ? "/signup" : "/signin"} className="pl-2 underline">
                {type === "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {alert.vis ? <Alert type={alert.type} msg={alert.msg} setAlert={setAlert} /> : null}
            {type === "signup" ? (
              <LablledInput
                label="Name"
                placholder="John Doe"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            <LablledInput
              type="email"
              label="Username"
              placholder="johndoe@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LablledInput
              label="Password"
              placholder="JohnDoe123"
              type="password"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              {type === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
