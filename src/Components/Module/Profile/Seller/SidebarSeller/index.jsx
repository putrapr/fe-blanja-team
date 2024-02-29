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
import { Modal } from "react-bootstrap";
import { MdDriveFolderUpload } from "react-icons/md";
import Input from "../../../../Base/Input/input";
import Button from "react-bootstrap/Button";
import { updateImageSeller } from "../../../../../config/redux/action/sellerAction";

const SidebarSeller = () => {
  const dispatch = useDispatch();
  const [saveImage, setSaveImage] = useState(null)
  const [image, setImage] = useState("")

  const [openTab, setOpenTab] = useState("storeProfile");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loading, seller } = useSelector((state) => state.seller);
  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  };
  const handleEditImage = async(e) => {
    try {
      e.preventDefault()
      const form = new FormData()
      form.append("image", saveImage)
      await dispatch(updateImageSeller(form))
      dispatch(myProfileSeller())
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    dispatch(myProfileSeller(seller));
  }, []);
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update Your Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <h3>loading....</h3>}
          <div className={`container `}>
            <form  onClick={() => document.querySelector(".image").click()}>
              {image ? <img src={image} style={{ width: "100%", height: "100%" }} /> : <MdDriveFolderUpload />}
              <Input className="image" name="image" type="file" placeholder="upload an Image" required={true} onChange={handleUploadChange} hidden />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            delete
          </Button>
          <Button variant="danger" onClick={handleEditImage}>
            {loading ? "loading..." : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Navbar /> */}
      <div className="container-fluid" id="sidebar-seller">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 mt-4 bg-white">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-hv-100">
              <div className="profile-head d-flex align-items-center">
                <div className="position-relative" style={{width: 50}}>
                  {seller?.image ? (
                    <img
                      src={seller.image}
                      alt=""
                      className="picture rounded-circle"
                      style={{width: "100%"}}
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
                    {seller?.name}
                  </p>
                  <p className="edit-text text-dark" onClick={handleShow}>
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
