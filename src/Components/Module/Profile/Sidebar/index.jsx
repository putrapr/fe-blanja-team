import defaultPhoto from "../../../../assets/profile.png";
import { FaPencilAlt } from "react-icons/fa";
import iconStore from "../../../../assets/icon/profile/icon-store.svg";
import iconProduct from "../../../../assets/icon/profile/icon-product.svg";
import iconOrder from "../../../../assets/icon/profile/icon-order.svg";
import "../Sidebar/sidebarSeller.module.css";
import Navbar from "../../Navbar";
import { useState } from "react";

const SidebarSeller = ({ sellerUser, openTab, setOpenTab }) => {
  const [store, setStore] = useState(false);
  const [product, setProduct] = useState(false);
  const [order, setOrder] = useState(false);

  const handleStore = () => {
    if (store) {
      setStore(false);
      setOpenTab("store");
    } else {
      setOpenTab("store");
      setStore(true);
      setProduct(false);
      setOrder(false);
    }
  };

  const handleProduct = () => {
    if (product) {
      setProduct(false);
      setOpenTab("product");
    } else {
      setOpenTab("product");
      setStore(false);
      setProduct(true);
      setOrder(false);
    }
  };

  const handleOrder = () => {
    if (order) {
      setOrder(false);
      setOpenTab("order");
    } else {
      setOpenTab("order");
      setStore(false);
      setProduct(false);
      setOrder(true);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <div
                className="profile-head d-flex align-items-center"
                onClick={""}
              >
                <div className="position-relative">
                  <img
                    src={defaultPhoto}
                    alt=""
                    className="picture rounded-circle"
                  />
                </div>

                <div className="profile-edit p-3">
                  <p className="seller-name text-dark fw-bold mb-2">
                    Fajar Adi Prasetio
                  </p>
                  <p className="edit-text text-dark">
                    <FaPencilAlt size={14} /> Ubah profile
                  </p>
                </div>
              </div>
              <div className="">
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  {/* Store */}
                  <li className="nav-item dropdown">
                    <a
                      href="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link dropdown-toogle px-0 align-middle"
                    >
                      <img src={iconStore} alt="" style={{ width: "32px" }} />{" "}
                      <span
                        className={`ms-1 d-none d-sm-inline ${
                          openTab === "store_profile"
                            ? "fw-semibold"
                            : "text-gray"
                        }`}
                      >
                        Store
                      </span>
                    </a>
                    <ul
                      className="collapse show nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a to="/store-profile" className="nav-link px-0">
                          <span className={`d-none d-sm-inline text-dark`}>
                            Store Profile
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#submenu2"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle "
                    >
                      <img src={iconProduct} alt="" style={{ width: "32px" }} />{" "}
                      <span className="ms-1 d-none d-sm-inline">Product</span>
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu2"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">
                            My products
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">
                            Selling products
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle "
                    >
                      <img src={iconOrder} alt="" style={{ width: "32px" }} />{" "}
                      <span className="menu-title color-primary ms-1 d-none d-sm-inline">
                        Order
                      </span>
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">
                            My products
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          <span className="d-none d-sm-inline">
                            Selling products
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col py-3">Content area...</div> */}
        </div>
      </div>
    </>
  );
};

export default SidebarSeller;
