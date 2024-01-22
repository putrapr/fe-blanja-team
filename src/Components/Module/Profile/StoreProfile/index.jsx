import Navbar from "../../Navbar";
import SidebarSeller from "../Sidebar";

const StoreProfile = () => {
  return (
    <body id="sidebar">
      <Navbar />
      <div className="container-fluid p-0 d-flex align-items-start vh-100">
        <div className="sidebar vh-100 w-25 d-flex">
          <SidebarSeller />
        </div>
        <div className="main-content vh-100">
          <div className="container">
            <div className="wrapper-card">
              <h3 className="title mb-0">My Store Profile</h3>
              <span className="sub-title">Manage your profile information</span>
              <hr className="mb-4" />
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
                          id="name"
                          disabled
                          value={store_name}
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
                          id="email"
                          disabled
                          value={email}
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
                          id="phone-number"
                          disabled
                          value={phone}
                        />
                      </div>
                    </div>

                    <textarea
                      className="form-control"
                      placeholder="Store Description"
                      id="floatingTextarea2"
                      style={{ height: 200 }}
                      disabled
                      value={store_description}
                    />
                  </form>
                </div>

                <div className="col-lg-4 text-center">
                  <img
                    className="preview-profile-img"
                    src={image}
                    alt="profile"
                  />
                  <div className="mb-3 upload-img mt-4">
                    <h5>Seller Name</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default StoreProfile;
