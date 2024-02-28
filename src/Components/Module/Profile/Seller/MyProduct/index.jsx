import { useEffect, useState } from "react";
// import ModalUpdateProduct from "../../../Modal/ModalUpdateProduct";
import "./myproduct.css";
import {
  FaSearch,
  // FaTrash
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  // deleteProduct,
  getMyProductBySellerId,
} from "../../../../../config/redux/action/productAction";
import { jwtDecode } from "jwt-decode";

const MyProduct = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const { productList } = useSelector((state) => state.product);
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  const id = decoded.id;

  useEffect(() => {
    dispatch(getMyProductBySellerId(id));
  }, []);
  // const handleSearch = () => {};

  // const handleDelete = async () => {
  //   // try {
  //   //   dispatch(deleteProduct(id));
  //   // } catch (error) {
  //   //   alert(error.data.message);
  //   // }
  // };
  console.log(productList);
  return (
    <section id="myProduct">
      <div className="main-content hv-50 bg-grey">
        <div className="container bg-white">
          <div className="wrapper-card">
            <h3 className="title mb-0">My Product</h3>
            <hr className="mb-3" />
            {/* navpils */}
            <ul className="nav mb-3" id="pills-tab-product" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-item-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  All Items
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Sold Out
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Archived
                </button>
              </li>
            </ul>
            <div className="search mb-3">
              <div className="icon py-2 px-4">
                <FaSearch />
              </div>
              <input
                type="search"
                className="form-control p-2"
                id="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      {/* <ModalProduct /> */}
                      <table className="table table-hover">
                        <thead className="table-light text-center ">
                          <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productList.map((item, index) => (
                            <tr key={index}>
                              <td className="text-center">{item.name}</td>
                              <td className="text-center">{item.price}</td>
                              <td className="text-center">{item.stock}</td>

                              {/* <td className="text-center">
                                <ModalUpdateProduct item={item} />

                                <button
                                  type="button"
                                  onClick={() => handleDelete(item.id)}
                                  className="btn btn-danger"
                                >
                                  <FaTrash />
                                </button>
                              </td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* sold out */}
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <table className="table table-hover">
                        <thead className="table-light text-center ">
                          <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* archived */}
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <table className="table table-hover">
                        <thead className="table-light text-center ">
                          <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProduct;
