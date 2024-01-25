import defaultPhoto from "../../../../../assets/profile.png";
import { FaPencilAlt } from "react-icons/fa";
import iconStore from "../../../../../assets/icons/profile/icon-store.svg";
import iconProduct from "../../../../../assets/icons/profile/icon-product.svg";
import iconOrder from "../../../../../assets/icons/profile/icon-order.svg";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import StoreProfile from "../StoreProfile";
import MyProduct from "../MyProduct";
import SellingProduct from "../SellingProduct";
import MyOrder from "../MyOrder";
import { useDispatch, useSelector } from "react-redux";
import { myProfileSeller } from "../../../../../config/redux/action/sellerAction";

const SidebarSeller = () => {
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState("storeProfile");

  const { seller } = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(myProfileSeller(seller));
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid" id="sidebar-seller">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 mt-4 bg-white">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-hv-100">
              <div className="profile-head d-flex align-items-center">
                <div className="position-relative">
                  {seller?.photo ? (
                    <img
                      src={seller?.photo}
                      alt=""
                      className="picture rounded-circle"
                    />
                  ) : (
                    <img
                      src={defaultPhoto}
                      alt=""
                      className="picture rounded-circle"
                    />
                  )}
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
              <div className="sidebar-menu">
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  {/* Store */}
                  <li className="nav-item">
                    <a
                      href="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle text-dark"
                    >
                      <img src={iconStore} alt="" style={{ width: "32px" }} />{" "}
                      <span className="ms-1 d-none d-sm-inline">Store</span>
                    </a>
                    <ul
                      className="collapse show nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <button
                          onClick={() => setOpenTab("storeProfile")}
                          className="nav-link px-0"
                        >
                          <span className="d-none d-sm-inline text-dark">
                            Store Profile
                          </span>
                        </button>
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
                      <span className="ms-1 d-none d-sm-inline text-dark">
                        Product
                      </span>
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu2"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <button
                          className="nav-link px-0"
                          onClick={() => setOpenTab("myProduct")}
                        >
                          <span className="d-none d-sm-inline text-dark">
                            My products
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="nav-link px-0"
                          onClick={() => setOpenTab("sellingProduct")}
                        >
                          <span className="d-none d-sm-inline text-dark">
                            Selling products
                          </span>
                        </button>
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
                      <span className="menu-title ms-1 d-none d-sm-inline text-dark">
                        Order
                      </span>
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <button
                          className="nav-link px-0"
                          onClick={() => setOpenTab("myOrder")}
                        >
                          <span className="d-none d-sm-inline text-dark">
                            My Order
                          </span>
                        </button>
                      </li>
                      <li>
                        <button className="nav-link px-0">
                          <span className="d-none d-sm-inline text-dark">
                            Order Cancel
                          </span>
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {openTab === "storeProfile" && <StoreProfile />}
          {openTab === "myProduct" && <MyProduct />}
          {openTab === "sellingProduct" && <SellingProduct />}
          {openTab === "myOrder" && <MyOrder />}
        </div>
      </div>
    </>
  );
};

SidebarSeller.propTypes = {
  sellerUser: propTypes.any,
};
export default SidebarSeller;
