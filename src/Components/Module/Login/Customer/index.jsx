/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../../../assets/icons/shopping-bag 1.svg";
import Input from "../../../Base/Input/input";
import "./login.css";
import Button from "../../../Base/button/index";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../config/redux/action/customerAction";
import Buttons from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import LoginSeller from "../Seller";
import Swal from "sweetalert2";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import Tabs from "../../../Base/Tabs";

const LoginCustomer = () => {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [tab, setTab] = useState("loginCustomer");
  // const passwordRules =
  //   /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})/;

  // const handleLogin = async () => {
  //   try {
  //     const customer = await dispatch(login(values));
  //     console.log("customer data ", customer);
  //     Swal.fire({
  //       icon: "success",
  //       title: "Login Successful",
  //     });
  //     const ruleEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  //     if (ruleEmail.test(values.email)) {
  //       // return (true)
  //       alert("Email Valid!");
  //     } else {
  //       alert("You have entered an invalid email address!");
  //       return false;
  //     }
  //     console.log(error);
  //     // navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Login Failed",
  //       text: error,
  //     });
  //     return;
  //   }
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: yup.object().shape({
  //     email: yup
  //       .string()
  //       .email("Please enter a valid email")
  //       .required("Email required"),
  //     password: yup
  //       .string()
  //       .min(5, "must be at least 5 character long")
  //       .matches(passwordRules, {
  //         message:
  //           "password must be have uppercase, lowercase, number & special character",
  //       })
  //       .required("Password required"),
  //   }),
  //   onSubmit: handleLogin,
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(values));
      Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
      console.log(error);
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please Try Again",
      });
      return;
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

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

  // const handleForm = (event) => {
  //   const { target } = event;
  //   formik.setFieldValue(target.name, target.value);
  // };

  return (
    <Container id="login">
      {tab === "loginCustomer" && (
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
                      <Buttons
                        onClick={() => setTab("loginCustomer")}
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
                        onClick={() => setTab("loginSeller")}
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
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className={isEmailValid === false ? "error-input" : ""}
                      ></Input>
                    </div>
                    <p className="text-error">
                      {isEmailValid === false
                        ? "*You have entered an invalid email address!"
                        : ""}
                    </p>
                    <div className="d-flex justify-content-center">
                      <Input
                        id="input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        className={
                          isPasswordValid === false ? "error-input" : ""
                        }
                      ></Input>
                    </div>
                    <p className="text-error1">
                      {isPasswordValid === false ? "*Password must be at least 5 characters long" : ""}
                    </p>
                    <p className="mt-3">
                      <Link to="" className="forgot">
                        Forgot password?
                      </Link>
                    </p>
                    <Button
                      type="submit"
                      className="mt-2"
                      child={loading ? "loading..." : "Login"}
                      // onClick={handleLogin}
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
      )}
      {tab === "loginSeller" && <LoginSeller />}
    </Container>
  );
};

export default LoginCustomer;
