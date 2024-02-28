/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../../../../src/assets/icons/shopping-bag 1.svg";
import Input from "../../../Base/Input/input";
import "./register.css";
import Button from "../../../Base/button/index";
import Buttons from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../../../config/redux/action/customerAction";
import RegisterSeller from "../Seller";
import Swal from "sweetalert2";

const RegisterCustomer = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const [tab, setTab] = useState("registerCustomer");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    image: "",
    date_birth: "",
  });

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(register(values));
      Swal.fire({
        icon: "success",
        title: "Register Success",
        text: "Register Success",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: "Register Failed",
      });
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    const ruleName = /^.{5,30}$/;
    if (ruleName.test(values.name)) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }

    const ruleEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (ruleEmail.test(values.email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    const rulePassword = /^.{5,}$/;
    if (rulePassword.test(values.password)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <Container id="register">
      {tab === "registerCustomer" && (
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
                      <Buttons
                        onClick={() => setTab("registerCustomer")}
                        style={{
                          backgroundColor: "#DB3022",
                          borderRadius: "4px 0px 0px 4px",
                          width: "103px",
                          height: "40px",
                          fontSize: "12px",
                          border: "1px solid #9B9B9B",
                        }}
                      >
                        Customer
                      </Buttons>
                      <Buttons
                        onClick={() => setTab("registerSeller")}
                        style={{
                          backgroundColor: "#fff",
                          color: "#9B9B9B",
                          borderRadius: "0px 4px 4px 0px",
                          width: "103px",
                          height: "40px",
                          fontSize: "12px",
                          border: "1px solid #9B9B9B",
                        }}
                      >
                        Seller
                      </Buttons>
                    </ButtonGroup>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center">
                      <Input
                        id="input"
                        name="name"
                        placeholder="Full Name"
                        value={values.name}
                        onChange={handleChange}
                        className={isNameValid === false ? "error-input" : ""}
                      ></Input>
                    </div>
                    <p className="text-error1">
                      {isNameValid === false
                        ? "*Name must be at least 5 letters long"
                        : ""}
                    </p>
                    <div className="d-flex justify-content-center">
                      <Input
                        id="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        className={isEmailValid === false ? "error-input" : ""}
                      ></Input>
                    </div>
                    <p className="text-error2">
                      {isEmailValid === false
                        ? "*You have entered an invalid email address!"
                        : ""}
                    </p>
                    <div className="d-flex justify-content-center">
                      <Input
                        id="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        className={
                          isPasswordValid === false ? "error-input" : ""
                        }
                      ></Input>
                    </div>
                    <p className="text-error3">
                      {isPasswordValid === false
                        ? "*Password must be at least 5 characters long"
                        : ""}
                    </p>
                    <Button
                      type="submit"
                      className="mt-5"
                      child={loading ? "loading..." : "Register"}
                      // onClick={handleRegister}
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
      )}
      {tab === "registerSeller" && <RegisterSeller />}
    </Container>
  );
};

export default RegisterCustomer;
