import "./../../Assets/css/Grid/targetList.css";
import React from "react";
import TargetListTarget from "../TargetList/TargetListTarget";
import { useSelector } from "react-redux";
import { getTargetThreatLevel } from "./../../Helpers/getTargetThreat";
import { ReactComponent as ThreatCircleIcon } from "./../../Assets/icons/threat-circle.svg";
import * as state from "./../../Constants/threatLevel";
import * as VIEW from "../../Constants/view";
import { Translator } from "./../../Helpers/Language/Language";
import getCSSColor from "../../Helpers/getCSSColor";

function TargetList() {
  const targets = useSelector((state) => state.socket.targets);
  const settings = useSelector((state) => state.socket.settings);
  const selected = useSelector((state) => state.settings.selectedTarget);
  const selectedView =
    useSelector((state) => state.menu.view) || VIEW.DUAL_VIEW;

  return (
    <div
      className={
        "targetList sidePanel grid-element " +
        (selectedView !== VIEW.DUAL_VIEW ? " fullscreen" : "")
      }
    >
      <div className="targetList-content-group">
        <div className="targetList-content-group-title">
          <ThreatCircleIcon fill={getCSSColor("--danger")} />
          <p className="subtitle">
            <Translator tid={"DANGER"} />
          </p>
        </div>
        {targets &&
          targets.map((target) => {
            const targetThreatLevel = getTargetThreatLevel(
              settings,
              target.alarmCertainty
            );
            if (targetThreatLevel === state.DANGER)
              return (
                <TargetListTarget
                  key={target.name}
                  target={target}
                  selected={selected}
                  threatColor={getCSSColor("--danger")}
                />
              );
            return (
              <React.Fragment key={state.DEFAULT + "_" + target.name}>
                {targetThreatLevel === state.DANGER && (
                  <TargetListTarget
                    threatColor={getCSSColor("--danger")}
                    target={target}
                    selected={selected}
                  />
                )}
              </React.Fragment>
            );
          })}
      </div>
      <div className="targetList-content-group">
        <div className="targetList-content-group-title">
          <ThreatCircleIcon fill={getCSSColor("--warning")} />
          <p className="subtitle">
            <Translator tid={"WARNING"} />
          </p>
        </div>
        {targets &&
          targets.map((target) => {
            const targetThreatLevel = getTargetThreatLevel(
              settings,
              target.alarmCertainty
            );
            return (
              <React.Fragment key={state.DEFAULT + "_" + target.name}>
                {targetThreatLevel === state.WARNING && (
                  <TargetListTarget
                    threatColor={getCSSColor("--warning")}
                    target={target}
                    selected={selected}
                  />
                )}
              </React.Fragment>
            );
          })}
      </div>
      <div className="targetList-content-group">
        <div className="targetList-content-group-title">
          <ThreatCircleIcon fill={getCSSColor("--primary")} />
          <p className="subtitle">
            <Translator tid={"OTHER"} />
          </p>
        </div>
        {targets &&
          targets.map((target) => {
            const targetThreatLevel = getTargetThreatLevel(
              settings,
              target.alarmCertainty
            );
            return (
              <React.Fragment key={state.DEFAULT + "_" + target.name}>
                {targetThreatLevel === state.DEFAULT && (
                  <TargetListTarget
                    threatColor={getCSSColor("--primary")}
                    target={target}
                    selected={selected}
                  />
                )}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default TargetList;
