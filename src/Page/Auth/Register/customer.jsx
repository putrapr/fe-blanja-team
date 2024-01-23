/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../../../src/assets/icons/shopping-bag 1.svg";
import Input from "../../../Components/Base/Input/Input";
import "./register.css";
import Button from "../../../Components/Base/button";
import Buttons from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../../config/redux/action/customerAction";

const RegisterCustomer = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    image: "",
    date_birth: "",
  });
  const handleRegister = async () => {
    try {
      const customer = await dispatch(register(values));
      console.log(customer);
      navigate("/login-customer");
    } catch (error) {
      console.log(error);
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
                <p className="mt-3 text-register">Please sign up with your account</p>
                <div>
                  <ButtonGroup className="mt-4 mb-3">
                    <Buttons style={{ backgroundColor: "#DB3022", borderRadius: "4px 0px 0px 4px", width: "103px", height: "40px", fontSize: "12px", border: "1px solid #9B9B9B" }}>Customer</Buttons>
                    <Buttons style={{ backgroundColor: "#fff", color: "#9B9B9B", borderRadius: "0px 4px 4px 0px", width: "103px", height: "40px", fontSize: "12px", border: "1px solid #9B9B9B" }}>Seller</Buttons>
                  </ButtonGroup>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-center">
                    <Input id="input" name="name" placeholder="Name" value={values.name} onChange={onChange} required={true}></Input>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Input id="input" name="email" placeholder="Email" value={values.email} onChange={onChange} required={true}></Input>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Input id="input" name="password" placeholder="Password" value={values.password} onChange={onChange} required={true}></Input>
                  </div>
                  <Button
                    className="mt-5"
                    child={loading ? "loading..." : "PRIMARY"}
                    onClick={handleRegister}
                    style={{
                      backgroundColor: "#DB3022",
                      color: "#FFFFFF",
                      width: "400px",
                    }}
                  ></Button>
                  <p className="mt-4">
                    <Link to="/login-customer" className="acc">
                      Already have a Tokopedia account?
                      <span style={{ color: "#DB3022" }}> Login</span>
                    </Link>
                  </p>
                </form>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterCustomer;
