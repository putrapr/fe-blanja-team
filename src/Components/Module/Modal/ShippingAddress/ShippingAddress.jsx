import Modal from "react-bootstrap/Modal";
import AddANewModal from "../AddANewAddress/AddANewAddress";
import PropTypes from "prop-types";
import { useState } from "react";
const ModalShippingAddress = (props) => {
  const { show, onHide } = props;
  const [showSecondModal, setShowSecondModal] = useState(false);
  const handleShowSecondModal = () => setShowSecondModal(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1 className="text-center" onClick={handleShowSecondModal}>
            Choose another address
          </h1>
          <div className="container" onClick={handleShowSecondModal} style={{ width: "80%", border: "1px dashed grey", height: "100px", lineHeight: "100px", textAlign: "center", marginBottom: "40px" }}>
            <p style={{ verticalAlign: "middle", display: "inline-block", cursor: "pointer" }}>Add new address</p>
          </div>
          <div className="container" style={{ width: "80%", border: "1px solid #DB3022", boxSizing: "border-box", marginBottom: "100px" }}>
            <h3>Andreas Jane</h3>
            <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <h4 style={{ color: "#DB3022", cursor: "pointer" }} onClick={handleShowSecondModal}>
              Change address
            </h4>
            <AddANewModal showMe={showSecondModal} onHideMe={handleCloseSecondModal} />
          </div>
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
