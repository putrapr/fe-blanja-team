import defaultPhoto from "../../../../../assets/profile.png";

const MyAccount = () => {
  const loading = "";
  const customer = "";
  return (
    <section id="main-content">
      <div className="main-content bg-grey">
        <div className="container bg-white">
          <div className="wrapper-card">
            <h3 className="title mb-0">My Profile</h3>
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
                        Name
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="name"
                          className="form-control"
                          placeholder="Name"
                          id="name"
                          // disabled
                          value={customer?.user_name}
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
                          value={customer?.email}
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
                          value={customer?.phone}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-3 col-form-label text-end">
                        Gender
                      </label>
                      <div className="col-sm-7 p-1">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Laki - Laki
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Perempuan
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-5">
                      {/* Text */}
                      <div className="d-flex flex-row justify-content-end align-items-center flex-shrink-0 p-0 w-25">
                      <label className="col-sm-3 col-form-label text-end">
                        Date of Birth
                      </label>
                    </div>
                    <div className="date-of-birth" style={{ width: "3%" }} />
                    {/* Field */}
                    <div className="col-sm-7 p-1 w-50">
                      <div className="d-flex flex-row gap-3">
                        <select
                          defaultValue={1}
                          className="form-select fs-6 py-2"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={31}>31</option>
                        </select>

                        <select
                          defaultValue="Januari"
                          className="form-select fs-6 py-2"
                        >
                          <option value="Januari">Januari</option>
                          <option value="Februari">Februari</option>
                          <option value="Maret">Maret</option>
                          <option value="April">April</option>
                        </select>

                        <select
                          defaultValue={1990}
                          className="form-select fs-6 py-2"
                        >
                          <option value={1990}>1990</option>
                          <option value={1991}>1991</option>
                          <option value={1992}>1992</option>
                          <option value={1993}>1993</option>
                        </select>
                      </div>
                      {/* </div> */}
                      <div className="flex-shrink-0" style={{ width: "6%" }} />
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-7 text-center">
                        <button className="btn btn-danger">Save</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-lg-4 text-start">
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

export default MyAccount;
