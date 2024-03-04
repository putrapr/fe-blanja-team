import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./mybag.css";
import Navbar from "../../../Components/Module/Navbar";
import Button from "../../../Components/Base/button";
// import MybagCard from "../../../Components/Base/MybagCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteMyBag, getByCustomerId } from "../../../config/redux/action/myBagAction";
import {  FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Mybag = () => {
  const { myBagList } = useSelector((state) => state.myBag);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (Array.isArray(myBagList)) {
        const total = myBagList.reduce((accumulator, item) => {
          return accumulator + item.price;
        }, 0);
        setTotalPrice(total);
      } else {
        setTotalPrice(0);
      }
    };

    calculateTotalPrice();
  }, [myBagList]);

  useEffect(() => {
    dispatch(getByCustomerId());
  }, [dispatch]);

  const handleNavigateCheckout = () => {
    navigate("/checkout")
  }

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Product",
      text: "Are you sure you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
    });

    if (result?.isConfirmed)
    try {
      dispatch(deleteMyBag(id))
      Swal.fire("Deleted!", "Your product has been deleted.", "success");
    } catch (error) {
      console.log(error.response);
    }
  }
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
            {myBagList.map((item, index) => (
              <div
                key={index}
                className="card mb-2 mt-3"
                style={{ width: "100%" }}
              >
                <div className="card-body d-flex flex-row justify-content-between align-items-center ">
                  <div className="d-flex flex-row ">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <input
                        className="form-check-input checkBox d-flex align-items-center me-3"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                    </div>

                    <div className="d-flex flex-row justify-content-start align-items-center ItemMyOrder">
                      <div>
                        <img
                          src={item?.image}
                          alt=""
                          className="contentCheckOut me-2 img-fluid"
                          style={{
                            cursor: "pointer",
                            width: "90px",
                            height: "69px",
                          }}
                        />
                      </div>

                      <div className="me-5">
                        <h4
                          className="navbar-brand ms-2  text-start text-wrap "
                          style={{
                            marginBottom: "2px",
                            width: "100%",
                          }}
                        >
                          {item?.name}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="price ms-4 end-2">$ {item?.price}</div>
                  </div>

                  <div>
                    <button onClick={() => handleDelete(item?.id)} className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
              // <div key={item.id}>
              //   <MybagCard
              //     prodTitle={item.name}
              //     descProduct={item.size}
              //     cost={item.price}
              //   />
              // </div>
            ))
          }
            {/* <div>
              <MybagCard prodTitle="Men's formal suit - Black" descProduct="Zalora Cloth" cost="200.000"/>
            </div> */}
          </Col>
          <Col lg={4} className="mt-3">
              <div className="ms-3 summary">
                <p className="ms-3 pt-3 shop">Shopping summary</p>
                <Row>
                  <Col lg={8}>
                    <p className="price ms-3 pt-3">Total price</p>
                  </Col>
                  <Col lg={4}>
                    <p className="prices pt-3">Rp {totalPrice}</p>
                  </Col>
                  <div className="d-flex justify-content-center">
                    <Button onClick={handleNavigateCheckout} className="mt-2 btn-buy" child="Buy" />
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
