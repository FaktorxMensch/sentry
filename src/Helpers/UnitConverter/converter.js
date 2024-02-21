export const degreeToRad = (value) => {
  return (value * Math.PI) / 180;
};

export const radToDegree = (value) => {
  return (value * 180) / Math.PI;
};

export const nauticalMilesToMeters = (value) => {
  return value * 1852;
};

export const metersToNauticalMiles = (value) => {
  return value / 1852;
};

export const metersToFeet = (value) => {
  return value * 3.2804;
};

export const feetToMeters = (value) => {
  return value / 3.2804;
};

export const nauticalMilesToFeet = (value) => {
  return value * 6076;
};

export const feetToNauticalMiles = (value) => {
  return value / 6076;
};

export const celsiusToFahrenheit = (value) => {
  return (value * 9) / 5 + 32;
};

export const fahrenheitToCelsius = (value) => {
  return ((value - 32) * 5) / 9;
};

export const msToKmh = (value) => {
  return value * 3.6;
};

export const kmhToMs = (value) => {
  return value / 3.6;
};

export const kmhToKnots = (value) => {
  return value * 0.539956803;
};

export const knotsToKmh = (value) => {
  return value / 0.539956803;
};

export const msToKnots = (value) => {
  return value * 1.9438452;
};

export const knotsToMs = (value) => {
  return value / 1.9438452;
};
