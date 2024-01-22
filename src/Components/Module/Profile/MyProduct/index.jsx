import Navbar from "../../Navbar";
import SidebarSeller from "../Sidebar";

const MyProduct = () => {
  return (
    <>
      <body id="sidebar">
        <Navbar />
        <div className="container-fluid p-0 d-flex align-items-start vh-100">
          <div className="sidebar vh-100 w-25 d-flex">
            <SidebarSeller />
          </div>
          <div className="main-content vh-100">
            <div className="container">
              <div className="wrapper-card">{}</div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default MyProduct;
