import AddANewModal from "../../../Modal/AddANewAddress/AddANewAddress";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAddress,
  myAddress,
} from "../../../../../config/redux/action/AddressAction";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);

const ShippingAddress = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const { addressList } = useSelector((state) => state.address);

  useEffect(() => {
    dispatch(myAddress());
  }, [dispatch]);

  const handleDeleteAddres = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this address!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAddress(id));
        MySwal.fire("Deleted!", "Your address has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire("Cancelled", "Your address is safe :)", "error");
      }
    });
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
                className="btn btn-danger"
                type="button"
                style={{
                  // width: "80%",
                  border: "1px dashed grey",
                  height: "40px",
                  lineHeight: "20px",
                  textAlign: "center",
                  marginBottom: "40px",
                }}
                onClick={handleShow}
              >
                <span>Add New Address</span>
                <AddANewModal showMe={show} onHideMe={handleClose} />
              </button>
            </div>
            <div className="row mt-3">
              <div className="card">
                {addressList?.map((item) => (
                  <div className="card-body" key={item.id}>
                    <h5>{item?.name_recipient}</h5>
                    <p>
                      <span>{`${item.street}, ${item.city}`} </span>
                      <br />
                      <span>{item?.postal_code}</span>
                    </p>
                    <div className="position-relative">
                      <div className="position-absolute bottom-100 start-100 translate-middle">
                        <button
                          className="btn btn-danger"
                          // style={{
                          //   right: 25,
                          //   top: "30%",
                          // }}
                          onClick={() => {
                            handleDeleteAddres(item.id);
                          }}
                        >
                          <FaTrash size={15} />
                        </button>
                      </div>
                    </div>
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
