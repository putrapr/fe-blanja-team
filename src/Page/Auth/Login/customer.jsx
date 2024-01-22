/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../../../src/assets/icons/shopping-bag 1.svg";
import Input from "../../../Components/Base/Input/Input";
import "./login.css";
import Button from "../../../Components/Base/button";
import Buttons from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const LoginCustomer = () => {
  return (
    <Container>
      <Row>
        <Col className="my-5">
          <Row>
            <Col className="text-center mt-3">
              <h4 className="logo-title">
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
                    <Buttons style={{ backgroundColor: "#DB3022", borderRadius: "4px 0px 0px 4px",  width: "103px", height: "40px", fontSize: "12px", border: "1px solid #9B9B9B" }}>Customer</Buttons>
                    <Buttons style={{ backgroundColor: "#fff", color: "#9B9B9B", borderRadius: "0px 4px 4px 0px", width: "103px", height: "40px", fontSize: "12px", border: "1px solid #9B9B9B" }}>Seller</Buttons>
                  </ButtonGroup>
                </div>
                <div className="d-flex justify-content-center">
                  <Input id="input" placeholder="Email"></Input>
                </div>
                <div className="d-flex justify-content-center">
                  <Input id="input" placeholder="Password"></Input>
                </div>
                <p className="mt-3">
                  <Link to="" className="forgot">Forgot password?</Link>
                  </p>
                <Button
                  className="mt-2"
                  child="Primary"
                  style={{
                    backgroundColor: "#DB3022",
                    color: "#FFFFFF",
                    width: "400px",
                  }}
                ></Button>
                <p className="mt-4">
                  <Link to="/register-customer" className="acc">
                    Don't have a Tokopedia account?
                    <span style={{ color: "#DB3022" }}> Register</span>
                  </Link>
                </p>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginCustomer;
