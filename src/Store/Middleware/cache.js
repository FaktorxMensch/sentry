import * as type from "../Actions/types";
import * as key from "../../Constants/cache";
import {
  setIP,
  setLanguage,
  setTheme,
  setDeveloperMode,
  setInstallerMode,
  setDistanceMetric,
  setTemperatureMetric,
  setSpeedMetric,
  setAngleMetric,
  setHideBoatbus,
} from "../Actions/creators";
import getHTML5Storage from "../../Helpers/getHTML5Storage";
import setHTML5Storage from "../../Helpers/setHTML5Storage";

const cache = (store) => (next) => (action) => {
  switch (action.type) {
    case type.LOAD_CACHE:
      store.dispatch(setIP(getHTML5Storage(key.IP) || key.DEFAULT_IP));

      store.dispatch(
        setLanguage(getHTML5Storage(key.LANGUAGE) || key.DEFAULT_LANGUAGE)
      );

      store.dispatch(setTheme(getHTML5Storage(key.THEME) || key.DEFAULT_THEME));

      store.dispatch(
        setDistanceMetric(
          getHTML5Storage(key.DISTANCE_METRIC) || key.DEFAULT_DISTANCE_METRIC
        )
      );

      store.dispatch(
        setTemperatureMetric(
          getHTML5Storage(key.TEMPERATURE_METRIC) ||
            key.DEFAULT_TEMPERATURE_METRIC
        )
      );

      store.dispatch(
        setSpeedMetric(
          getHTML5Storage(key.SPEED_METRIC) || key.DEFAULT_SPEED_METRIC
        )
      );

      store.dispatch(
        setAngleMetric(
          getHTML5Storage(key.ANGLE_METRIC) || key.DEFAULT_ANGLE_METRIC
        )
      );

      store.dispatch(
        setDeveloperMode(
          getHTML5Storage(key.DEVELOPER_MODE) === "true" ||
            key.DEFAULT_DEVELOPER_MODE
        )
      );

      store.dispatch(
        setHideBoatbus(
          getHTML5Storage(key.HIDE_BOATBUS) === "true" ||
            key.DEFAULT_HIDE_BOATBUS
        )
      );

      store.dispatch(
        setInstallerMode(
          getHTML5Storage(key.INSTALLER_MODE) === "true" ||
            key.DEFAULT_INSTALLER_MODE
        )
      );
      break;
    case type.SET_IP:
      setHTML5Storage(key.IP, action.payload);
      break;
    case type.SET_LANGUAGE:
      setHTML5Storage(key.LANGUAGE, action.payload);
      break;
    case type.SET_THEME:
      setHTML5Storage(key.THEME, action.payload);
      break;
    case type.SET_HIDE_BOATBUS:
      setHTML5Storage(key.HIDE_BOATBUS, action.payload);
      break;
    case type.SET_DEVELOPER_MODE:
      setHTML5Storage(key.DEVELOPER_MODE, action.payload);
      break;
    case type.SET_INSTALLER_MODE:
      setHTML5Storage(key.INSTALLER_MODE, action.payload);
      break;
    case type.SET_DISTANCE_METRIC:
      setHTML5Storage(key.DISTANCE_METRIC, action.payload);
      break;
    default:
      break;
  }

  return next(action);
};

export default cache;
