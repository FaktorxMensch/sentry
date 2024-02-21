import { angleConverter } from "./UnitConverter/angleConverter";
import { ANGLE_METRICS, SPEED_METRICS } from "../Constants/units";
import { speedConverter } from "./UnitConverter/speedConverter";

const HEADING_PROPERTY = {
  PGN: "heading",
  SETTING: "heading-src",
  NAME: "heading",
};

const SPEED_PROPERTY = {
  PGN: "cogsog",
  SETTING: "cogsog-src",
  NAME: "sog2",
};

const getBoatBusProperty = (boatbus, settings, prop) => {
  if (boatbus[prop.PGN] && settings && settings[prop.SETTING])
    if (boatbus[prop.PGN][settings[prop.SETTING].value])
      if (boatbus[prop.PGN][settings[prop.SETTING].value][prop.NAME])
        return {
          value:
            boatbus[prop.PGN][settings[prop.SETTING].value][prop.NAME].value,
          unit: boatbus[prop.PGN][settings[prop.SETTING].value][prop.NAME].unit,
        };
  return {
    value: "--",
    unit: "",
  };
};

export const getNMEAHeading = (boatbus, settings) => {
  const prop = getBoatBusProperty(boatbus, settings, HEADING_PROPERTY);

  if (prop.value === "--") {
    return { value: "--", unit: ANGLE_METRICS.DEGREE };
  } else {
    return {
      value: Math.round(
        angleConverter(prop.value, prop.unit, ANGLE_METRICS.DEGREE)
      ),
      unit: ANGLE_METRICS.DEGREE,
    };
  }
};

export const getNMEASpeed = (boatbus, settings) => {
  const prop = getBoatBusProperty(boatbus, settings, SPEED_PROPERTY);

  if (prop.value === "--") {
    return { value: "--", unit: SPEED_METRICS.KNOTS };
  } else {
    return {
      value:
        Math.round(
          speedConverter(prop.value, prop.unit, SPEED_METRICS.KNOTS) * 10
        ) / 10,
      unit: SPEED_METRICS.KNOTS,
    };
  }
};
