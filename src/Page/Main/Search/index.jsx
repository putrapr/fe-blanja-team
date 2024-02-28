import { AiOutlineSearch } from "react-icons/ai";
import Nav from "../../../Components/Module/Nav";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../config/redux/action/productAction";
import { useEffect, useState } from "react";
import iconStar from "../../../assets/icons/icon-start.svg";
import { Link } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

const Search = () => {
  const { loading, productList, totalPages } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("ASC");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = () => {
    dispatch(getAllProduct({ sort, keyword: searchQuery }));
  };

  const handleSort = () => {
    setSort((prevSort) => (prevSort === "ASC" ? "DESC" : "ASC"));
  };

  useEffect(() => {
    dispatch(
      getAllProduct({
        sort,
        keyword: searchQuery,
        page: currentPage,
        pageSize: itemsPerPage,
      })
    );
    console.log("Sort in useEffect:", sort);
  }, [dispatch, sort, searchQuery, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Nav />
      <div className="container mt-5 d-flex justify-content-between">
        <div className="input-group flex-grow-1 me-2 w-50">
          <input
            type="text"
            className="form-control form-control-md"
            placeholder="Search"
            aria-label=".form-control-lg example"
            name="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="input-group-text px-3" onClick={handleSearch}>
            <AiOutlineSearch />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="form-select form-select-md"
            aria-label="Default select example"
            onClick={() => {
              handleSort();
            }}
          >
            Sort by price
          </button>
        </div>
      </div>
      {loading && (
        <div className="d-flex align-items-center justify-content-center">
          {" "}
          <FidgetSpinner />
        </div>
      )}
      <div className="d-flex flex-wrap row-gap-4 gap-3 mb-5 mt-3 ">
        {currentItems.map((product) => (
          <div key={product.id} id="card">
            <div className="content" style={{ marginLeft: "7%" }}>
              <div className="card h-100" style={{ width: "200px" }}>
                <Link
                  to={`/product/${product.id}`}
                  className="stretched-link"
                ></Link>
                <img
                  crossOrigin="anonymous"
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "136px" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h4
                    className="card-title text-dark"
                    style={{ fontSize: "16px" }}
                  >
                    {product.name}
                  </h4>
                  <div>
                    <h5 className="text-danger metropolis-b">
                      Rp. {product.price}
                    </h5>
                    <span className="card-text text-secondary text-break">
                      Store
                    </span>
                    <div>
                      <img src={iconStar} alt="Star" />
                      <img src={iconStar} alt="Star" />
                      <img src={iconStar} alt="Star" />
                      <img src={iconStar} alt="Star" />
                      <img src={iconStar} alt="Star" />
                      <span className="text-secondary">(10)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 && "active"}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages && "disabled"
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Search;
