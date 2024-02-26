import gopay from "../../../../assets/img/gopay.png";
import pos from "../../../../assets/img/pos.png";
import mastercard from "../../../../assets/img/mastercard.svg";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const Payment = ({show, onHide}) => {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleShowSecondModal = () => setShowSecondModal(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);

  return (
    <div id="payment-modal" show={show} onHide={onHide}>
      <div
        className="modal fade"
        id="payment"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body p-4 ">
              <div className="d-flex flex-column ">
                <div
                  style={{ height: 40 }}
                  className="d-flex align-items-center gap-3"
                >
                  <button
                    type="button"
                    className="btn-close fw-bold"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <h3 className="fw-bold mt-2">Payment</h3>
                </div>
                <hr />
                <h5 style={{ fontWeight: 600, marginBottom: 20 }}>
                  Payment method
                </h5>
                <div className="d-flex mb-4">
                  <img
                    src={gopay}
                    alt="gopay"
                    style={{ width: 80, height: 18 }}
                  />
                  <p style={{ marginLeft: "26%" }}>Gopay</p>
                  <input
                    type="checkbox"
                    value="gopay"
                    style={{ marginLeft: 200, marginBottom: 10 }}
                  />
                </div>
                <div className="d-flex mb-4">
                  <img src={pos} alt="pos" style={{ width: 58, height: 40 }} />
                  <p style={{ marginLeft: "29%" }}>Pos Indonesia</p>
                  <input
                    type="checkbox"
                    value="pos indonesia"
                    style={{
                      marginLeft: 145,
                      marginBottom: 10,
                    }}
                  />
                </div>
                <div className="d-flex mb-4">
                  <img
                    src={mastercard}
                    alt="mastercard"
                    style={{ width: 53, height: 40 }}
                  />
                  <p style={{ marginLeft: "30%" }}>MasterCard</p>
                  <input
                    type="checkbox"
                    value="mastercard"
                    style={{ marginLeft: 160, marginBottom: 10 }}
                  />
                </div>
              </div>
              <hr />

              <h6 style={{ fontWeight: 600 }}>Shopping summary</h6>
              <div className="d-flex">
                <p style={{ color: "#9B9B9B" }}>Order</p>
                <p style={{ fontWeight: 600, marginLeft: "71%" }}>
                  Rp. 10000000
                </p>
              </div>
              <div className="d-flex">
                <p style={{ color: "#9B9B9B" }}>Delivery</p>
                <p style={{ fontWeight: 600, marginLeft: "70%" }}>$ 20.000</p>
              </div>

              <hr />

              <div className="d-flex mt-3 ">
                <div>
                  <p style={{ fontWeight: 600 }}>Shopping summary</p>
                  <p style={{ color: "#DB3022" }}>$ 1200000000</p>
                </div>
                <button
                  style={{
                    borderRadius: 15,
                    backgroundColor: "#DB3022",
                    width: 160,
                    height: 36,
                    marginTop: 15,
                    marginLeft: "45%",
                    color: "white",
                  }}
                >
                  buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Payment.propTypes = {
  show: propTypes.func,
  onHide: propTypes.func,
};

export default Payment;
