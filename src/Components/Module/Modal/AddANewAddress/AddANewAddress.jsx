import Modal from "react-bootstrap/Modal";
import Input from "../../../Base/Input/input";
import PropTypes from "prop-types";
import Button from "../../../Base/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../../../config/redux/action/AddressAction";

const AddANewModal = (props) => {
  const dispatch = useDispatch();

  const { showMe, onHideMe } = props;
  const { loading } = useSelector((state) => state.address);
  const [values, setValues] = useState({
    customer_id: "",
    address_type: "",
    name_recipient: "",
    phone: "",
    street: "",
    postal_code: "",
    city: "",
    primary_address: true,
  });

  const handleSave = async () => {
    try {
      const address = await dispatch(addAddress(values));
      console.log(address);
      onHideMe();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Modal show={showMe} onHide={onHideMe} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1 className="text-center">Add New Address</h1>
          <div className="container" style={{ marginTop: "10px" }}>
            <form onSubmit={handleSubmit}>
              <Input name="address_type" label="Save address as (ex : home address, office address)" classNameLabel="text-secondary" id="1" type="text" className="form-control-lg" value={values.address_type} onChange={onChange} />
              <div className="row row-cols-sm-1 row-cols-md-2">
                <div className="col">
                  <Input name="name_recipient" label="Recipient’s name" classNameLabel="text-secondary" id="2" type="text" className="form-control-lg" value={values.name_recipient} onChange={onChange} />
                </div>
                <div className="col">
                  <Input name="phone" label="Recipient's telephone number" classNameLabel="text-secondary" id="3" type="number" className="form-control-lg" value={values.phone} onChange={onChange} />
                </div>
                <div className="col">
                  <Input name="street" label="Address" classNameLabel="text-secondary" id="4" type="text" className="form-control-lg" value={values.street} onChange={onChange} />
                </div>
                <div className="col">
                  <Input name="postal_code" label="Postal code" classNameLabel="text-secondary" id="5" type="number" className="form-control-lg" value={values.postal_code} onChange={onChange} />
                </div>
                <div className="col">
                  <Input name="city" label="City or Subdistrict" classNameLabel="text-secondary" id="6" type="text" className="form-control-lg" value={values.city} onChange={onChange} />
                </div>
              </div>
            </form>
          </div>
          <div className="container" style={{ marginTop: "40px", display: "flex", justifyContent: "end" }}>
            <Button className="btn btn-outline-secondary mx-2" onClick={onHideMe} child="Cancel" style={{ width: "150px" }}></Button>

            <Button className="btn bg-danger text-light" onClick={handleSave} child={loading ? "loading..." : "Save"} style={{ width: "150px" }}></Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
AddANewModal.propTypes = {
  showMe: PropTypes.func,
  onHideMe: PropTypes.func,
};
export default AddANewModal;
