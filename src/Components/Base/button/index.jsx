import PropTypes from "prop-types";
import "./button.css";
const Button = (props) => {
  const { onClick, style, className, child, type="button" } = props;
  return (
    <button onClick={onClick} type={type} className={`btn  ${className} `} style={style}>
      {child}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  child: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
