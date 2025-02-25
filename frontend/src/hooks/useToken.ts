import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return tokenString ? tokenString : null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return {
    setToken: saveToken,
    token,
    removeToken,
  };
};

export default useToken;
