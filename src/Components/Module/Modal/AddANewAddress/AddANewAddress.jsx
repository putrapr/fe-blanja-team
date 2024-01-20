import Modal from "react-bootstrap/Modal";
import Input from "../../../Base/Input/Input";
import PropTypes from "prop-types";
import Button from "../../../Base/button";

const AddANewModal = (props) => {
  const { showMe, onHideMe } = props;
  const handleSave = () => {};
  return (
    <>
      <Modal show={showMe} onHide={onHideMe} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1 className="text-center">Add New Address</h1>
          <div className="container" style={{ marginTop: "10px" }}>
            <Input label="Save address as (ex : home address, office address)" classNameLabel="text-secondary" id="1" type="text" className="form-control-lg" />
            <div className="row row-cols-sm-1 row-cols-md-2">
              <div className="col">
                <Input label="Recipient’s name" classNameLabel="text-secondary" id="2" type="text" className="form-control-lg" />
              </div>
              <div className="col">
                <Input label="Recipient's telephone number" classNameLabel="text-secondary" id="3" type="number" className="form-control-lg" />
              </div>
              <div className="col">
                <Input label="Address" classNameLabel="text-secondary" id="4" type="text" className="form-control-lg" />
              </div>
              <div className="col">
                <Input label="Postal code" classNameLabel="text-secondary" id="5" type="number" className="form-control-lg" />
              </div>
              <div className="col">
                <Input label="City or Subdistrict" classNameLabel="text-secondary" id="6" type="text" className="form-control-lg" />
              </div>
            </div>
          </div>
          <div className="container" style={{ marginTop: "40px", display: "flex", justifyContent: "end" }}>
            <Button className="btn btn-outline-secondary mx-2" onClick={onHideMe} child="Cancel" style={{ width: "150px" }}></Button>

            <Button className="btn bg-danger text-light" onClick={handleSave} child="Save" style={{ width: "150px" }}></Button>
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
