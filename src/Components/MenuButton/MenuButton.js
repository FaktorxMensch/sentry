import "../../Assets/css/MenuButton/menuButton.css";
import React from "react";

function MenuButton({ handleClick, active, children }) {
  return (
    <button
      onClick={handleClick}
      className={"menuButton" + (active ? " active" : "")}
    >
      {children}
    </button>
  );
}

export default MenuButton;
