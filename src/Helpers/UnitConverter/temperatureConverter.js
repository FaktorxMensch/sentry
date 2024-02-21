import { TEMPERATURE_METRICS } from "../../Constants/units";
import { celsiusToFahrenheit } from "./converter";

export const temperatureConverter = (value, unit, outputUnit) => {
  if (
    unit === TEMPERATURE_METRICS.CELSIUS &&
    outputUnit === TEMPERATURE_METRICS.CELSIUS
  ) {
    return value;
  } else if (
    unit === TEMPERATURE_METRICS.CELSIUS &&
    outputUnit === TEMPERATURE_METRICS.FAHRENHEIT
  ) {
    return celsiusToFahrenheit(value);
  }
};
