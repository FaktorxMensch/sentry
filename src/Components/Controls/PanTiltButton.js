import "../../Assets/css/Controls/panTiltButton.css";
import React from "react";
import { useState } from "react";

function PanTiltButton({
  extraClass,
  holdAction,
  holdEndAction,
  clickAction,
  children,
}) {
  const [active, setActive] = useState(false);

  return (
    <button
      className={extraClass ? "panTiltButton " + extraClass : "panTiltButton"}
      onMouseDown={() => {
        holdAction();
        setActive(true);
      }}
      onMouseLeave={() => {
        if (active) {
          holdEndAction();
        }
      }}
      onMouseUp={() => {
        holdEndAction();
        setActive(false);
      }}
      onTouchStart={() => {
        holdAction();
        setActive(true);
      }}
      onTouchEnd={() => {
        holdEndAction();
        setActive(false);
      }}
      onClick={() => {
        clickAction();
      }}
    >
      {children}
    </button>
  );
}

export default PanTiltButton;
