import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLogin from "../pages/Login/AuthLogin";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/allso/login" element={<Login />}></Route>
        <Route
          path="/allso/auth/kakao_login"
          element={<AuthLogin></AuthLogin>}
        ></Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<div>메인페이지 넣기</div>}></Route>
          <Route path="/allso/problem" element={<div>컴플레인 전체보기</div>}>
            <Route
              path="/allso/problem/detail:id"
              element={<div>컴플레인 상세보기</div>}
            ></Route>
          </Route>
        </Route>
        <Route path="/*" element={<div>Error page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
