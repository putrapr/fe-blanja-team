/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../../../../src/assets/icons/shopping-bag 1.svg";
import Input from "../../../Base/Input/input";
import "./register.css";
import Button from "../../../Base/button/index";
import Buttons from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import RegisterCustomer from "../Customer";
import { useSelector, useDispatch } from "react-redux";
import { registerSeller } from "../../../../config/redux/action/sellerAction";
import Swal from "sweetalert2";

const RegisterSeller = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  const [tab, setTab] = useState("registerSeller");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    image: "",
    store_name: "",
    store_description: "",
  })

  const handleRegister = async () => {
    try {
      const seller = await dispatch(registerSeller(values));
      console.log(seller);
      Swal.fire({
        icon: "success",
        title: "Register Success",
        text: "Register Success",
        showConfirmButton: false,
        timer: 1000,
      })
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: "Register Failed"
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
    <Container id="register">
      {tab === "registerSeller" && 
    <Row style={{ height: "100vh" }}>
    
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
              <p className="mt-3 text-register">
                Please sign up with your account
              </p>
              <div>
                <ButtonGroup className="mt-4 mb-3">
                  <Buttons onClick={() => setTab("registerCustomer")} style={{ backgroundColor: "#fff", color: "#9B9B9B", borderRadius: "4px 0px 0px 4px", width: "103px", height: "40px", fontSize: "12px", border: "1px solid #9B9B9B" }}>Customer</Buttons>
                  <Buttons onClick={() => setTab("registerSeller")} style={{ backgroundColor: "#DB3022", borderRadius: "0px 4px 4px 0px",  width: "103px", height: "40px", fontSize: "12px", border: "1px solid #9B9B9B" }}>Seller</Buttons>
                </ButtonGroup>
              </div>
              <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center">
                <Input id="input" placeholder="Name" name="name" value={values.name} onChange={onChange} required={true}></Input>
              </div>
              <div className="d-flex justify-content-center">
                <Input id="input" placeholder="Email" name="email" value={values.email} onChange={onChange} required={true}></Input>
              </div>
              <div className="d-flex justify-content-center">
                <Input id="input" placeholder="Phone number" name="phone" value={values.phone} onChange={onChange} required={true}></Input>
              </div>
              <div className="d-flex justify-content-center">
                <Input id="input" placeholder="Store name" name="store_name" value={values.store_name} onChange={onChange} required={true}></Input>
              </div>
              <div className="d-flex justify-content-center">
                <Input id="input" type="password" placeholder="Password" name="password" value={values.password} onChange={onChange} required={true}></Input>
              </div>
              <Button
                className="mt-5"
                child={loading ? "loading..." : "Register"}
                onClick={handleRegister}
                style={{
                  backgroundColor: "#DB3022",
                  color: "#FFFFFF",
                  width: "400px",
                }}
              ></Button>
              <p className="mt-4">
                <Link to="/login" className="acc">
                Already have a account?
                  <span style={{ color: "#DB3022" }}> Login</span>
                </Link>
              </p>
              </form>
            </Col>
          </Row>
          
        </Row>
      </Col>
    </Row>
    }
    {tab === "registerCustomer" && <RegisterCustomer/>}
  </Container>
  )
};

export default RegisterSeller;
