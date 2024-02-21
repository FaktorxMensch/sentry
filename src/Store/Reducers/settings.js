import * as type from "../Actions/types";

const settings = (store = {}, action) => {
  switch (action.type) {
    case type.SET_IP:
      return {
        ...store,
        IP: '127.0.0.1' // TODO action.payload,
      };
    case type.SET_LANGUAGE:
      return {
        ...store,
        language: action.payload,
      };
    case type.SET_THEME:
      return {
        ...store,
        theme: action.payload,
      };
    case type.SET_HIDE_BOATBUS:
      return {
        ...store,
        hideBoatbus: action.payload,
      };
    case type.SET_DEVELOPER_MODE:
      return {
        ...store,
        developerMode: action.payload,
      };
    case type.SET_INSTALLER_MODE:
      return {
        ...store,
        installerMode: action.payload,
      };
    case type.SET_SETTINGS_LABEL:
      return {
        ...store,
        label: action.payload,
      };
    case type.SET_DISTANCE_METRIC:
      return {
        ...store,
        distanceMetric: action.payload,
      };
    case type.SET_SPEED_METRIC:
      return {
        ...store,
        speedMetric: action.payload,
      };
    case type.SET_TEMPERATURE_METRIC:
      return {
        ...store,
        temperatureMetric: action.payload,
      };

    case type.SET_ANGLE_METRIC:
      return {
        ...store,
        angleMetric: action.payload,
      };
    case type.ADD_SELECTED_TARGET:
      return {
        ...store,
        selectedTarget: action.payload,
      };
    case type.MASK_SUBMITTED:
      return {
        ...store,
        maskSuccess: action.payload,
      };
    default:
      return store;
  }
};

export default settings;
