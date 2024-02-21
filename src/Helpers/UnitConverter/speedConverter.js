import { SPEED_METRICS } from "../../Constants/units";
import {
  kmhToMs,
  knotsToMs,
  msToKmh,
  msToKnots,
  kmhToKnots,
  knotsToKmh,
} from "./converter";

export const speedConverter = (value, unit, outputUnit) => {
  if (unit === SPEED_METRICS.KM_H && outputUnit === SPEED_METRICS.KM_H) {
    return value;
  } else if (unit === SPEED_METRICS.M_S && outputUnit === SPEED_METRICS.M_S) {
    return value;
  } else if (
    unit === SPEED_METRICS.KNOTS &&
    outputUnit === SPEED_METRICS.KNOTS
  ) {
    return value;
  } else if (unit === SPEED_METRICS.KM_H && outputUnit === SPEED_METRICS.M_S) {
    return kmhToMs(value);
  } else if (unit === SPEED_METRICS.M_S && outputUnit === SPEED_METRICS.KM_H) {
    return msToKmh(value);
  } else if (unit === SPEED_METRICS.M_S && outputUnit === SPEED_METRICS.KNOTS) {
    return msToKnots(value);
  } else if (unit === SPEED_METRICS.KNOTS && outputUnit === SPEED_METRICS.M_S) {
    return knotsToMs(value);
  } else if (
    unit === SPEED_METRICS.KNOTS &&
    outputUnit === SPEED_METRICS.KM_H
  ) {
    return knotsToKmh(value);
  } else if (
    unit === SPEED_METRICS.KM_H &&
    outputUnit === SPEED_METRICS.KNOTS
  ) {
    return kmhToKnots(value);
  } else {
    //TODO
    return null;
  }
};
