import "./../../Assets/css/Grid/controls.css";
import React from "react";
import { useSelector } from "react-redux";
import * as VIEW from "../../Constants/view";

const Controls = () => {
  const selectedView =
    useSelector((state) => state.menu.view) || VIEW.DUAL_VIEW;

  return (
    <div
      className={
        "controls sidePanel grid-element " +
        (selectedView !== VIEW.DUAL_VIEW ? " fullscreen" : "")
      }
    ></div>
  );
};

export default Controls;
