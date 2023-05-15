import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { loginService } from "../../utils/api/loginService";
const AuthLogin = () => {
  const location = useLocation();

  const code = new URLSearchParams(location.search).get("code");
  let response;
  try {
    response = loginService.KakaoLogin(code);
  } catch (e) {
    console.error(e);
  }

  return (
    <div>
      <h1>AuthLogin Page</h1>

      {code}
      {response.data}
    </div>
  );
};

export default AuthLogin;
