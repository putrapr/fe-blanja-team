import AddANewModal from "../../../Modal/AddANewAddress/AddANewAddress";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAddress,
  myAddress,
} from "../../../../../config/redux/action/AddressAction";
import ShippingAddressModal from "../../../Modal/ShippingAddressModal/ShippingAddressModal";

const ShippingAddress = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const { loading, address } = useSelector((state) => state.address);

  useEffect(() => {
    dispatch(myAddress(address));
  }, []);

  const handleDeleteAddres = async () => {
    dispatch(deleteAddress(address.id));
  };
  return (
    <section id="shippingAddress">
      <div className="main-content hv-100 bg-light">
        <div className="container mt-5">
          <div className="wrapper-card ">
            <h3 className="title mb-0">Choose Another Address</h3>
            <span className="sub-title">Manage your Shipping Address</span>
            <hr className="mb-4" />

            <div className="row mt-5 d-grid">
              <button
                className="btn btn-warning"
                type="button"
                style={{ marginRight: 8 }}
                onClick={handleShow}
              >
                <AddANewModal showMe={show} onHideMe={handleClose} />
              </button>
            </div>
            <div className="row mt-3">
              <div className="card">
                {loading
                  ? "Loading..."
                  : address?.map((item, index) => (
                      <div className="card-body" key={index}>
                        <h5>{item?.recipients_name}</h5>
                        <p>
                          <span>{item?.addres} </span>
                          <span>{item?.home_addres} </span>
                          <span>{item?.city} </span>
                          <span>{item?.postal_code}</span>
                          <button
                            style={{
                              position: "absolute",
                              right: 15,
                              top: "40%",
                            }}
                            onClick={handleDeleteAddres}
                          >
                            {" "}
                            <FaTrash size={15} />
                          </button>
                        </p>
                        <a>
                          <ShippingAddressModal
                            showMe={show}
                            onHideMe={handleClose}
                          />
                        </a>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAddress;
