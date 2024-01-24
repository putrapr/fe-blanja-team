import PropTypes from "prop-types";
import "./input.css";
const Input = (props) => {
  const { label, classNameLabel, onChange, id, className, ...inputProps } = props;

  return (
    <div className="formInput">
      <label htmlFor={id} className={`${classNameLabel} form-label`}>
        {label}
      </label>
      <input id={id} className={` form-control ${className} `} {...inputProps} onChange={onChange} />
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  classNameLabel: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};
export default Input;
