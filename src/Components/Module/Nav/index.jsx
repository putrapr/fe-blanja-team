import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="container mt-5">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/category">Category</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              T-Shirt
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Nav;
