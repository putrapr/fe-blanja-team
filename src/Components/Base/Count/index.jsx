import { useState } from "react";
import "./count.css";

const CountButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div id="count">
      <button onClick={handleDecrement} className="me-3 decrement">
        -
      </button>
      <input
        type="text"
        value={count}
        readOnly
        style={{
          width: 20,
          //   margin: "0 5px",
          textAlign: "center",
          border: "none",
        }}
      />
      <button onClick={handleIncrement} className="ms-3 increment">
        +
      </button>
    </div>
  );
};

export default CountButton;
