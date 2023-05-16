import React, { useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { loginService } from "../../utils/api/loginService";
const AuthLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    const login = async () => {
      try {
        await loginService.KakaoLogin(code);
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    };
    if (code) {
      login();
    }
  }, [code]);

  return <Loading></Loading>;
};

export default AuthLogin;
