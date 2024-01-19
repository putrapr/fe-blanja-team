import React from "react";
import Home from "../Page/Main/Home";
import Login from "../Page/Auth/Login";
import Register from "../Page/Auth/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
