import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./mybag.css";
import Navbar from "../../../Components/Module/Navbar";
import Button from "../../../Components/Base/button";
import MybagCard from "../../../Components/Base/MybagCard";

const Mybag = () => {
  return (
    <>
      <Navbar />
      <Container id="mybag">
        <Row className="mt-4">
          <h2>My bag</h2>
          <Col lg={8} className="mt-3">
            <div className="container d-flex align-items-center select-all">
              <div className="form-check ms-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="col-6 ms-2 select">
                <p>
                  Select all items <span>(2 items selected)</span>
                </p>
              </div>
              <div className="col-6 text-end">
                <button className=" delete">Delete</button>
              </div>
            </div>
            <div>
            <MybagCard prodTitle="Men's formal suit - Black" descProduct="Zalora Cloth" cost="200.000"/>
            </div>
            <div>
              <MybagCard prodTitle="Men's formal suit - Black" descProduct="Zalora Cloth" cost="200.000"/>
            </div>
            
          </Col>
          <Col lg={4} className="mt-3">
            <div className="ms-3 summary">
              <p className="ms-3 pt-3 shop">Shopping summary</p>
              <Row>
              <Col lg={8}>
                <p className="price ms-3 pt-3">Total price</p>
              </Col>
              <Col lg={4}>
                <p className="prices pt-3">Rp 400.000</p>
              </Col>
              <div className="d-flex justify-content-center">
              <Button style={{ backgroundColor: "#DB3022", color: "#FFFFFF", width: "322px" }} className="mt-2" child="Buy"/>
              </div>
            </Row>
            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mybag;
