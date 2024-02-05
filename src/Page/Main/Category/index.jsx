import Navbar from "../../../Components/Module/Navbar";
import Card from "../../../Components/Module/Card";
import Nav from "../../../Components/Module/Nav";

const Category = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Nav />
        <div>
          <h1>T-shirt</h1>
        </div>
        <div
            className="d-flex flex-wrap row-gap-4 gap-3 mb-5 mt-3"
            style={{ height: "136px" }}
          >
            <Card />
          </div>
      </div>
    </>
  );
};

export default Category;
