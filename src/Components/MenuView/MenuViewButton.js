import "../../Assets/css/MenuView/menuViewButton.css";
import React from "react";

function MenuViewButton({ handleClick, extraClass, active, children }) {
  return (
    <button
      className={
        "menuViewButton" +
        (active ? " active" : "") +
        (extraClass ? " " + extraClass : "")
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default MenuViewButton;
