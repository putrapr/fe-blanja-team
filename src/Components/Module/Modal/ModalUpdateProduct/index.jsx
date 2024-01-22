import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import propTypes from "prop-types";

const ModalUpdateProduct = ({ item }) => {
  const [show, setShow] = useState(false);
  //   console.log(item?.recipes_id);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState("");
  const [data, setData] = useState({
    name_product: item?.name_product,
    price: item?.price,
    color: item?.color,
    size: item?.size,
    stock: item?.stock,
    description: item?.description,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
    // console.log(uploader);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("image_product", saveImage);
    formDataToSend.append("name_product", data?.name_product);
    formDataToSend.append("price", data?.price);
    formDataToSend.append("color", data?.color);
    formDataToSend.append("size", data?.size);
    formDataToSend.append("stock", data?.stock);
    formDataToSend.append("description", data?.description);
  };
  return (
    <>
      <button
        className="btn btn-warning"
        type="button"
        style={{ marginRight: 8 }}
        onClick={handleShow}
      >
        <i className="bi bi-pen" style={{ color: "white" }}></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>mau Update Product?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="file" onChange={handleUpload} name="image" />
          <Form.Control
            type="text"
            placeholder="name recipes"
            className="my-3"
            name="name_product"
            value={data?.name_product}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="price"
            className="my-3"
            name="price"
            value={data?.price}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="color"
            className="my-3"
            name="color"
            value={data?.color}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="size"
            className="my-3"
            name="size"
            value={data?.size}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="stock"
            className="my-3"
            name="stock"
            value={data?.stock}
            onChange={handleChange}
          />
          <Form.Control
            as="textarea"
            placeholder="description"
            style={{ height: "100px" }}
            name="description"
            value={data?.description}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleSubmit}>
            Save Update Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalUpdateProduct.propTypes = {
  item: propTypes.any,
};
export default ModalUpdateProduct;
