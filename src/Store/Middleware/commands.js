import * as type from "../Actions/types";
import * as URL from "../../Constants/webserviceURL";
import webservice from "../../Helpers/Communication/webservice";
import {
  streamsConnectionSuccessful,
  streamsConnectionFailed,
  refreshTargets,
  refreshAlarmState,
  refreshCamera,
  refreshDistanceLines,
  refreshSettings,
  refreshVersions,
  refreshSetting,
  requestLoading,
  requestSucceeded,
  requestFailed,
  maskSubmittedResult,
  refreshState,
  refreshBoatBus,
  refreshError,
  connectionLost,
  ping,
  setAliveState,
} from "../Actions/creators";
import startAliveThread from "../../Helpers/aliveThread";

const commands = (store) => (next) => (action) => {
  switch (action.type) {
    case type.GET_SETTINGS:
      store.getState().socket.mainSocket.sendCommandRequest(
        "SETTINGS",
        null,
        (data) => {
          store.dispatch(refreshSettings(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.GET_VERSIONS:
      store.getState().socket.mainSocket.sendCommandRequest(
        "VERSIONS",
        null,
        (data) => {
          store.dispatch(refreshVersions(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.GET_STATE:
      store.getState().socket.mainSocket.sendCommandRequest(
        "STATE",
        null,
        (data) => {
          store.dispatch(refreshState(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.SUBSCRIBE_STATUS:
      startAliveThread(
        () => store.dispatch(ping()),
        () => {
          store.dispatch(connectionLost());
        }
      );

      store.getState().socket.mainSocket.subscribe("STATUS", (data) => {
        store.dispatch(refreshTargets(data.objects));
        store.dispatch(
          refreshAlarmState(store.getState().socket.settings, data.objects)
        );
        store.dispatch(refreshCamera(data.camera));
        store.dispatch(refreshDistanceLines(data.worker_beziers));
      });
      break;
    case type.SUBSCRIBE_STATE:
      store.getState().socket.mainSocket.subscribe("STATE", (data) => {
        store.dispatch(refreshState(data));
      });
      break;
    case type.SUBSCRIBE_ERROR:
      store.getState().socket.mainSocket.subscribe("ERROR", (data) => {
        store.dispatch(refreshError(data));
      });
      break;
    case type.SUBSCRIBE_BOATBUS:
      store.getState().socket.mainSocket.subscribe("BOATBUS", (data) => {
        store.dispatch(refreshBoatBus(data));
      });
      break;
    case type.SUBSCRIBE_STREAMS:
      store
        .getState()
        .socket.mainSocket.subscribeStreams()
        .then((streamSources) => {
          store.dispatch(streamsConnectionSuccessful(streamSources));
        })
        .catch((data) => {
          store.dispatch(streamsConnectionFailed(data));
        });
      break;
    case type.SUBSCRIBE_SYNC_SETTING:
      store.getState().socket.mainSocket.subscribe("SYNC_SETTING", (data) => {
        store.dispatch(refreshSetting({ name: data.name, data: data.setting }));
      });
      break;
    case type.SET_CONFIG_SETTING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "SETTING",
        {
          name: action.payload.name,
          value: action.payload.value,
        },
        (data) => {
          store.dispatch(refreshSetting({ name: action.payload.name, data }));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.TILT_CAMERA:
      store.getState().socket.mainSocket.sendCommandRequest(
        "PTU_CONTROL",
        {
          direction: "TILT",
          command: action.payload,
        },
        () => {},
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.PAN_CAMERA:
      store.getState().socket.mainSocket.sendCommandRequest(
        "PTU_CONTROL",
        {
          direction: "PAN",
          command: action.payload,
        },
        () => {},
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.DRAG_AND_DROP:
      store.getState().socket.mainSocket.sendCommandRequest(
        "PTU_DND",
        action.payload,
        () => {},
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.UPLOAD_MASK:
      webservice(
        () => store.dispatch(requestLoading()),
        () => {
          store.dispatch(requestSucceeded());
          store.dispatch(maskSubmittedResult(true));
        },
        (data) => {
          store.dispatch(requestFailed(data));
          store.dispatch(maskSubmittedResult(false));
        },
        action.payload,
        URL.UPLOAD_MASK.type,
        "http://" +
          store.getState().settings.IP +
          ":" +
          URL.UPLOAD_MASK.port +
          URL.UPLOAD_MASK.url
      );
      break;
    case type.SET_NMEA_GATEWAY:
      store.getState().socket.mainSocket.sendCommandRequest(
        "BOATBUS",
        {
          info: "setup",
          "nmea-gateway-model": action.payload.model,
          "nmea-gateway-ip-address": action.payload.ip,
          "nmea-gateway-port": action.payload.port,
        },
        () => {},
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.START_PANORAMA_RECORDING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "PANORAMA",
        { info: "START_PANORAMA_RECORDING" },
        () => {
          store.dispatch(
            refreshState({
              PANORAMA: {
                info: "PANORAMA_STATE",
                progress: 0,
                state: "RUNNING",
              },
            })
          );
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.STOP_PANORAMA_RECORDING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "PANORAMA",
        { info: "STOP_PANORAMA_RECORDING" },
        () => {},
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.START_STREAM_RECORDING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "RECORDING",
        { info: "START_STREAM_RECORDING" },
        (data) => {
          if (data) store.dispatch(refreshState({ RECORDING: true }));
          else store.dispatch(requestFailed(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.STOP_STREAM_RECORDING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "RECORDING",
        { info: "STOP_STREAM_RECORDING" },
        (data) => {
          if (data) store.dispatch(refreshState({ RECORDING: false }));
          else store.dispatch(requestFailed(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.START_SNAPSHOT_RECORDING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "RECORDING",
        { info: "START_SNAPSHOT_RECORDING" },
        (data) => {
          if (data) store.dispatch(refreshState({ SNAPSHOT_RECORDING: true }));
          else store.dispatch(requestFailed(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.STOP_SNAPSHOT_RECORDING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "RECORDING",
        { info: "STOP_SNAPSHOT_RECORDING" },
        (data) => {
          if (data) store.dispatch(refreshState({ SNAPSHOT_RECORDING: false }));
          else store.dispatch(requestFailed(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.START_IMU_RECORDING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "RECORDING",
        { info: "START_IMU_RECORDING" },
        (data) => {
          if (data) store.dispatch(refreshState({ IMU_RECORDING: false }));
          else store.dispatch(requestFailed(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    case type.STOP_IMU_RECORDING:
      store.getState().socket.mainSocket.sendCommandRequest(
        "RECORDING",
        { info: "STOP_IMU_RECORDING" },
        (data) => {
          if (data) store.dispatch(refreshState({ IMU_RECORDING: false }));
          else store.dispatch(requestFailed(data));
        },
        (data) => {
          store.dispatch(requestFailed(data));
        }
      );
      break;
    default:
      break;
  }

  return next(action);
};

export default commands;
