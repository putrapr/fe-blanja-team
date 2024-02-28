/* eslint-disable react/jsx-key */
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../../assets/img/Trends in.png";
import Image2 from "../../../assets/img/Black edition.png";
import Image3 from "../../../assets/img/ian.png";
import Image4 from "../../../assets/img/jas.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import Card from "../../../Components/Module/Card";
import Navbar from "../../../Components/Module/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../../config/redux/action/categoryAction";
import { FidgetSpinner } from "react-loader-spinner";
import { Link } from "react-router-dom";
import NewProduct from "../../../Components/Module/NewProduct";

const Home = () => {
  const { loading, categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <Navbar />
      <section style={{ paddingTop: 30 }}>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay={true}
          interval={3000}
        >
          <div id="page-home" className="carousel carousel-dark slide mt-5">
            <div className="carousel-inner" style={{ marginLeft: "3%" }}>
              <div
                className="carousel-item active d-flex ml-5"
                data-bs-interval="10000"
                style={{ marginLeft: "5%" }}
              >
                <div style={{ marginRight: "2%", marginTop: "5px" }}>
                  <img src={Image3} className="d-block w-20" alt="..." />
                </div>
                <div
                  style={{
                    marginRight: "2%",
                    textAlign: "center",
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={Image1}
                    className="d-block w-20"
                    alt="..."
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "absolute",
                      color: "white",
                    }}
                  >
                    Trends in 2020
                  </p>
                </div>
                <div
                  style={{
                    marginRight: "2%",
                    textAlign: "center",
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={Image2} className="d-block w-20" alt="..." />
                  <p
                    className="text-center"
                    style={{
                      position: "absolute",
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Black edition
                  </p>
                </div>
                <div style={{ marginRight: "2%", marginTop: "5px" }}>
                  <img src={Image4} className="d-block w-20" alt="..." />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
              style={{ marginLeft: "5%" }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
              style={{ marginRight: "6%" }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Carousel>
      </section>

      <section id="page-home">
        <div className="title-category px-5 mx-2 mt-5">
          <h1>Category</h1>
          <p>What are you currently looking for</p>
        </div>
        {loading && (
          <div className="d-flex align-items-center justify-content-center">
            {" "}
            <FidgetSpinner />
          </div>
        )}
        <div className="d-flex">
          {Array.isArray(categoryList) &&
            categoryList.map((category) => (
              <div className="category d-flex mb-5 mt-3" key={category.id}>
                {/* <Link to={`/category/${category.id}`}> */}
                <Link to={`/category/${category.id}`} state={{ state: category.name }}>
                  <div
                    className=" d-flex rounded-3"
                    style={{
                      marginLeft: "1%",
                      borderRadius: "8px",
                      backgroundColor: getRandomColor(),
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      padding: "20px",
                    }}
                  >
                    <img
                      src={category.image}
                      alt=""
                      style={{ display: "block", maxWidth: "100%" }}
                    />
                    <p className="title-name">{category.name}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </section>

      <section id="page-home" className="px-5 mx-2">
        <div className="title-new">
          <h1>New</h1>
          <p>You’ve never seen it before!</p>
        </div>
        <div className="d-flex flex-wrap row-gap-4 gap-3">
          <NewProduct />
        </div>
      </section>

      <section id="page-home" className="px-5 mx-2">
        <div className="title-popular">
          <h1>Popular</h1>
          <p>Find clothes that are trending recently</p>
        </div>

        <div className="d-flex flex-wrap row-gap-4 gap-3 mb-5">
          <Card />
        </div>
      </section>
    </>
  );
};

export default Home;
