import "./../../Assets/css/Grid/smallView.css";
import React from "react";
import Map from "./../Map/Map";
import Stream from "./../Stream/Stream";
import { useSelector } from "react-redux";
import MenuView from "./../MenuView/MenuView";
import { CAMERA_RATIO } from "./../../Constants/constants";
import {
  showSmallColorStream,
  showSmallMap,
  showSmallThermalStream,
  setSmallMapZoom,
  setSmallStreamZoom,
  setView,
} from "../../Store/Actions/creators";
import { store } from "../../Store";
import * as ZOOM from "../../Constants/zoom";
import { useState, useEffect, useRef } from "react";
import * as VIEW from "../../Constants/view";

function SmallView() {
  const map = useSelector((state) => state.menu.smallMap);
  const colorStream = useSelector((state) => state.menu.smallColorStream);
  const thermalStream = useSelector((state) => state.menu.smallThermalStream);
  const hideBoatbus =
    useSelector((state) => state.settings.hideBoatbus) || false;
  const streamZoom =
    useSelector((state) => state.menu.smallStreamZoom) || ZOOM.MIN_ZOOM_STREAM;
  const mapZoom =
    useSelector((state) => state.menu.smallMapZoom) || ZOOM.MIN_ZOOM_MAP;
  const targetList = useSelector((state) => state.menu.targetList);
  const selectedView =
    useSelector((state) => state.menu.view) || VIEW.DUAL_VIEW;
  const settingsMenu = useSelector((state) => state.menu.settings) || false;
  const controlsMenu = useSelector((state) => state.menu.controls) || false;
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const menuViewTop = document.getElementsByClassName("menuView-top-smallView");
  const menuViewBottom = document.getElementsByClassName(
    "menuView-bottom-smallView"
  );

  const getMenuViewSizes = (menuView, hPos) => {
    let width = 0,
      height = 0;

    if (menuView.length !== 0) {
      if (hPos === "left") {
        width = menuView[0].children[0].clientWidth;
        height = menuView[0].children[0].clientHeight;
      } else if (hPos === "right") {
        width = menuView[0].children[1].clientWidth;
        height = menuView[0].children[1].clientHeight;
      }
    }

    return { width, height };
  };

  const menuViewSizes = {
    topLeft: getMenuViewSizes(menuViewTop, "left"),
    topRight: getMenuViewSizes(menuViewTop, "right"),
    bottomLeft: getMenuViewSizes(menuViewBottom, "left"),
    bottomRight: getMenuViewSizes(menuViewBottom, "right"),
  };

  function getSize() {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
    }
  }

  useEffect(() => getSize());

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);

  return (
    <div
      className={
        "smallView grid-element" +
        (selectedView === VIEW.SMALL_VIEW ? " fullscreen" : "") +
        (targetList ? " withTargetList" : "") +
        (settingsMenu ? " withSettingsMenu" : "") +
        (controlsMenu ? " withControlsMenu" : "") +
        (hideBoatbus ? " hideBoatbus" : "")
      }
      ref={ref}
    >
      {map && (
        <Map
          size={{ width, height }}
          mapZoom={mapZoom}
          menuViewSizes={menuViewSizes}
        ></Map>
      )}
      {(thermalStream || colorStream) && (
        <Stream
          style={{
            width:
              CAMERA_RATIO > width / height ? CAMERA_RATIO * height : width,
            height:
              CAMERA_RATIO > width / height ? height : width / CAMERA_RATIO,
            marginLeft:
              CAMERA_RATIO > width / height
                ? (width - CAMERA_RATIO * height) / 2
                : 0,
            marginTop:
              CAMERA_RATIO > width / height ? 0 : height - width / CAMERA_RATIO,
          }}
          streamZoom={streamZoom}
          zoomAction={(data) => store.dispatch(setSmallStreamZoom(data))}
          thermalStream={thermalStream}
          colorStream={colorStream}
        ></Stream>
      )}
      <MenuView
        map={map}
        colorStream={colorStream}
        thermalStream={thermalStream}
        handleMap={() => store.dispatch(showSmallMap())}
        handleColorStream={() => store.dispatch(showSmallColorStream())}
        handleThermalStream={() => store.dispatch(showSmallThermalStream())}
        handleZoomIn={() => {
          if (map) {
            store.dispatch(
              setSmallMapZoom(
                Math.min(mapZoom + ZOOM.MAP_ZOOM_STEP, ZOOM.MAX_ZOOM_MAP)
              )
            );
          } else {
            store.dispatch(
              setSmallStreamZoom(
                Math.min(
                  streamZoom + ZOOM.STREAM_ZOOM_STEP,
                  ZOOM.MAX_ZOOM_STREAM
                )
              )
            );
          }
        }}
        handleZoomOut={() => {
          if (map) {
            store.dispatch(
              setSmallMapZoom(
                Math.max(mapZoom - ZOOM.MAP_ZOOM_STEP, ZOOM.MIN_ZOOM_MAP)
              )
            );
          } else {
            store.dispatch(
              setSmallStreamZoom(
                Math.max(
                  streamZoom - ZOOM.STREAM_ZOOM_STEP,
                  ZOOM.MIN_ZOOM_STREAM
                )
              )
            );
          }
        }}
        dualView={selectedView === VIEW.DUAL_VIEW}
        handleView={(view) => store.dispatch(setView(view))}
        isBigView={false}
      ></MenuView>
    </div>
  );
}
export default SmallView;
