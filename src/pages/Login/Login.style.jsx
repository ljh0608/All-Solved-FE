import styled from "styled-components";
import { ReactComponent as MainImgLogin } from "../../assets/svg/mainimg.svg";
import KaKaoImg from "../../assets/kakao_login_medium_wide.png";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainImg = styled(MainImgLogin)`
  width: 200px;
  height: 150px;
  margin: 15px;
`;

export const MainText = styled.h2`
  font-size: 1.25rem;
  margin-top: 10px;
`;

export const SubText = styled.h3`
  font-size: 1rem;
`;

export const KakaoLoginBtn = styled.button`
  background-image: url(${KaKaoImg});
  background-repeat: no-repeat;
  width: 300px;
  height: 50px;
`;
