/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../../../assets/icons/shopping-bag 1.svg";
import Input from "../../../Base/Input/input";
import "./login.css";
import Button from "../../../Base/button/index";
import { useNavigate, Link } from "react-router-dom";
import Buttons from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from "react";
import LoginCustomer from "../Customer";
import { useDispatch, useSelector } from "react-redux";
import { loginSeller } from "../../../../config/redux/action/sellerAction";
import Swal from "sweetalert2";

const LoginSeller = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [tab, setTab] = useState("loginSeller")

  const handleLogin = async () => {
    try {
      const seller = await dispatch(loginSeller(values));
      console.log("seller data ", seller);
      const Toast = Swal.mixin({
        icon: "success",
        title: "Login Success",
        text: "Login Success",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Sign in successfully"
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Login Failed"
      })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container id="login">
      {tab === "loginSeller" && 
      <Row>
        <Col className="my-5">
          <Row>
            <Col className="mt-3"> 
              <h4 className="d-flex justify-content-center logo-title">
                <Image src={Logo} />
                <span>Blanja</span>
              </h4>
            </Col>
            <Row className="text-center">
              <Col>
                <p className="mt-3 text-login">
                  Please login with your account
                </p>
                <div>
                  <ButtonGroup className="mt-4 mb-3">
                    <Buttons onClick={() => setTab("loginCustomer")} style={{ backgroundColor: "#fff", color: "#9B9B9B", borderRadius: "4px 0px 0px 4px", width: "103px", height: "40px", fontSize: "12px", border: "1px solid #9B9B9B" }}>Customer</Buttons>
                    <Buttons onClick={() => setTab("loginSeller")} style={{ backgroundColor: "#DB3022", borderRadius: "0px 4px 4px 0px",  width: "103px", height: "40px", fontSize: "12px", border: "1px solid #9B9B9B" }}>Seller</Buttons>
                  </ButtonGroup>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center">
                  <Input id="input" name="email" value={values.email} onChange={onChange} require={true} placeholder="Email"></Input>
                </div>
                <div className="d-flex justify-content-center">
                <Input id="input" name="password" value={values.password} onChange={onChange} type="password" require={true} placeholder="Password"></Input>
                </div>
                <p className="mt-3">
                  <Link to="" className="forgot">Forgot password?</Link>
                  </p>
                <Button
                  className="mt-2"
                  onClick={handleLogin}
                  child={loading ? "loading..." : "Login"}
                  style={{
                    backgroundColor: "#DB3022",
                    color: "#FFFFFF",
                    width: "400px",
                  }}
                ></Button>
                <p className="mt-4">
                  <Link to="/register" className="acc">
                    Don't have a account?
                    <span style={{ color: "#DB3022" }}> Register</span>
                  </Link>
                </p>
                </form>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      }
      {tab === "loginCustomer" && <LoginCustomer/>}
    </Container>
  );
};

export default LoginSeller;
