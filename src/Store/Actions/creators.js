import * as type from "./types";
import getWebSocketURL from "../../Helpers/Communication/getWebSocketURL";
import getUpdateSocketURL from "../../Helpers/Communication/getUpdateSocketURL";
import getAlarmState from "../../Helpers/getAlarmState";
import MainSocket from "../../Helpers/Communication/MainSocket";
import UpdateSocket from "../../Helpers/Communication/UpdateSocket";

export const createMainSocket = (lostAction, closeAction) => {
  return {
    type: type.CREATE_MAIN_SOCKET,
    payload: new MainSocket(lostAction, closeAction),
  };
};

export const createUpdateSocket = () => {
  return {
    type: type.CREATE_UPDATE_SOCKET,
    payload: new UpdateSocket(),
  };
};

export const connectSocket = () => {
  return {
    type: type.CONNECT_WEBSOCKET,
    payload: getWebSocketURL(),
  };
};

export const closeSocket = () => {
  return {
    type: type.CLOSE_WEBSOCKET,
  };
};

export const connectionLoading = () => {
  return {
    type: type.CONNECTION_LOADING,
  };
};

export const dummyEverything = () => {
    return {
        type: 'dummyEverything',
    };
}

export const connectionSuccessful = () => {
  return {
    type: type.CONNECTION_SUCCESSFUL,
  };
};

export const connectionFailed = (data) => {
  return {
    type: type.CONNECTION_FAILED,
    payload: data,
  };
};

export const connectionLost = () => {
  return {
    type: type.CONNECTION_LOST,
  };
};

export const connectionClosed = () => {
  return {
    type: type.CONNECTION_CLOSED,
  };
};

export const waitingConnection = () => {
  return {
    type: type.WAITING_CONNECTION,
  };
};

export const closeExistingConnection = (data) => {
  return {
    type: type.CLOSE_EXISTING_CONNECTION,
    payload: data,
  };
};

export const streamsLoading = () => {
  return {
    type: type.STREAMS_LOADING,
  };
};

export const ping = () => {
  return { type: type.PING };
};

export const setAliveState = (state) => {
  return {
    type: type.SET_ALIVE_STATE,
    payload: state,
  };
};

export const streamsConnectionSuccessful = (streamSources) => {
  return {
    type: type.STREAMS_CONNECTION_SUCCESSFUL,
    payload: streamSources,
  };
};

export const streamsConnectionFailed = (data) => {
  return {
    type: type.STREAMS_CONNECTION_FAILED,
    payload: data,
  };
};

export const connectUpdateSocket = () => {
  return {
    type: type.CONNECT_UPDATESOCKET,
    payload: getUpdateSocketURL(),
  };
};

export const getSettings = () => {
  return {
    type: type.GET_SETTINGS,
  };
};

export const getVersions = () => {
  return {
    type: type.GET_VERSIONS,
  };
};

export const getState = () => {
  return {
    type: type.GET_STATE,
  };
};

export const startSubscriptions = () => {
  return {
    type: type.START_SUBSCRIPTIONS,
  };
};

export const subscribeStatus = () => {
  return {
    type: type.SUBSCRIBE_STATUS,
  };
};

export const subscribeStreams = () => {
  return {
    type: type.SUBSCRIBE_STREAMS,
  };
};

export const subscribeState = () => {
  return {
    type: type.SUBSCRIBE_STATE,
  };
};

export const subscribeBoatBus = () => {
  return {
    type: type.SUBSCRIBE_BOATBUS,
  };
};

export const subscribeError = () => {
  return {
    type: type.SUBSCRIBE_ERROR,
  };
};

export const updateConnectionLoading = () => {
  return {
    type: type.UPDATE_CONNECTION_LOADING,
  };
};

export const updateConnectionSuccessful = () => {
  return {
    type: type.UPDATE_CONNECTION_SUCCESSFUL,
  };
};

export const updateConnectionFailed = (data) => {
  return {
    type: type.UPDATE_CONNECTION_FAILED,
    payload: data,
  };
};

export const refreshTargets = (data) => {
  return {
    type: type.REFRESH_TARGETS,
    payload: data,
  };
};

export const refreshAlarmState = (settings, data) => {
  return {
    type: type.REFRESH_ALARM_STATE,
    payload: getAlarmState(settings, data),
  };
};

export const refreshCamera = (data) => {
  return {
    type: type.REFRESH_CAMERA,
    payload: data,
  };
};

export const refreshDistanceLines = (data) => {
  return {
    type: type.REFRESH_DISTANCE_LINES,
    payload: data,
  };
};

export const refreshSettings = (data) => {
  return {
    type: type.REFRESH_SETTINGS,
    payload: data,
  };
};

export const refreshSetting = (data) => {
  return {
    type: type.REFRESH_SETTING,
    payload: data,
  };
};

export const refreshVersions = (data) => {
  return {
    type: type.REFRESH_VERSIONS,
    payload: data,
  };
};

export const refreshUpdate = (data) => {
  return {
    type: type.REFRESH_UPDATE,
    payload: data,
  };
};

export const refreshState = (data) => {
  return {
    type: type.REFRESH_STATE,
    payload: data,
  };
};

export const refreshBoatBus = (data) => {
  return {
    type: type.REFRESH_BOATBUS,
    payload: data,
  };
};

export const refreshError = (data) => {
  return {
    type: type.REFRESH_ERROR,
    payload: data,
  };
};

export const removeUpdateError = () => {
  return {
    type: type.REMOVE_UPDATE_ERROR,
  };
};

export const showBigThermalStream = () => {
  return {
    type: type.ACTIVATE_BIG_THERMAL_STREAM,
  };
};

export const showBigColorStream = () => {
  return {
    type: type.ACTIVATE_BIG_COLOR_STREAM,
  };
};

export const showBigMap = () => {
  return {
    type: type.ACTIVATE_BIG_MAP,
  };
};

export const showSmallThermalStream = () => {
  return {
    type: type.ACTIVATE_SMALL_THERMAL_STREAM,
  };
};

export const showSmallColorStream = () => {
  return {
    type: type.ACTIVATE_SMALL_COLOR_STREAM,
  };
};

export const showSmallMap = () => {
  return {
    type: type.ACTIVATE_SMALL_MAP,
  };
};

export const setAlarmMode = (data) => {
  return {
    type: type.SWITCH_ALARM_MODE,
    payload: data,
  };
};

export const showTargetList = () => {
  return {
    type: type.ACTIVATE_TARGET_LIST,
  };
};

export const hideTargetList = () => {
  return {
    type: type.DEACTIVATE_TARGET_LIST,
  };
};

export const showSettings = () => {
  return {
    type: type.ACTIVATE_SETTINGS,
  };
};

export const hideSettings = () => {
  return {
    type: type.DEACTIVATE_SETTINGS,
  };
};

export const showControls = () => {
  return {
    type: type.ACTIVATE_CONTROLS,
  };
};

export const hideControls = () => {
  return {
    type: type.DEACTIVATE_CONTROLS,
  };
};

export const setSettingsLabel = (label) => {
  return {
    type: type.SET_SETTINGS_LABEL,
    payload: label,
  };
};

export const setConfigSetting = (data) => {
  return {
    type: type.SET_CONFIG_SETTING,
    payload: data,
  };
};

export const requestLoading = () => {
  return {
    type: type.REQUEST_LOADING,
  };
};

export const requestSucceeded = () => {
  return {
    type: type.REQUEST_SUCCESS,
  };
};

export const requestFailed = (data) => {
  return {
    type: type.REQUEST_FAILED,
    payload: data,
  };
};

export const acknowledgeRequestFailed = () => {
  return {
    type: type.ACKNOWLEDGE_REQUEST_FAILURE,
  };
};

export const setBigStreamZoom = (data) => {
  return {
    type: type.SET_BIG_STREAM_ZOOM,
    payload: data,
  };
};

export const setBigMapZoom = (data) => {
  return {
    type: type.SET_BIG_MAP_ZOOM,
    payload: data,
  };
};

export const setSmallMapZoom = (data) => {
  return {
    type: type.SET_SMALL_MAP_ZOOM,
    payload: data,
  };
};

export const setSmallStreamZoom = (data) => {
  return {
    type: type.SET_SMALL_STREAM_ZOOM,
    payload: data,
  };
};

export const setView = (view) => {
  return {
    type: type.SET_VIEW,
    payload: view,
  };
};

export const tiltCamera = (data) => {
  return {
    type: type.TILT_CAMERA,
    payload: data,
  };
};

export const panCamera = (data) => {
  return {
    type: type.PAN_CAMERA,
    payload: data,
  };
};

export const loadCache = () => {
  return {
    type: type.LOAD_CACHE,
  };
};

export const setIP = (data) => {
  return {
    type: type.SET_IP,
    payload: data,
  };
};

export const setLanguage = (language) => {
  return {
    type: type.SET_LANGUAGE,
    payload: language,
  };
};

export const setTheme = (theme) => {
  return {
    type: type.SET_THEME,
    payload: theme,
  };
};

export const setHideBoatbus = (value) => {
  return {
    type: type.SET_HIDE_BOATBUS,
    payload: value,
  };
};

export const setDeveloperMode = (value) => {
  return {
    type: type.SET_DEVELOPER_MODE,
    payload: value,
  };
};

export const setInstallerMode = (value) => {
  return {
    type: type.SET_INSTALLER_MODE,
    payload: value,
  };
};

export const setDistanceMetric = (metric) => {
  return {
    type: type.SET_DISTANCE_METRIC,
    payload: metric,
  };
};

export const setTemperatureMetric = (metric) => {
  return {
    type: type.SET_TEMPERATURE_METRIC,
    payload: metric,
  };
};

export const setSpeedMetric = (metric) => {
  return {
    type: type.SET_SPEED_METRIC,
    payload: metric,
  };
};

export const setAngleMetric = (metric) => {
  return {
    type: type.SET_ANGLE_METRIC,
    payload: metric,
  };
};

export const addSelectedTarget = (data) => {
  return {
    type: type.ADD_SELECTED_TARGET,
    payload: data,
  };
};

export const startUpdate = (file) => {
  return {
    type: type.START_UPDATE,
    payload: file,
  };
};

export const finishUpdate = () => {
  return {
    type: type.FINISH_UPDATE,
  };
};

export const startPanoramaRecording = () => {
  return {
    type: type.START_PANORAMA_RECORDING,
  };
};

export const stopPanoramaRecording = () => {
  return {
    type: type.STOP_PANORAMA_RECORDING,
  };
};

export const maskSubmittedResult = (value) => {
  return {
    type: type.MASK_SUBMITTED,
    payload: value,
  };
};

export const uploadMask = (file) => {
  return {
    type: type.UPLOAD_MASK,
    payload: file,
  };
};

export const dragAndDrop = (message) => {
  return {
    type: type.DRAG_AND_DROP,
    payload: message,
  };
};

export const setTargetListImage = (source) => {
  return {
    type: type.SET_TARGET_LIST_IMAGE,
    payload: source,
  };
};

export const subscribeSyncSetting = () => {
  return {
    type: type.SUBSCRIBE_SYNC_SETTING,
  };
};

export const startStreamRecording = () => {
  return {
    type: type.START_STREAM_RECORDING,
  };
};

export const stopStreamRecording = () => {
  return {
    type: type.STOP_STREAM_RECORDING,
  };
};

export const startIMURecording = () => {
  return {
    type: type.START_IMU_RECORDING,
  };
};

export const stopIMURecording = () => {
  return {
    type: type.STOP_IMU_RECORDING,
  };
};

export const startSnapshotRecording = () => {
  return {
    type: type.START_SNAPSHOT_RECORDING,
  };
};

export const stopSnapshotRecording = () => {
  return {
    type: type.STOP_SNAPSHOT_RECORDING,
  };
};

export const setNMEAGateway = (message) => {
  return {
    type: type.SET_NMEA_GATEWAY,
    payload: message,
  };
};
