import React from "react";

import {
  LoginWrapper,
  LogoWrapper,
  KakaoLoginBtn,
  MainImg,
  MainText,
  SubText,
} from "./Login.style";
const Login = () => {
  const loginOnclick = () => {
    alert("카카오 로그인 버튼 클릭");
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
