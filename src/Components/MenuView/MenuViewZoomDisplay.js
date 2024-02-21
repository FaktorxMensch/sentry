import "../../Assets/css/MenuView/menuViewZoomDisplay.css";
import React from "react";
import * as ZOOM from "../../Constants/zoom";
import { useSelector } from "react-redux";
import { mapZoomTransform } from "../../Helpers/mapFunctions";

function MenuViewZoomDisplay({ map, isBigView, extraClass, active }) {
  const bigStreamZoom =
    useSelector((state) => state.menu.bigStreamZoom) || ZOOM.MIN_ZOOM_STREAM;
  const bigMapZoom =
    useSelector((state) => state.menu.bigMapZoom) || ZOOM.MIN_ZOOM_MAP;
  const smallStreamZoom =
    useSelector((state) => state.menu.smallStreamZoom) || ZOOM.MIN_ZOOM_STREAM;
  const smallMapZoom =
    useSelector((state) => state.menu.smallMapZoom) || ZOOM.MIN_ZOOM_MAP;

  return (
    <div
      className={
        "menuViewZoomDisplay" +
        (active ? " active" : "") +
        (extraClass ? " " + extraClass : "")
      }
    >
      {map && isBigView
        ? "x" + mapZoomTransform(Math.min(bigMapZoom, ZOOM.MAX_ZOOM_MAP))
        : ""}
      {!map && isBigView
        ? "x" + Math.round(Math.min(bigStreamZoom, ZOOM.MAX_ZOOM_STREAM) + 1)
        : ""}

      {map && !isBigView
        ? "x" + mapZoomTransform(Math.min(smallMapZoom, ZOOM.MAX_ZOOM_MAP))
        : ""}
      {!map && !isBigView
        ? "x" + Math.round(Math.min(smallStreamZoom, ZOOM.MAX_ZOOM_STREAM) + 1)
        : ""}
    </div>
  );
}

export default MenuViewZoomDisplay;
