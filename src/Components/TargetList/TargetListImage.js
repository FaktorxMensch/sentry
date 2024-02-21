import "./../../Assets/css/TargetList/targetListImage.css";
import React from "react";

function TargetListImage({ image, alt }) {
  return (
    <div className="targetListImage">
      <img className="targetListImage" src={image} alt={alt} />
    </div>
  );
}

export default TargetListImage;
