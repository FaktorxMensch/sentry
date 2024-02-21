import "../../Assets/css/Popups/loader.css";
import React from "react";

function Loader() {
  return (
    <div className="loader" data-side="top">
      <div className="loader-left"></div>
      <div className="loader-right"></div>
    </div>
  );
}

export default Loader;
