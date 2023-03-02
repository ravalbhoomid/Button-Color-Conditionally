import React, { useState } from "react";
import "./UserInput.css";
function UserInput() {
  const [generateValue, setGenerateValue] = useState("0");

  const valueGeneraterHandler = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setGenerateValue(number);
  };

  return (
    <div className="main-control">
      <div>
        <p className="generateValue-control">{generateValue}</p>
        <button
          onClick={valueGeneraterHandler}
          style={{
            backgroundColor: generateValue % 2 === 0 ? "green" : "blue",
          }}
        >
          Click me to genertate random value
        </button>
      </div>
    </div>
  );
}
export default UserInput;
