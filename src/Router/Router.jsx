import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLogin from "/pages/Login/AuthLogin";
import Login from "/pages/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/auth/login" element={<AuthLogin></AuthLogin>}></Route>
        <Route path="/" element={<div>메인페이지 넣기</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
