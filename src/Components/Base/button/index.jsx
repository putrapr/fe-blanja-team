import PropTypes from "prop-types";
import "./button.css";
const Button = (props) => {
  const { onClick, style, className, child } = props;
  return (
    <button onClick={onClick} type="button" className={`btn  ${className} `} style={style}>
      {child}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  child: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
