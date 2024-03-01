import { useEffect, useState } from "react";
import defaultPhoto from "../../../../../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import {
  myProfileCustomer,
  updateProfile,
} from "../../../../../config/redux/action/customerAction";
import Button from "../../../../Base/button";

const MyAccount = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    date_birth: "",
  });
  const { loading, customer } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(myProfileCustomer(customer));
  }, []);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updateProfile(values));
      dispatch(myProfileCustomer());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setValues({
      name: customer?.name || "",
      email: customer?.email || "",
      phone: customer?.phone || "",
      gender: customer?.gender || "",
      date_birth: customer?.date_birth || "",
    });
  }, [customer]);
  return (
    <section id="main-content">
      <div className="main-content w-75 bg-grey">
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
                          name="name"
                          type="name"
                          className="form-control"
                          placeholder="Name"
                          id="name"
                          value={values.name}
                          onChange={onChange}
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
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          value={values.email}
                          onChange={onChange}
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
                          name="phone"
                          type="phone-number"
                          className="form-control"
                          placeholder="Phone Number"
                          id="phone-number"
                          value={values.phone}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-3 col-form-label text-end">
                        Gender
                      </label>
                      <div className="col-sm-7 pt-1">
                        <div className="form-check form-check-inline">
                          <input
                            name="gender"
                            className="form-check-input"
                            type="radio"
                            id="inlineRadio1"
                            value="laki-laki"
                            onChange={onChange}
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
                            name="gender"
                            id="inlineRadio2"
                            value="perempuan"
                            onChange={onChange}
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
                    <div className="row mb-3">
                      <label className="col-sm-3 col-form-label text-end">
                        Birthday
                      </label>
                      <div className="col-sm-7">
                        <input
                          name="date_birth"
                          type="phone-number"
                          className="form-control"
                          id="phone-number"
                          value={values.date_birth}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <Button
                      child="Save"
                      style={{
                        backgroundColor: "#DB3022",
                        color: "#FFFFFF",
                        marginLeft: "13rem",
                        marginTop: "1rem",
                        width: "90px",
                      }}
                      onClick={handleEdit}
                    />
                  </form>
                </div>
                <div className="col-lg-4 text-start">
                  {customer?.image ? (
                    <img
                      width="110px"
                      height="110px"
                      style={{ borderRadius: 9999, objectFit: "cover" }}
                      src={customer?.image}
                      alt="my_image"
                    />
                  ) : (
                    <img
                      width="110px"
                      height="110px"
                      style={{ borderRadius: 9999, objectFit: "cover" }}
                      src={defaultPhoto}
                      alt="blank_picture"
                    />
                  )}
                  <div className="mb-3 upload-img mt-4 text-dark">
                    <h5>{customer?.name}</h5>
                  </div>
                  {/* <div className="mb-3 button-upload mt-4 p-1 text-dark">
                    <button className="btn btn-secondary">Upload file</button>
                  </div> */}
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
