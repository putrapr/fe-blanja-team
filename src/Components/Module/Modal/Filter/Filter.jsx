import Modal from "react-bootstrap/Modal";
import Button from "../../../Base/button";
import "./Filter.css";
const Filter = (props) => {
  const { show, onHide } = props;
  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>Filter</Modal.Header>
        <Modal.Body>
          <div className="container">
            <h4>Colors</h4>
            <ul className="colorPicker">
              <li className="color-item" id="one"></li>
              <li className="color-item" id="two"></li>
              <li className="color-item" id="three"></li>
              <li className="color-item" id="four"></li>
              <li className="color-item" id="five"></li>
            </ul>
          </div>

          <div className="container">
            <h4>Size</h4>
            <Button child="XS" style={{ borderRadius: "8px" }} />
            <Button className="bg-danger text-light" child="S" style={{ borderRadius: "8px", marginLeft: "15px" }} />
            <Button className="bg-danger text-light" child="M" style={{ borderRadius: "8px", marginLeft: "15px" }} />
            <Button child="L" style={{ borderRadius: "8px", marginLeft: "15px" }} />
            <Button child="XL" style={{ borderRadius: "8px", marginLeft: "15px" }} />
          </div>
          <div className="container">
            <h4>Category</h4>
            <Button className="bg-danger text-light " child="All" style={{ borderRadius: "8px", width: "100px", marginLeft: "0px" }} />
            <Button child="Women" style={{ borderRadius: "8px", marginLeft: "15px", width: "100px" }} />
            <Button child="Men" style={{ borderRadius: "8px", marginLeft: "15px", width: "100px" }} />
            <Button child="Boys" style={{ borderRadius: "8px", width: "100px" }} />
            <Button child="Girl" style={{ borderRadius: "8px", marginLeft: "15px", width: "100px" }} />
          </div>
          <div className="container" style={{ marginBottom: "150px" }}>
            <h4>Brand</h4>
          </div>
          <div className="container d-flex justify-content-center">
            <Button child="Discard" style={{ width: "100px" }} />
            <Button className="bg-danger text-light " child="Save" style={{ marginLeft: "15px", width: "100px" }} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Filter;
