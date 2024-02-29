import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const {state} = useLocation();
  return (
    <>
      <div className="container mt-5">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" style={{ textDecoration: "none", color: "#9B9B9B" }}>
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                to="/category"
                style={{ textDecoration: "none", color: "#9B9B9B" }}
              >
                Category
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#9B9B9B" }}
            >
              {/* {state.state} */}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Nav;
