import "../../Assets/css/Settings/progressBar.css";
import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progressBar">
      <div className="progressBar-bar" style={{ width: `${progress}%` }}></div>
      <span className="progressBar-bar-progress">{`${progress}%`}</span>
    </div>
  );
};

export default ProgressBar;
