import "./../../Assets/css/Grid/menu.css";
import React, { useRef, useState, useEffect } from "react";
import MenuSettings from "./../Menu/MenuSettings";
import MenuModes from "./../Menu/MenuModes";

function Menu() {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  function getSize() {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
    }
  }

  useEffect(() => getSize());

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);

  return (
    <div ref={ref} className={"menu grid-element"}>
      <MenuModes width={width}></MenuModes>
      <MenuSettings width={width}></MenuSettings>
    </div>
  );
}

export default Menu;
