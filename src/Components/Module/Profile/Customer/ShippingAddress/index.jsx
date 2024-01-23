import { Link } from "react-router-dom";
import AddANewModal from "../../../Modal/AddANewAddress/AddANewAddress";
import { FaTrash } from "react-icons/fa";

const ShippingAddress = () => {
  return (
    <section id="shippingAddress">
      <div className="main-content vh-100">
        <div className="container bg-white h-100">
          <div className="text-start px-3 py-3">
            <h4>Choose Another Address</h4>
            <p>Manage your Shipping Address</p>
          </div>
          <div className="container px-5">
            <div className="row mt-5 d-grid">
              <AddANewModal modalName="Add Another Address" />
            </div>
            <div className="row mt-3">
              <div className="card">
                <div className="card-body">
                  <h5>Joko</h5>
                  <p>
                    <span>Jalan cinta </span>
                    <span>Jalan jalan</span>
                    <span>jakarta </span>
                    <span>12340</span>
                    <button
                      style={{
                        position: "absolute",
                        right: 15,
                        top: "40%",
                      }}
                      onClick=""
                    >
                      <FaTrash size={14} />
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
