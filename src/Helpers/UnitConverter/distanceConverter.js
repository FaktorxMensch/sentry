import { DISTANCE_METRICS } from "../../Constants/units";
import { metersToFeet, metersToNauticalMiles } from "./converter";

export const distanceConverter = (value, unit, outputUnit) => {
  if (
    unit === DISTANCE_METRICS.METERS &&
    outputUnit === DISTANCE_METRICS.METERS
  ) {
    return value;
  } else if (
    unit === DISTANCE_METRICS.METERS &&
    outputUnit === DISTANCE_METRICS.NM
  ) {
    return metersToNauticalMiles(value);
  } else if (
    unit === DISTANCE_METRICS.METERS &&
    outputUnit === DISTANCE_METRICS.FEET
  ) {
    return metersToFeet(value);
  } else if (
    unit === DISTANCE_METRICS.NM &&
    outputUnit === DISTANCE_METRICS.METERS
  ) {
    //TODO
    return null;
  } else if (
    unit === DISTANCE_METRICS.NM &&
    outputUnit === DISTANCE_METRICS.NM
  ) {
    return value;
  } else if (
    unit === DISTANCE_METRICS.NM &&
    outputUnit === DISTANCE_METRICS.FEET
  ) {
    //TODO
    return null;
  } else if (
    unit === DISTANCE_METRICS.FEET &&
    outputUnit === DISTANCE_METRICS.METERS
  ) {
    //TODO
    return null;
  } else if (
    unit === DISTANCE_METRICS.FEET &&
    outputUnit === DISTANCE_METRICS.NM
  ) {
    //TODO
    return null;
  } else if (
    unit === DISTANCE_METRICS.FEET &&
    outputUnit === DISTANCE_METRICS.FEET
  ) {
    //TODO
    return value;
  } else {
    //TODO
    return null;
  }
};
