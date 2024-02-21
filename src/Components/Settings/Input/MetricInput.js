import "../../../Assets/css/Settings/Input/metricInput.css";
import React from "react";
import { useState } from "react";

const MetricInput = ({ value, unit, action, type }) => {
  const [input, setInput] = useState(value);
  return (
    <div className="metricInput">
      <input
        type={typeof value === "number" ? "number" : "text"}
        value={Array.isArray(input) ? input.toString() : input}
        onBlur={(data) => {
          if (typeof value === "number") {
            action(parseFloat(data.currentTarget.value));
          } else {
            if (type === "list") {
              let stringArray = data.currentTarget.value.split(",");
              let floatArray = stringArray.map(function (index) {
                return parseFloat(index);
              });
              action(floatArray);
            } else action(data.currentTarget.value);
          }
        }}
        onChange={(data) => {
          setInput(data.currentTarget.value);
        }}
      />
      <div className="metricInput-metric"> {unit} </div>
    </div>
  );
};

export default MetricInput;
