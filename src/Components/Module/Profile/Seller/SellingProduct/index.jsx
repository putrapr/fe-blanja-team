import { useState } from "react";
import { useDispatch } from "react-redux";
import "./sellingProduct.css";
import { createProduct } from "../../../../../config/redux/action/productAction";
import { jwtDecode } from "jwt-decode";

const SellingProduct = () => {
  const [data, setData] = useState("");
  const [saveImage, setSaveImage] = useState("");
  const [showImage, setShowImage] = useState("");

  const dispatch = useDispatch();

  // const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  const id = decoded.id;
  // console.log(id);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setShowImage(reader.result);
    };
    reader.readAsDataURL(uploader);
    setSaveImage(e.target.files[0]);
  };

  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(
        createProduct({
          formData,
        })
      );
    } catch (error) {
      alert(error.data.message);
    }
  };

  return (
    <section id="selling-product">
      <div className="main-content vh-50 bg-grey">
        <div className="container">
          <div className="wrapper-card bg-white py-4">
            <h5>Inventory</h5>

            <div className="border-top" />

            <div className="mb-3 py-2">
              <label
                htmlFor="exampleFormControlInput1"
                className="col-sm-3 col-form-label"
              >
                Name Product
              </label>
              <input
                type="text"
                className="form-control"
                id="input1"
                style={{ width: "20.5vw" }}
                value={data?.name}
                onChange={handleChange}
                name="name"
              />
            </div>
          </div>

          <div className="wrapper-card bg-white py-2 mt-4">
            <h5>Items Detail</h5>
            <div className="border-top" />
            <div className="mb-3 py-2">
              <label
                htmlFor="exampleFormControlInput1"
                className="col-sm-3 col-form-label"
              >
                Unit Price
              </label>
              <input
                type="text"
                className="form-control"
                id="input1"
                style={{ width: "20.5vw" }}
                value={data?.price}
                onChange={handleChange}
                name="price"
              />
            </div>
            <div className="mb-3 py-2">
              <label
                htmlFor="exampleFormControlInput1"
                className="col-sm-3 col-form-label"
              >
                Stock
              </label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="condition"
                  id="new"
                  value="new"
                  onChange={handleChange}
                  checked={data.condition === "new"}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Baru
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="condition"
                  id="second"
                  value="second"
                  onChange={handleChange}
                  checked={data.condition === "second"}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Bekas
                </label>
              </div>
            </div>
            <div className="mb-3 py-2">
              <label
                htmlFor="exampleFormControlInput1"
                className="col-sm-3 col-form-label"
              >
                Stock
              </label>
              <input
                type="text"
                className="form-control"
                id="input1"
                style={{ width: "20.5vw" }}
                value={data?.stock}
                onChange={handleChange}
                name="stock"
              />
            </div>
          </div>
          <div className="wrapper-card bg-white py-2 mt-4">
            <h5>Photo Of Goods</h5>
            <div className="border-top" />
            <div className="mb-3 py-2">
              <div id="myDIV">
                <form encType="multipart/form-data">
                  <div className="mb-3">
                    <label htmlFor="fileInput" className="form-label">
                      Pilih Gambar
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      onChange={handleUpload}
                    />
                    {showImage && (
                      <img
                        src={showImage}
                        style={{
                          width: "20vh",
                          height: "13vh",
                          objectFit: "contain",
                        }}
                        alt="Uploaded"
                      />
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="wrapper-card bg-white py-2 mt-4 mb-4">
            <h5>Description</h5>
            <div className="border-top" />
            <div className="mb-3 py-2">
              <label
                htmlFor="exampleFormControlInput1"
                className="col-sm-3 col-form-label"
              >
                Description
              </label>
              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form6Example7"
                  rows="4"
                  value={data?.description}
                  name="description"
                  onChange={handleChange}
                >
                  {" "}
                </textarea>
                <label className="form-label" htmlFor="form6Example7"></label>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-2 mx-auto">
            <button
              className="btn btn-danger rounded-pill"
              type="button"
              onClick={handleSubmit}
            >
              Jual
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingProduct;
