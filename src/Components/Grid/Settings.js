import "../../Assets/css/Grid/settings.css";
import React, { useRef } from "react";
import { store } from "../../Store";
import General from "../Settings/Pages/General";
import Navigation from "../Settings/Pages/Navigation";
import Update from "../Settings/Pages/Update";
import Installation from "../Settings/Pages/Installation";
import Help from "../Settings/Pages/Help";
import Developer from "../Settings/Pages/Developer";
import { Translator } from "../../Helpers/Language/Language";
import { setSettingsLabel } from "../../Store/Actions/creators";
import { useSelector } from "react-redux";
import * as VIEW from "../../Constants/view";
import { useEffect } from "react";

function Settings() {
  const selLabel = useSelector((state) => state.settings.label) || "general";
  const developerMode = useSelector((state) => state.settings.developerMode);
  const selectedView =
    useSelector((state) => state.menu.view) || VIEW.DUAL_VIEW;
  const settingsContent = useRef(null);

  const labels = [
    { name: "general", content: <General key={"general"} /> },
    { name: "navigation", content: <Navigation key={"navigation"} /> },
    { name: "system", content: <Update key={"system"} /> },
    { name: "installation", content: <Installation key={"installation"} /> },
    { name: "help", content: <Help key={"help"} /> },
    { name: "developer", content: <Developer key={"developer"} /> },
  ];

  useEffect(() => {
    settingsContent.current.scroll({
      top: 0,
    });
  });

  return (
    <div
      className={
        "settings sidePanel grid-element " +
        (selectedView !== VIEW.DUAL_VIEW ? " fullscreen" : "")
      }
    >
      <div className="settings-labelList">
        {labels.map(
          ({ name }) =>
            (name !== "developer" || developerMode) && (
              <p
                key={name}
                data-key={name}
                className={
                  selLabel === name
                    ? "settings-labelList-label active"
                    : "settings-labelList-label"
                }
                onClick={(e) => {
                  store.dispatch(setSettingsLabel(e.target.dataset.key));
                }}
              >
                <Translator tid={name} />
              </p>
            )
        )}
      </div>
      <div ref={settingsContent} className="settings-content">
        {labels.map(({ name, content }) => {
          if (name === selLabel) return content;
          else return null;
        })}
      </div>
    </div>
  );
}

export default Settings;
