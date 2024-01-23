import propTypes from "prop-types";
import "./storeProfile.css";
import defaultPhoto from "../../../../../assets/profile.png";
// import { useSelector } from "react-redux";

const StoreProfile = () => {
  const loading = "";
  const seller = "";
  return (
    <section id="main-content">
      <div className="main-content hv-50 bg-grey">
        <div className="container bg-white">
          <div className="wrapper-card">
            <h3 className="title mb-0">My Store Profile</h3>
            <span className="sub-title">Manage your profile information</span>
            <hr className="mb-4" />
            {loading ? (
              "loading..."
            ) : (
              <div className="row">
                <div className="col-lg-8">
                  <form>
                    <div className="row mb-3 ">
                      <label
                        htmlFor="name"
                        className="col-sm-3 col-form-label text-end"
                      >
                        Store Name
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="name"
                          className="form-control"
                          placeholder="Store Name"
                          id="name"
                          // disabled
                          value={seller?.store_name}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="email"
                        className="col-sm-3 col-form-label text-end"
                      >
                        Email
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          // disabled
                          value={seller?.email}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="phone-number"
                        className="col-sm-3 col-form-label text-end"
                      >
                        Phone Number
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="phone-number"
                          className="form-control"
                          placeholder="Phone Number"
                          id="phone-number"
                          // disabled
                          value={seller?.phone}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-3 col-form-label text-end">
                        Store Description
                      </label>
                      <div className="col-sm-7">
                        <textarea
                          className="form-control"
                          placeholder="Store Description"
                          id="floatingTextarea2"
                          style={{ height: 200 }}
                          // disabled
                          value={seller?.store_description}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-7 text-center">
                        <button className="btn btn-danger">Save</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-lg-4 text-center">
                  <img
                    className="preview-profile-img"
                    src={defaultPhoto}
                    alt="profile"
                  />
                  <div className="mb-3 upload-img mt-4 text-dark">
                    <h5>Toko pak edi</h5>
                  </div>
                  <div className="mb-3 button-upload mt-4 text-dark">
                    <button className="btn btn-secondary">Upload file</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

StoreProfile.propTypes = {
  data: propTypes.any,
  showImage: propTypes.any,
  handleChangeImage: propTypes.any,
  handleChange: propTypes.any,
  handleSubmit: propTypes.any,
  isLoading: propTypes.any,
  image: propTypes.any,
};
export default StoreProfile;
