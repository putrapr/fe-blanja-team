import defaultPhoto from "../../../../../assets/profile.png";
import { FaPencilAlt } from "react-icons/fa";
import iconAcc from "../../../../../assets/icons/profile/icon-account.svg";
import iconLoc from "../../../../../assets/icons/profile/icon-locate.svg";
import iconMyOrder from "../../../../../assets/icons/profile/icon-myorder.svg";
import { useState, useEffect } from "react";
import propTypes from "prop-types";
import MyAccount from "../MyAccount";
import ShippingAddress from "../ShippingAddress";
import MyOrder from "../MyOrder";
import { useSelector, useDispatch } from "react-redux";
import { myProfileCustomer } from "../../../../../config/redux/action/customerAction";
import { Modal } from "react-bootstrap";
import { MdDriveFolderUpload } from "react-icons/md";
import Input from "../../../../Base/Input/input";
import Button from "react-bootstrap/Button";
import { updateProfileImage } from "../../../../../config/redux/action/customerAction";

const SidebarCustomer = () => {
  const dispatch = useDispatch();
  const [saveImage, setSaveImage] = useState(null)
  const [image, setImage] = useState("")
  const [openTab, setOpenTab] = useState("myAccount");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {loading,  customer } = useSelector((state) => state.customer);
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
      await dispatch(updateProfileImage(form))
      dispatch(myProfileCustomer())
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    dispatch(myProfileCustomer(customer));
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
      <div className="container-fluid" id="sidebar-Customer">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 mt-4 bg-white">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-hv-100">
              <div className="profile-head d-flex align-items-center">
                <div className="position-relative" style={{width: 50}}>
                  {customer.image ? (
                    <img
                      src={customer.image}
                      alt=""
                      className="picture rounded-circle"
                      style={{width:"100%"}}
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
                  <p className="Customer-name text-dark fw-bold mb-2">
                    {customer.name}
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
                  {/* My Acc */}
                  <li className="nav-item">
                    <button
                      href="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle text-dark"
                      onClick={() => setOpenTab("myAccount")}
                    >
                      <img src={iconAcc} alt="" style={{ width: "32px" }} />{" "}
                      <span className="ms-1 d-none d-sm-inline">
                        My Account
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      href="#submenu2"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle "
                      onClick={() => setOpenTab("shippingAddress")}
                    >
                      <img src={iconLoc} alt="" style={{ width: "32px" }} />{" "}
                      <span className="ms-1 d-none d-sm-inline text-dark">
                        Shipping Address
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle "
                      onClick={() => setOpenTab("myOrder")}
                    >
                      <img src={iconMyOrder} alt="" style={{ width: "32px" }} />{" "}
                      <span className="menu-title ms-1 d-none d-sm-inline text-dark">
                        My Order
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {openTab === "myAccount" && <MyAccount />}
          {openTab === "shippingAddress" && <ShippingAddress />}
          {openTab === "myOrder" && <MyOrder />}
        </div>
      </div>
    </>
  );
};

SidebarCustomer.propTypes = {
  customerUser: propTypes.any,
};
export default SidebarCustomer;
