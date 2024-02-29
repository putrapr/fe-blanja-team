// import CheckoutCard from "../../../Components/Base/CheckoutCard/CheckoutCard";
import Button from "../../../Components/Base/button";
import ShippingAddressModal from "../../../Components/Module/Modal/ShippingAddressModal/ShippingAddressModal";
import Navbar from "../../../Components/Module/Navbar/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedAddress } from "../../../config/redux/action/AddressAction";
import Payment from "../../../Components/Module/Modal/Payment";
import { getByCustomerId } from "../../../config/redux/action/myBagAction";
// import { Navigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.address);
  const { myBagList } = useSelector((state) => state.myBag);
  console.log(address);
  console.log(myBagList);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePaymentClick = () => {
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  useEffect(() => {
    dispatch(selectedAddress());
    dispatch(getByCustomerId());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="container pb-5">
        <div className="container addressWrapper">
          <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8  pt-4">
              <h2 id="checkoutTitle">Checkout</h2>
              <h5 id="shippingAddressTitle">Shipping Address</h5>
              <h5>{(address && address.name_recipient) || "-"}</h5>
              <p>
                {address && address.street}, {(address && address.city) || "-"}
                <br />
                {(address && address.postal_code) || "-"}
              </p>

              <Button
                className=" btn-outline-secondary"
                child="Choose another address"
                style={{ borderRadius: "50px", marginBottom: "20px" }}
                onClick={handleShow}
              />
              <ShippingAddressModal show={show} onHide={handleClose} />
              <div className="container">
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
                    </div>
                  </div>
                  // <div key={item.id}>
                  //   <CheckoutCard
                  //     title={item.name}
                  //     productDesc={item.size}
                  //     price={item.price}
                  //     src={item.image}
                  //   />
                  // </div>
                ))}
                {/* <CheckoutCard
                  title="Men's Jacket jeans"
                  productDesc="Zalora Cloth"
                  price="200.000"
                /> */}
              </div>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-4 col-xl-4 py-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="container ">
                <h5 style={{ marginBottom: "20PX" }}>Shopping Summary</h5>
                <div className="row">
                  <div className="col-8">
                    <p style={{ color: "#9B9B9B" }}>order</p>
                  </div>
                  <div className="col-4">
                    <h6>
                      Rp.<span>400.000</span>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p style={{ color: "#9B9B9B" }}>Delivery</p>
                  </div>
                  <div className="col-4">
                    <h6>
                      Rp.<span>50.000</span>
                    </h6>
                  </div>
                </div>
                <div
                  className="row "
                  style={{ marginTop: "10px", marginBottom: "15px" }}
                >
                  <div className="col-8">
                    <h5> Shopping Summary </h5>
                  </div>
                  {myBagList.map((item) => (
                    <div className="col-4" key={item.id}>
                      <h6 style={{ color: "#DB3022" }}>
                        Rp.<span>{item.price}</span>
                      </h6>
                    </div>
                  ))}
                </div>
                <Button
                  className="mx-auto"
                  child="Select Payment"
                  style={{
                    width: "100%",
                    backgroundColor: "#DB3022",
                    color: "#fff",
                  }}
                  onClick={handlePaymentClick}
                />
                <Payment show={showPaymentModal} onHide={handleCloseModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {showPaymentModal && <Payment onHide={handleCloseModal}/>} */}
    </div>
  );
};

export default Checkout;
