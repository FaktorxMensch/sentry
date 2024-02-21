import "./../../Assets/css/Grid/instruments.css";
import React from "react";
import { useSelector } from "react-redux";
import BoatBusParameter from "../Instruments/BoatBusParameter";
import {
  getNMEAHeading,
  getNMEASpeed,
} from "../../Helpers/getBoatBusParameter";

function Instruments() {
  const settings = useSelector((state) => state.socket.settings);
  const settingsMenu = useSelector((state) => state.menu.settings) || false;
  const controlsMenu = useSelector((state) => state.menu.controls) || false;
  const boatbus = useSelector((state) => state.socket.boatbus) || {};
  const hideBoatbus =
    useSelector((state) => state.settings.hideBoatbus) || false;

  const heading = getNMEAHeading(boatbus, settings);
  const speed = getNMEASpeed(boatbus, settings);

  return (
    <div
      className={
        "instruments grid-element" +
        (settingsMenu ? " withSettingsMenu" : "") +
        (controlsMenu ? " withControlsMenu" : "") +
        (hideBoatbus ? " hideBoatbus" : "")
      }
    >
      <BoatBusParameter
        name={"heading"}
        value={heading.value}
        unit={heading.unit}
      ></BoatBusParameter>

      <BoatBusParameter
        name={"speed"}
        value={speed.value}
        unit={speed.unit}
      ></BoatBusParameter>
    </div>
  );
}

export default Instruments;
