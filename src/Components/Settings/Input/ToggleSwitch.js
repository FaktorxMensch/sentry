import "../../../Assets/css/Settings/Input/toggleSwitch.css";
import React from "react";

const ToggleSwitch = ({ state, onChange }) => (
  <label className="toggleSwitch">
    <input
      className="toggleSwitch-input"
      type="checkbox"
      defaultChecked={state}
      onChange={onChange}
    />
    <span className="toggleSwitch-slider" />
  </label>
);

export default ToggleSwitch;
