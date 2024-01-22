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
          className="content row mt-5 mb-5"
          style={{ marginRight: "20%", width: 250 }}
        >
          <Card />
        </div>
      </div>
    </>
  );
};

export default Category;
