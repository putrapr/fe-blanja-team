import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Page/Main/Home";
import Mybag from "../Page/Main/MyBag";
import Product from "../Page/Main/Product";
import Profile from "../Page/Main/Profile";
import Checkout from "../Page/Main/Checkout";
import Category from "../Page/Main/Category";
import PublicRoute from "../Components/Module/PublicRoute";
import ProtectedRoute from "../Components/Module/ProtectRoute";
import Login from "../Page/Auth/Login";
import Register from "../Page/Auth/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        } 
        />
        <Route path="/register" element={
          <PublicRoute>
            <Register/>
          </PublicRoute>
        } 
        />
        <Route path="/mybag" element={
          <ProtectedRoute>
            <Mybag />
          </ProtectedRoute>
        } 
        />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
        />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
