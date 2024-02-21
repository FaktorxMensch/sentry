import * as state from "../Constants/threatLevel";
import getCSSColor from "./getCSSColor";

export const getTargetThreatLevel = (settings, certainty) => {
  const dangerThreshold = settings
    ? settings["lv3-collision-certainty-above"]
      ? settings["lv3-collision-certainty-above"].value
      : 1
    : 1;
  const warningThreshold = settings
    ? settings["lv1-collision-certainty-above"]
      ? settings["lv1-collision-certainty-above"].value
      : 1
    : 1;

  if (certainty > dangerThreshold) return state.DANGER;
  else if (certainty > warningThreshold) return state.WARNING;
  else return state.DEFAULT;
};

export const getTargetThreatColor = (settings, certainty) => {
  const threatLevel = getTargetThreatLevel(settings, certainty);

  if (threatLevel === state.DANGER) return getCSSColor("--danger");
  else if (threatLevel === state.WARNING) return getCSSColor("--warning");
  else return getCSSColor("--primary");
};
