import dummyProductImage from "../../../assets/gez-xavier-mansfield-b34E1vh1tYU-unsplash 2.svg";
import PropTypes from "prop-types";
const CheckoutCard = (props) => {
  const { title, productDesc, price, src } = props;
  return (
    <div>
      <div className="row " style={{ marginTop: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
        <div className="col-2">
          <img src={dummyProductImage || src} style={{ height: "100%" }} />
        </div>
        <div className="col-8 " style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
            <h6>{title}</h6>
            <p style={{ color: "#9B9B9B", paddingBottom: "0" }}>{productDesc}</p>
          </div>
        </div>
        <div className="col-2">
          <h6 style={{ height: "80px", lineHeight: "80px" }}>Rp.{price}</h6>
        </div>
      </div>
    </div>
  );
};
CheckoutCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  productDesc: PropTypes.string,
  price: PropTypes.string,
};
export default CheckoutCard;
