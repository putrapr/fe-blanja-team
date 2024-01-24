import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Page/Main/Home";
import Login from "../Page/Auth/Login";
import LoginCustomer from "../Page/Auth/Login/customer";
import Register from "../Page/Auth/Register";
import RegisterCustomer from "../Page/Auth/Register/customer";
import Mybag from "../Page/Main/MyBag";
import Product from "../Page/Main/Product";
import Profile from "../Page/Main/Profile";
import Checkout from "../Page/Main/Checkout";
import Category from "../Page/Main/Category";
import Search from "../Page/Main/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-customer" element={<LoginCustomer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-customer" element={<RegisterCustomer />} />
        <Route path="/mybag" element={<Mybag />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
