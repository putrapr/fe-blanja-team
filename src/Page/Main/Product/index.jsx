import Navbar from "../../../Components/Module/Navbar";
import Image from "../../../assets/img/bajukoko.png";
import Card from "../../../Components/Module/Card";
import Iconstar from "../../../assets/icons/icon-start.svg";
import Nav from "../../../Components/Module/Nav";
import CountButton from "../../../Components/Base/Count";

const Product = () => {
  return (
    <>
      <Navbar />
      <main id="product-page">
        <div className="container mt-5">
          <Nav />
          <div className="product mt-5">
            <div className="row">
              <section className="col-lg-4">
                <div className="model container ">
                  <img src={Image} className="rounded img-fluid" alt="" />
                </div>
                <div className="col-auto mt-4">
                  <img
                    src={Image}
                    className="rounded mx-2 img-fluid"
                    style={{ width: "65px" }}
                    alt=""
                  />
                  <img
                    src={Image}
                    className="rounded mx-2"
                    style={{ width: "65px" }}
                    alt=""
                  />
                  <img
                    src={Image}
                    className="rounded mx-2"
                    style={{ width: "65px" }}
                    alt=""
                  />
                  <img
                    src={Image}
                    className="rounded mx-2"
                    style={{ width: "65px" }}
                    alt=""
                  />
                </div>
              </section>
              <section className="col-lg-6">
                <div className="title">
                  <h1>Baju muslim pira</h1>
                  <p>Zalora Cloth</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={Iconstar} alt="Star" />
                  <img src={Iconstar} alt="Star" />
                  <img src={Iconstar} alt="Star" />
                  <img src={Iconstar} alt="Star" />
                  <img src={Iconstar} alt="Star" />
                  <span className="text-secondary">(10)</span>
                </div>

                <div className="price mt-4">
                  <p className="my-0">Price</p>
                  <h1>Rp. 500.000</h1>
                </div>

                <div className="color mt-4">
                  <p className="my-0">Color</p>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Color</option>
                    <option value="1">White</option>
                    <option value="2">Black</option>
                    <option value="3">Red</option>
                  </select>
                </div>

                <div className="size mt-4 d-flex" id="amount">
                  <div
                    className="d-flex flex-column"
                    style={{ marginRight: "80px" }}
                  >
                    <p>Size</p>
                    <CountButton/>
                    
                  </div>
                  <div className="d-flex flex-column">
                    <p>Jumlah</p>
                    <CountButton/>
                  </div>
                </div>
                <div className="button d-flex mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-dark me-2 flex-grow-3"
                  >
                    Chat
                  </button>
                  <button
                    // onClick={() => handleAddToCart(data)}
                    type="button"
                    className="btn btn-outline-dark me-2 flex-grow-3"
                  >
                    Add Bag
                  </button>
                  <button
                    // onClick={() => handleCheckout(data)}
                    type="button"
                    className="btn btn-danger me-2 flex-grow-1"
                  >
                    Buy Now
                  </button>
                </div>
              </section>
            </div>
          </div>
          <div className="row mt-5 ">
            <section className="product col-lg-12">
              <h1>Informasi Produk</h1>
              <div className="condition mt-5">
                <h2>Condition</h2>
                <h1
                  className="capitalize"
                  style={{ color: "#DB3022", fontSize: "20px" }}
                >
                  New
                </h1>
              </div>
              <div className="description mt-5">
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  non magna rutrum, pellentesque augue eu, sagittis velit.
                  Phasellus quis laoreet dolor. Fusce nec pharetra quam.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Praesent sed enim vel turpis blandit imperdiet ac ac felis.
                  Etiam tincidunt tristique placerat. Pellentesque a consequat
                  mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo
                  vehicula. Donec quam elit, sollicitudin eu nisl at, ornare
                  suscipit magna. Donec non magna rutrum, pellentesque augue eu,
                  sagittis velit. Phasellus quis laoreet dolor. Fusce nec
                  pharetra quam. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Praesent sed enim vel turpis blandit
                  imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel
                  molestie orci.
                </p>
              </div>
              <div className="mt-5">
                <h1>Product Review</h1>
                <div className="row mt-5">
                  <div className="col-lg-2">
                    <h1>
                      5.0<span>/10</span>
                    </h1>
                    <img src={Iconstar} alt="Star" />
                    <img src={Iconstar} alt="Star" />
                    <img src={Iconstar} alt="Star" />
                    <img src={Iconstar} alt="Star" />
                    <img src={Iconstar} alt="Star" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="row mt-5">
            <div className="title-card">
              <h1>You Can Also Like This</h1>
              <p>Youve never seen it before!</p>
            </div>
          </div>
          <div
            className="content row mt-5 mb-5"
            style={{ marginRight: "20%", width: 250 }}
          >
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
