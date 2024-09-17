import { Link, useNavigate } from "react-router-dom";

import Avatar from "./Avatar";

export default function Appbar() {
  const navigate = useNavigate();

  return (
    <div className="border-b grid grid-cols-1 text-center md:flex md:justify-between px-10 py-4 space-y-4">
      <Link to="/" className="flex justify-center flex-col">
        <div className="flex justify-center flex-col font-bold text-xl cursor-pointer">Medium</div>
      </Link>
      <div className="flex justify-center">
        {localStorage.getItem("token") ? (
          <>
            <Link to="/publish">
              <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                New
              </button>
            </Link>
            <button
              type="button"
              className="mr-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Log Out
            </button>
            <Avatar name={"Jenil Desai"} size={8} />
          </>
        ) : (
          <>
            <Link to="/signup">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
