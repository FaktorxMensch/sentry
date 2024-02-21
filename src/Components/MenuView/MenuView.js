import "./../../Assets/css/MenuView/menuView.css";
import React, { useState } from "react";
import { ReactComponent as NightIcon } from "./../../Assets/icons/night-full.svg";
import { ReactComponent as DayIcon } from "../../Assets/icons/day.svg";
import { ReactComponent as MapIcon } from "./../../Assets/icons/map.svg";
import { ReactComponent as PlusIcon } from "./../../Assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "./../../Assets/icons/minus.svg";
import { ReactComponent as FullscreenIcon } from "./../../Assets/icons/fullscreen.svg";
import { ReactComponent as DualViewIcon } from "./../../Assets/icons/dual-view.svg";
import { ReactComponent as PanIcon } from "./../../Assets/icons/move.svg";
import MenuViewButton from "./MenuViewButton";
import MenuViewZoomDisplay from "./MenuViewZoomDisplay";
import * as view from "../../Constants/view";
import PanTiltPanel from "./../Controls/PanTiltPanel";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AlertStatus from "./AlertStatus";

function MenuView({
  map,
  colorStream,
  thermalStream,
  handleMap,
  handleColorStream,
  handleThermalStream,
  handleZoomIn,
  handleZoomOut,
  handleView,
  dualView,
  isBigView,
}) {
  const settings = useSelector((state) => state.socket.settings);
  const [cameraControls, setCameraControls] = useState(false);

  useEffect(() => {
    if (
      settings &&
      settings["system-mode"] &&
      settings["system-mode"].value !== "manual"
    ) {
      setCameraControls(false);
    }
  }, [settings]);

  return (
    <>
      <div
        className={
          "menuView-top " +
          `${isBigView ? "menuView-top-bigView" : "menuView-top-smallView"}`
        }
      >
        <div className="menuView-groupHorizontal">
          <MenuViewButton handleClick={handleColorStream} active={colorStream}>
            <DayIcon />
          </MenuViewButton>
          <MenuViewButton
            handleClick={handleThermalStream}
            active={thermalStream}
          >
            <NightIcon />
          </MenuViewButton>
          <MenuViewButton extraClass={""} handleClick={handleMap} active={map}>
            <MapIcon />
          </MenuViewButton>
        </div>
        <div className="menuView-groupHorizontal menuView-dualViewFullScreen">
          <MenuViewButton
            handleClick={() => handleView(view.DUAL_VIEW)}
            active={dualView}
          >
            <DualViewIcon />
          </MenuViewButton>
          <MenuViewButton
            handleClick={() =>
              handleView(isBigView ? view.BIG_VIEW : view.SMALL_VIEW)
            }
            active={!dualView}
          >
            <FullscreenIcon />
          </MenuViewButton>
        </div>
      </div>
      <div
        className={
          "menuView-bottom " +
          `${
            isBigView ? "menuView-bottom-bigView" : "menuView-bottom-smallView"
          }`
        }
      >
        <div className="menuView-groupHorizontal">
          {cameraControls &&
            settings &&
            settings["system-mode"] &&
            settings["system-mode"].value === "manual" && (
              <PanTiltPanel map={map}></PanTiltPanel>
            )}
          <MenuViewButton
            extraClass={
              (cameraControls ? "controlPanelOpen" : "") +
              `${
                settings &&
                settings["system-mode"] &&
                settings["system-mode"].value !== "manual"
                  ? "buttonDisable"
                  : ""
              }`
            }
            handleClick={() => {
              setCameraControls(!cameraControls);
            }}
            active={""}
          >
            <PanIcon />
          </MenuViewButton>
        </div>
        <div className="menuView-groupVertical">
          <MenuViewButton
            extraClass={"menuViewButtonZoom"}
            handleClick={handleZoomIn}
          >
            <PlusIcon />
          </MenuViewButton>
          <MenuViewZoomDisplay map={map} isBigView={isBigView} />
          <MenuViewButton
            extraClass={"menuViewButtonZoom"}
            handleClick={handleZoomOut}
          >
            <MinusIcon />
          </MenuViewButton>
        </div>
      </div>
      {(isBigView || !dualView) && <AlertStatus></AlertStatus>}
    </>
  );
}

export default MenuView;
