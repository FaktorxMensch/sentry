import "./../../Assets/css/TargetList/targetListTrackButton.css";
import React from "react";
import { ReactComponent as TrackIcon } from "./../../Assets/icons/crosshair.svg";
import { Translator } from "./../../Helpers/Language/Language";

function TargetListTrackButton({ action, state }) {
  return (
    <button
      className={
        state ? "targetListTrackButton active" : "targetListTrackButton"
      }
      onClick={action}
    >
      <TrackIcon></TrackIcon>
      <Translator tid={state ? "STOP TRACK" : "START TRACK"} />
    </button>
  );
}

export default TargetListTrackButton;
