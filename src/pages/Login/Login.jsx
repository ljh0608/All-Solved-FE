import React from "react";
import { loginService } from "../../utils/api/loginService";
import {
  LoginWrapper,
  LogoWrapper,
  KakaoLoginBtn,
  MainImg,
  MainText,
  SubText,
} from "./Login.style";

const Login = () => {
  const redirectURI = "http://localhost:3000/allso/auth/kakao_login";
  const loginOnclick = async () => {
    try {
      loginService.login();
      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=bc712decd5a530ca7387c2ab07618a92&redirect_uri=${redirectURI}&response_type=code`;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LoginWrapper>
      <LogoWrapper>
        <MainImg></MainImg>
        <SubText>옳소에 오신 것을 환영합니다</SubText>
        <MainText>편안한 민원관리는 옳소와 함께</MainText>
      </LogoWrapper>
      <KakaoLoginBtn onClick={loginOnclick}></KakaoLoginBtn>
    </LoginWrapper>
  );
};

export default Login;
