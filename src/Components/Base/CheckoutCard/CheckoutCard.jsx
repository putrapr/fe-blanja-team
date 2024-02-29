import { useDispatch, useSelector } from "react-redux";
import dummyProductImage from "../../../assets/gez-xavier-mansfield-b34E1vh1tYU-unsplash 2.svg";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { getByCustomerId } from "../../../config/redux/action/myBagAction";
const CheckoutCard = (props) => {
  const { title, productDesc, price, src } = props;
  const { myBagList } = useSelector((state) => state.myBag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByCustomerId());
  }, [dispatch]);
  return (
    <div>
      <div
        className="row"
        style={{ marginTop: "20px", paddingTop: "10px", paddingBottom: "10px", }}
      >
        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
          {myBagList.map((item) => (
            <div key={item.id}>
              <img src={item.image} style={{ height: "100%", width: "70%" }} />
            </div>
          ))}
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-6 col-xl-6"
          style={{ position: "relative" }}
        >
          <div className="mt-3">
            <h6>{title}</h6>
            <p style={{ color: "#9B9B9B", paddingBottom: "0" }}>
              {productDesc}
            </p>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-4">
          <h6>Rp.{price}</h6>
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
