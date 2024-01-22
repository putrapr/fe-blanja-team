import iconStar from "../../../assets/icons/icon-start.svg";
import { Link } from "react-router-dom";
import img from "../../../assets/img/jasnew.png";

const Card = () => {
  return (
    <div id="card">
      <div className="content " style={{ marginLeft: "6%" }}>
        <div className="card h-100">
          <Link to={`/product`} className="stretched-link"></Link>

          <img
            crossOrigin="anonymous"
            src={img}
            className="card-img-top"
            alt="cardImage"
            style={{ height: "136px" }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h4 className="card-title text-dark" style={{ fontSize: "16px" }}>
              Mens formal suit - Black & White
            </h4>
            <div>
              <h5 className="text-danger metropolis-b">Rp. 500.000</h5>
              <span className="card-text text-secondary text-break">
                Zalora Cloth
              </span>
              <div>
                <img src={iconStar} alt="Star" />
                <img src={iconStar} alt="Star" />
                <img src={iconStar} alt="Star" />
                <img src={iconStar} alt="Star" />
                <img src={iconStar} alt="Star" />
                <span className="text-secondary">(10)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
