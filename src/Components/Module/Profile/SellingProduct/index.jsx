import Navbar from "../../Navbar";
import SidebarSeller from "../Sidebar";

const SellingProduct = () => {
  return (
    <section id="sidebar">
      <Navbar />
      <div className="container-fluid p-0 d-flex align-items-start">
        <div className="sidebar vh-100 w-25 d-flex">
          <SidebarSeller />
        </div>
        <div className="main-content vh-100">
          <div className="container">
            <div className="wrapper-card py-2">
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
                  value=""
                  onChange=""
                  name="name_product"
                />
              </div>
            </div>

            <div className="wrapper-card py-2 mt-4">
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
                  value=""
                  onChange=""
                  name="price"
                />
              </div>
              <div className="mb-3 py-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="col-sm-3 col-form-label"
                >
                  color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: "20.5vw" }}
                  value=""
                  onChange=""
                  name="color"
                />
              </div>
              <div className="mb-3 py-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="col-sm-3 col-form-label"
                >
                  size
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: "20.5vw" }}
                  value=""
                  onChange=""
                  name="size"
                />
              </div>

              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="col-sm-3 col-form-label"
                >
                  Category
                </label>
                <select
                  className="form-select form-select-sm"
                  aria-label="Small select example"
                  onChange=""
                  style={{ width: "20.5vw" }}
                  value=""
                >
                  {/* {categoryArray?.map((item,index) => (
                  <option key={index} value={item.category_id}>
                    {item?.name_category}
                  </option>
                ))} */}
                </select>
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
                  value=""
                  onChange=""
                  name="stock"
                />
                <div className="mt-4">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="col-sm-3 col-form-label"
                  >
                    Condition
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="input1"
                    style={{ width: "20.5vw" }}
                    value=""
                    onChange=""
                    name="condition"
                  />
                </div>
              </div>
            </div>
            <div className="wrapper-card py-2 mt-4">
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
                        name="image_product"
                        onChange=""
                      />
                      <img
                        src=""
                        style={{
                          width: "20vh",
                          height: "13vh",
                          objectFit: "contain",
                        }}
                        alt="Uploaded"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="wrapper-card py-2 mt-4">
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
                    value=""
                    name="description"
                    onChange=""
                  >
                    {" "}
                  </textarea>
                  <label className="form-label" htmlFor="form6Example7"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-2 mx-auto">
            <button
              className="btn btn-danger rounded-pill"
              type="button"
              onClick=""
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
