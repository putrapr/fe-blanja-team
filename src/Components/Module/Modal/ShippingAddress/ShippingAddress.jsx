import Modal from "react-bootstrap/Modal";
import AddANewModal from "../AddANewAddress/AddANewAddress";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAddress, deleteAddress, myAddress } from "../../../../config/redux/action/AddressAction";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./ShippingAddress.css";

const MySwal = withReactContent(Swal);

const ModalShippingAddress = (props) => {
  const { show, onHide } = props;

  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleShowSecondModal = () => setShowSecondModal(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);

  const { addressList } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myAddress());
  }, [dispatch]);
  const handleSelect = (id) => {
    dispatch(changeAddress(id));
    onHide();
  };

  const handleDelete = (id) => {
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
        onHide();
        MySwal.fire("Deleted!", "Your address has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire("Cancelled", "Your address is safe :)", "error");
      }
    });
  };
  return (
    <>
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1 className="text-center">Choose another address</h1>
          <div className="container" onClick={handleShowSecondModal} style={{ width: "80%", border: "1px dashed grey", height: "100px", lineHeight: "100px", textAlign: "center", marginBottom: "40px" }}>
            <p style={{ verticalAlign: "middle", display: "inline-block", cursor: "pointer" }}>Add new address</p>
          </div>
          <AddANewModal showMe={showSecondModal} onHideMe={handleCloseSecondModal} />
          {addressList.map((item) => (
            <div key={item.id} className="container" style={{ width: "80%", border: "1px solid #DB3022", boxSizing: "border-box", marginBottom: "20px", position: "relative" }}>
              <h3>{item.name_recipient}</h3>
              <p>
                {`${item.street}, ${item.city}`}
                <br />
                {item.postal_code}
              </p>
              <h4
                style={{ color: "#DB3022", cursor: "pointer" }}
                onClick={() => {
                  handleSelect(item.id);
                }}
              >
                Change address
              </h4>
              <div id="mdDeleteWrapper">
                <TiDelete
                  id="mdDelete"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  {" "}
                </TiDelete>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};
ModalShippingAddress.propTypes = {
  show: PropTypes.func,
  onHide: PropTypes.func,
};

export default ModalShippingAddress;
