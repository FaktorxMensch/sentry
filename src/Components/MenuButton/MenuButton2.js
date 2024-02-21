import "../../Assets/css/MenuButton/menuButton2.css";
import React from "react";

function MenuButton2({ handleClick, active, children }) {
  return (
    <button
      onClick={handleClick}
      className={"menuButton2" + (active ? " active" : "")}
    >
      {children}
    </button>
  );
}

export default MenuButton2;
