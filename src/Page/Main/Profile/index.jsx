import Navbar from "../../../Components/Module/Navbar";
import SidebarCustomer from "../../../Components/Module/Profile/Customer/SidebarCustomer";
import SidebarSeller from "../../../Components/Module/Profile/Seller/SidebarSeller";

const Profile = () => {
  const role = localStorage.getItem("role");
  return (
    <>
      <Navbar />

      {role === "customer" ? <SidebarCustomer /> : <SidebarSeller />}
    </>
  );
};

export default Profile;
