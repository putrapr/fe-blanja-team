import React, { useState } from "react";
import Filter from "../../../Components/Module/Modal/Filter/Filter";
import Button from "../../../Components/Base/button";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Button className=" btn-outline-secondary" child="Filter" style={{ borderRadius: "50px" }} onClick={handleShow} />
      <Filter show={show} onHide={handleClose} />
    </div>
  );
};

export default Home;
