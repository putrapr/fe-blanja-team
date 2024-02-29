import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import propTypes from "prop-types";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  myAddress,
  updateAddress,
} from "../../../../config/redux/action/AddressAction";

const ModalUpdateAddress = ({ addressId }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loading } = useSelector((state) => state.address);

  const [data, setData] = useState({
    address_type: "",
    name_recipient: "",
    phone: "",
    street: "",
    postal_code: "",
    city: "",
    primary_address: false,
  });

  useEffect(() => {
    dispatch(myAddress());
  }, [dispatch]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateAddress(addressId, data));
      Swal.fire({
        title: "Success",
        text: "Update Address Success",
        icon: "success",
      });
      handleClose();
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Update Address Failed",
        icon: "error",
      });
    }
  };
  return (
    <>
      <button
        className="btn btn-warning"
        type="button"
        style={{ marginRight: 8 }}
        onClick={handleShow}
      >
        <FaPen color="white" />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Save address as (ex : home address, office address)"
            className="my-3"
            name="address_type"
            value={data?.address_type}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="Recipient’s name"
            className="my-3"
            name="name_recipient"
            value={data?.name_recipient}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="Recipient's telephone number"
            className="my-3"
            name="phone"
            value={data?.phone}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="Address"
            className="my-3"
            name="street"
            value={data?.street}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="Postal code"
            className="my-3"
            name="postal_code"
            value={data?.postal_code}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="City or Subdistrict"
            className="my-3"
            name="city"
            value={data?.city}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleSubmit} disabled={loading}>
            {loading ? "Loading.." : "Save Update Address"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalUpdateAddress.propTypes = {
  addressId: propTypes.any,
};
export default ModalUpdateAddress;
