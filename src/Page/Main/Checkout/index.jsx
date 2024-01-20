import Button from "../../../Components/Base/button";
import ModalShippingAddress from "../../../Components/Module/Modal/ShippingAddress/ShippingAddress";

import { useState } from "react";

const Checkout = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <h4>Check me</h4>
      <Button className=" btn-outline-secondary" child="Choose another address" style={{ borderRadius: "50px" }} onClick={handleShow} />
      <ModalShippingAddress show={show} onHide={handleClose} />
    </div>
  );
};

export default Checkout;
