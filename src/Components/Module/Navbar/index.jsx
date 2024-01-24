import Logo from "../../../assets/icons/shopping-bag 1.svg";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch, FaRegBell, FaUser } from "react-icons/fa";
import { FiShoppingCart, FiFilter } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import "./Navbar.css";
import Button from "../../Base/button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleMybagClick = () => {
    navigate("/mybag");
  };

  return (
    <div id="nav">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
            <span>Blanja</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse `} id="navbarNav">
            <ul className="navbar-nav align-items-center me-auto mb-2 mb-lg-0 ">
              <li
                className="nav-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  style={{
                    border: "1px solid #8E8E93",
                    borderRadius: "50px",
                    width: "500px",
                    paddingRight: "40px",
                    marginLeft: "50px",
                  }}
                  aria-describedby="search-icon"
                  onClick={handleSearchClick}
                />
                <FaSearch
                  style={{
                    color: "#8E8E93",
                    cursor: "pointer",
                    position: "absolute",
                    right: "15px",
                    zIndex: "1",
                  }}
                 
                />
              </li>
              <li className="nav-item ms-2">
                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid #8E8E93",
                    borderRadius: "30%",
                    backgroundColor: "transparent",
                  }}
                >
                  <FiFilter style={{ width: "100%", height: "18px", color: "#9B9B9B" }} />
                </button>
              </li>
              {isLoggedIn ? (
                <div className="d-flex">
                  <li className="nav-item" style={{ marginLeft: "70px" }}  onClick={handleMybagClick}>
                    <FiShoppingCart style={{ width: "100%", height: "25px", color: "#9B9B9B", marginLeft: "170px" }} />
                  </li>
                  <li className="nav-item">
                    <FaRegBell style={{ width: "100%", height: "25px", color: "#9B9B9B", marginLeft: "90px" }} />
                  </li>
                  <li className="nav-item">
                    <MdOutlineMailOutline style={{ width: "100%", height: "25px", color: "#9B9B9B", marginLeft: "60px" }} />
                  </li>
                  <li className="nav-item">
                    <FaUser
                      style={{
                        width: "100%",
                        height: "25px",
                        color: "#9B9B9B",
                        borderRadius: "50%",
                        marginLeft: "50px",
                      }}
                    />
                  </li>
                </div>
              ) : (
                <div className="d-flex">
                  <Button child="log In" className="btn bg-danger text-light ms-5" style={{ width: "80px" }} onClick={() => navigate("/login")} />
                  <Button child="register" className="btn btn-outline-secondary mx-2" style={{ width: "80px" }} onClick={() => navigate("/register")} />
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
