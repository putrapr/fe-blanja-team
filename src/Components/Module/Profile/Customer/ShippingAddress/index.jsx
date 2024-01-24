import { Link } from "react-router-dom";
import AddANewModal from "../../../Modal/AddANewAddress/AddANewAddress";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const ShippingAddress = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="shippingAddress">
      <div className="main-content hv-100 bg-light">
        <div className="container mt-5">
          <div className="wrapper-card ">
            <h3 className="title mb-0">Choose Another Address</h3>
            <span className="sub-title">Manage your Shipping Address</span>
            <hr className="mb-4" />

            <div className="row mt-5 d-grid">
              <div className="content-address">
                {/* Button Add new address */}
                <button
                  className="btn-add-address mt-4"
                  data-bs-toggle="modal"
                  data-bs-target="#newAddressModal"
                >
                  <p className="fw-bold mt-3">Add new address</p>
                </button>
              </div>
              {/* <button className="btn btn-danger" onClick={handleShow}>
                <AddANewModal showMe={show} onHideMe={handleClose} />
                {"Add new Address"}
              </button> */}
            </div>
            <div className="row mt-3">
              <div className="card">
                <div className="card-body">
                  <h5>Pak Jokowi</h5>
                  <p>
                    <span>jalan jalan </span>
                    <span>Jalan jalan </span>
                    <span>jakarta </span>
                    <span>12654</span>
                    <button
                      style={{
                        position: "absolute",
                        right: 15,
                        top: "40%",
                      }}
                      onClick=""
                    >
                      {" "}
                      <FaTrash size={12} />
                    </button>
                  </p>
                  <Link>Change Address</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAddress;
