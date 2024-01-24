import CheckoutCard from "../../../Components/Base/CheckoutCard/CheckoutCard";
import Button from "../../../Components/Base/button";
import ModalShippingAddress from "../../../Components/Module/Modal/ShippingAddress/ShippingAddress";
import Navbar from "../../../Components/Module/Navbar/index";
import { useState } from "react";
import "./checkout.css";
const Checkout = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 id="checkoutTitle">Checkout</h2>
        <h5 id="shippingAddressTitle">Shipping Address</h5>
        <div className="container addressWrapper">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
            <div className="col-lg-8">
              <h5>Andreas Jane</h5>
              <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>

              <Button className=" btn-outline-secondary" child="Choose another address" style={{ borderRadius: "50px", marginBottom: "20px" }} onClick={handleShow} />
              <ModalShippingAddress show={show} onHide={handleClose} />
              <div className="container">
                <CheckoutCard title="Men's formal suit - Black" productDesc="Zalora Cloth" price="200.000" />
                <CheckoutCard title="Men's Jacket jeans" productDesc="Zalora Cloth" price="200.000" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
                <h5 style={{ marginBottom: "20PX" }}>Shopping Summary</h5>
                <div className="row">
                  <div className="col-8">
                    <p style={{ color: "#9B9B9B" }}>order</p>
                  </div>
                  <div className="col-4">
                    <h6>
                      Rp.<span>400.000</span>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p style={{ color: "#9B9B9B" }}>Delivery</p>
                  </div>
                  <div className="col-4">
                    <h6>
                      Rp.<span>50.000</span>
                    </h6>
                  </div>
                </div>
                <div className="row " style={{ marginTop: "10px", marginBottom: "15px" }}>
                  <div className="col-8">
                    <h5> Shopping Summary </h5>
                  </div>
                  <div className="col-4">
                    <h6 style={{ color: "#DB3022" }}>
                      Rp.<span>450.000</span>
                    </h6>
                  </div>
                </div>
                <Button className="mx-auto" child="Select Payment" style={{ width: "100%", backgroundColor: "#DB3022", color: "#fff" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
