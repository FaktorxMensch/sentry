import LANGUAGES from "../Constants/languages";
import {
  DISTANCE_METRICS,
  SPEED_METRICS,
  TEMPERATURE_METRICS,
  ANGLE_METRICS,
} from "./units";
import * as themes from "./themes";

export const IP = "IP";
export const FULLSCREEN = "FULLSCREEN";
export const LANGUAGE = "LANGUAGE";
export const THEME = "THEME";
export const DISTANCE_METRIC = "DISTANCE_METRIC";
export const TEMPERATURE_METRIC = "TEMPERATURE_METRIC";
export const SPEED_METRIC = "SPEED_METRIC";
export const ANGLE_METRIC = "ANGLE_METRIC";
export const DEVELOPER_MODE = "DEVELOPER_MODE";
export const INSTALLER_MODE = "INSTALLER_MODE";
export const HIDE_BOATBUS = "HIDE_BOATBUS";

export const DEFAULT_IP = "192.168.1.91";
export const DEFAULT_LANGUAGE = LANGUAGES.ENGLISH;
export const DEFAULT_THEME = themes.DARK;
export const DEFAULT_DISTANCE_METRIC = DISTANCE_METRICS.METERS;
export const DEFAULT_TEMPERATURE_METRIC = TEMPERATURE_METRICS.CELSIUS;
export const DEFAULT_SPEED_METRIC = SPEED_METRICS.KM_H;
export const DEFAULT_ANGLE_METRIC = ANGLE_METRICS.DEGREE;
export const DEFAULT_DEVELOPER_MODE = false;
export const DEFAULT_INSTALLER_MODE = false;
export const DEFAULT_HIDE_BOATBUS = false;
