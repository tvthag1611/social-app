import React, { useEffect, useState } from "react";
import AuthService from "../../services/authService.js";
import AuthContext from "./AuthContext.js";

const authService = new AuthService();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {},
  });

  const handleLogin = async ({ email, password }) => {
    try {
      const data = {
        email,
        password,
      };
      const response = await authService.login(data);
      if (response) {
        setAuth({
          isAuthenticated: true,
          user: response.userInfo,
        });
        return true;
      }
    } catch (error) {
      alert(error.response.data.message);
    }
    return false;
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: {},
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      handleLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
