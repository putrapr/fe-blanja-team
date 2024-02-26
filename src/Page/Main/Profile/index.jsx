import Navbar from "../../../Components/Module/Navbar";
import SidebarCustomer from "../../../Components/Module/Profile/Customer/SidebarCustomer";
import SidebarSeller from "../../../Components/Module/Profile/Seller/SidebarSeller";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  const role = decoded.role;
  console.log(role);
  return (
    <>
      <Navbar />

      {role === "customer" ? <SidebarCustomer /> : <SidebarSeller />}
    </>
  );
};

export default Profile;
