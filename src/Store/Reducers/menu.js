import * as type from "../Actions/types";
import * as view from "../../Constants/view";

const menu = (
  store = {
    bigColorStream: true,
    smallMap: true,
    view: view.DUAL_VIEW,
    targetListImage: "thermal",
  },
  action
) => {
  switch (action.type) {
    case type.ACTIVATE_BIG_THERMAL_STREAM:
      return {
        ...store,
        bigThermalStream: true,
        bigColorStream: false,
        bigMap: false,
      };
    case type.ACTIVATE_BIG_COLOR_STREAM:
      return {
        ...store,
        bigThermalStream: false,
        bigColorStream: true,
        bigMap: false,
      };
    case type.ACTIVATE_BIG_MAP:
      return {
        ...store,
        bigThermalStream: false,
        bigColorStream: false,
        bigMap: true,
      };
    case type.SET_BIG_STREAM_ZOOM:
      return {
        ...store,
        bigStreamZoom: action.payload,
      };
    case type.SET_BIG_MAP_ZOOM:
      return {
        ...store,
        bigMapZoom: action.payload,
      };
    case type.ACTIVATE_SMALL_THERMAL_STREAM:
      return {
        ...store,
        smallThermalStream: true,
        smallColorStream: false,
        smallMap: false,
      };
    case type.ACTIVATE_SMALL_COLOR_STREAM:
      return {
        ...store,
        smallThermalStream: false,
        smallColorStream: true,
        smallMap: false,
      };
    case type.ACTIVATE_SMALL_MAP:
      return {
        ...store,
        smallThermalStream: false,
        smallColorStream: false,
        smallMap: true,
      };
    case type.SET_SMALL_STREAM_ZOOM:
      return {
        ...store,
        smallStreamZoom: action.payload,
      };
    case type.SET_SMALL_MAP_ZOOM:
      return {
        ...store,
        smallMapZoom: action.payload,
      };
    case type.SWITCH_ALARM_MODE:
      return {
        ...store,
        alarm: action.payload,
      };
    case type.ACTIVATE_TARGET_LIST:
      return {
        ...store,
        settings: false,
        targetList: true,
        controls: false,
      };
    case type.DEACTIVATE_TARGET_LIST:
      return {
        ...store,
        targetList: false,
      };
    case type.ACTIVATE_SETTINGS:
      return {
        ...store,
        settings: true,
        targetList: false,
        controls: false,
      };
    case type.DEACTIVATE_SETTINGS:
      return {
        ...store,
        settings: false,
      };
    case type.ACTIVATE_CONTROLS:
      return {
        ...store,
        settings: false,
        targetList: false,
        controls: true,
      };
    case type.DEACTIVATE_CONTROLS:
      return {
        ...store,
        controls: false,
      };
    case type.SET_VIEW:
      return {
        ...store,
        view: action.payload,
      };
    case type.SET_TARGET_LIST_IMAGE:
      return {
        ...store,
        targetListImage: action.payload,
      };
    default:
      return store;
  }
};

export default menu;
