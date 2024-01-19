import Modal from "react-bootstrap/Modal";
import Input from "../../../Base/Input/Input";
import PropTypes from "prop-types";

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
            <Input
              label="Save address as (ex : home address, office address)"
              id="1"
              type="text"
              className="form-control-lg"
            />
            <div className="row row-cols-sm-1 row-cols-md-2">
              <div className="col">
                <Input
                  label="Recipient’s name"
                  id="2"
                  type="text"
                  className="form-control-lg"
                />
              </div>
              <div className="col">
                <Input
                  label="Recipient's telephone number"
                  id="3"
                  type="number"
                  className="form-control-lg"
                />
              </div>
              <div className="col">
                <Input
                  label="Address"
                  id="4"
                  type="text"
                  className="form-control-lg"
                />
              </div>
              <div className="col">
                <Input
                  label="Postal code"
                  id="5"
                  type="number"
                  className="form-control-lg"
                />
              </div>
              <div className="col">
                <Input
                  label="City or Subdistrict"
                  id="6"
                  type="text"
                  className="form-control-lg"
                />
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button className="btn bg-light " onClick={onHideMe}>
              cancel
            </button>

            <button className="btn bg-danger" onClick={handleSave}>
              save
            </button>
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
