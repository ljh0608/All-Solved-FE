import axios from "axios";

const login = async (access_token) => {
  try {
    const response = await axios.post(
      "http://semtle.catholic.ac.kr:8081/allso/login",
      { access_token },

      {
        withCredentials: true,
        maxBodyLength: Infinity,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    );
    const accessToken = response.data?.result.accessToken;
    console.log(JSON.stringify(accessToken));
    localStorage.setItem("token", accessToken);
  } catch (e) {
    console.error(e);
  }
};

const KakaoLogin = async (code) => {
  console.log(code);
  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: "bc712decd5a530ca7387c2ab07618a92",
        code: code,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        maxBodyLength: Infinity,
      },
    );
    console.log(response.data.access_token + "  정상작동 KAKAO");
    const response2 = await login(response.data.access_token);
    console.log(response2);

    return response2;
  } catch (e) {
    console.error(e);
  }
};

export const loginService = {
  login,
  KakaoLogin,
};
