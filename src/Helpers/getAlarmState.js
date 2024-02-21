import * as state from "./../Constants/threatLevel";
import { getTargetThreatLevel } from "./getTargetThreat";

const getAlarmState = (settings, targets) => {
  let output = state.DEFAULT;

  targets.forEach((target) => {
    const targetState = getTargetThreatLevel(settings, target.alarmCertainty);

    if (targetState === state.DANGER) {
      output = state.DANGER;
    } else if (targetState === state.WARNING && output === state.DEFAULT) {
      output = state.WARNING;
    }
  });

  return output;
};

export default getAlarmState;
