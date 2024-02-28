import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import propTypes from "prop-types";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../../config/redux/action/productAction";

const ModalUpdateProduct = ({ item }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState("");
  const [data, setData] = useState({
    name: "",
    price: "",
    color: "",
    size: "",
    stock: "",
    // condition: "",
    description: "",
    image: saveImage,
    seller_id: "",
    category_id: "",
  });
  // console.log(item);

  const { loading } = useSelector((state) => state.product);

  // useEffect(() => {
  //   setData({
  //     name: product.name,
  //     price: product.price,
  //     color: product.color,
  //     size: product.size,
  //     stock: product.stock,
  //     condition: product.condition,
  //     description: product.description,
  //     image: product,
  //   });
  // }, [product, saveImage]);

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

    const formData = new FormData();
    formData.append("image", saveImage);
    formData.append("name", data?.name);
    formData.append("price", data?.price);
    formData.append("color", data?.color);
    formData.append("size", data?.size);
    formData.append("stock", data?.stock);
    // formData.append("condition", data?.condition);
    formData.append("description", data?.description);

    try {
      dispatch(
        updateProduct({
          id: item,
          data: formData,
        })
      );
      handleClose();
      alert("Recipe Updated");
    } catch (error) {
      alert(error.data.message);
    }
  };
  // console.log(item);
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
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="file" onChange={handleUpload} name="image" />

          <Form.Control
            type="text"
            placeholder="name recipes"
            className="my-3"
            name="name"
            value={data?.name}
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

          {/* <Form.Control
            type="text"
            placeholder="condition"
            className="my-3"
            name="stock"
            value={data?.condition}
            onChange={handleChange}
          /> */}
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
          <Button variant="danger" onClick={handleSubmit}>
            {loading ? "Loading.." : "Save Update Product"}
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
