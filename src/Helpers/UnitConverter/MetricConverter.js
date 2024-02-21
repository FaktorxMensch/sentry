import React from "react";
import {
  ANGLE_METRICS,
  DISTANCE_METRICS,
  SPEED_METRICS,
  TEMPERATURE_METRICS,
} from "../../Constants/units";
import { distanceConverter } from "./distanceConverter";
import { temperatureConverter } from "./temperatureConverter";
import { speedConverter } from "./speedConverter";
import { angleConverter } from "./angleConverter";
import { useSelector } from "react-redux";
import { Translator } from "../Language/Language";

function MetricConverter({ value, unit, outputUnit = null }) {
  const distanceMetric = useSelector((state) => state.settings.distanceMetric);
  const temperatureMetric = useSelector(
    (state) => state.settings.temperatureMetric
  );
  const speedMetric = useSelector((state) => state.settings.speedMetric);
  const angleMetric = useSelector((state) => state.settings.angleMetric);

  const getMetric = (unit) => {
    if (
      unit === DISTANCE_METRICS.METERS ||
      unit === DISTANCE_METRICS.NM ||
      unit === DISTANCE_METRICS.FEET
    ) {
      return DISTANCE_METRICS;
    } else if (
      unit === TEMPERATURE_METRICS.CELSIUS ||
      unit === TEMPERATURE_METRICS.FAHRENHEIT
    ) {
      return TEMPERATURE_METRICS;
    } else if (
      unit === SPEED_METRICS.KM_H ||
      unit === SPEED_METRICS.KNOTS ||
      unit === SPEED_METRICS.M_S
    ) {
      return SPEED_METRICS;
    } else if (unit === ANGLE_METRICS.DEGREE || unit === ANGLE_METRICS.RAD) {
      return ANGLE_METRICS;
    }
  };

  const metric = getMetric(unit);
  const output = { value: null, unit: null };

  if (metric === DISTANCE_METRICS) {
    if (outputUnit === null) {
      if (unit === DISTANCE_METRICS.METERS && value >= 1852)
        output.unit = DISTANCE_METRICS.NM;
      else output.unit = distanceMetric;
    }
    output.value = distanceConverter(value, unit, output.unit);
  } else if (metric === TEMPERATURE_METRICS) {
    if (outputUnit === null) output.unit = temperatureMetric;
    output.value = temperatureConverter(value, unit, output.unit);
  } else if (metric === SPEED_METRICS) {
    if (outputUnit === null) output.unit = speedMetric;
    output.value = speedConverter(value, unit, output.unit);
  } else if (metric === ANGLE_METRICS) {
    if (outputUnit === null) output.unit = angleMetric;
    output.value = angleConverter(value, unit, output.unit);
  } else {
    return "ERROR DURING CONVERSION";
  }

  if (output.unit === DISTANCE_METRICS.NM) {
    output.value = Math.round(output.value * 10) / 10;
  } else if (output.unit === DISTANCE_METRICS.METERS) {
    output.value = Math.round(output.value);
  } else if (output.unit === DISTANCE_METRICS.FEET) {
    output.value = Math.round(output.value);
  }

  return (
    <>
      {output.value} <Translator tid={output.unit + "_" + "abbreviation"} />
    </>
  );
}

export default MetricConverter;
