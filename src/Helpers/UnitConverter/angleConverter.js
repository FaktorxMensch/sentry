import { ANGLE_METRICS } from "../../Constants/units";
import { degreeToRad, radToDegree } from "./converter";

export const angleConverter = (value, unit, outputUnit) => {
  if (unit === ANGLE_METRICS.DEGREE && outputUnit === ANGLE_METRICS.DEGREE) {
    return value;
  } else if (unit === ANGLE_METRICS.RAD && outputUnit === ANGLE_METRICS.RAD) {
    return value;
  } else if (
    unit === ANGLE_METRICS.DEGREE &&
    outputUnit === ANGLE_METRICS.RAD
  ) {
    return degreeToRad(value);
  } else if (
    unit === ANGLE_METRICS.RAD &&
    outputUnit === ANGLE_METRICS.DEGREE
  ) {
    return radToDegree(value);
  }
};
