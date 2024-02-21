import "../../Assets/css/Popups/installerMode.css";
import React from "react";
import { store } from "../../Store";
import {
  setInstallerMode,
  setDeveloperMode,
  setSettingsLabel,
} from "../../Store/Actions/creators";
import { Translator } from "./../../Helpers/Language/Language";
import { ReactComponent as ServiceIcon } from "./../../Assets/icons/service.svg";
import { ReactComponent as LeaveIcon } from "./../../Assets/icons/log-out.svg";

function InstallerMode({ installerMode, developerMode }) {
  return (
    <div
      className={
        "installerMode" +
        (installerMode ? " installer" : "") +
        (developerMode ? " developer" : "")
      }
    >
      <ServiceIcon></ServiceIcon>
      {developerMode ? (
        <p>
          <Translator tid={"dev mode"} />
        </p>
      ) : installerMode ? (
        <p>
          <Translator tid={"installer mode"} />
        </p>
      ) : (
        <></>
      )}
      <button
        className="installerMode-close"
        onClick={() => {
          if (installerMode === true) {
            store.dispatch(setInstallerMode(false));
          }
          if (developerMode === true) {
            store.dispatch(setDeveloperMode(false));
          }
          store.dispatch(setSettingsLabel(null));
        }}
      >
        <LeaveIcon></LeaveIcon>
      </button>
    </div>
  );
}

export default InstallerMode;
