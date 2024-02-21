import * as type from "../Actions/types";
import {
    connectionLoading,
    connectionSuccessful,
    connectionFailed,
    streamsLoading,
    refreshUpdate,
    updateConnectionLoading,
    updateConnectionFailed,
    updateConnectionSuccessful,
    requestFailed,
    requestLoading,
    requestSucceeded,
    removeUpdateError,
    getSettings,
    getVersions,
    subscribeStatus,
    subscribeStreams,
    subscribeSyncSetting,
    waitingConnection,
    subscribeState,
    subscribeBoatBus,
    subscribeError,
    startSubscriptions,
    getState,
    setAliveState,
} from "../Actions/creators";
import getWebSocketURL from "../../Helpers/Communication/getWebSocketURL";
import getUpdateSocketURL from "../../Helpers/Communication/getUpdateSocketURL";
import webservice from "./../../Helpers/Communication/webservice";
import * as URL from "./../../Constants/webserviceURL";
import startAlarmThread from "../../Helpers/alarmThread";

const communication = (store) => (next) => (action) => {
    switch (action.type) {
        case type.CONNECT_WEBSOCKET:
            if (store.getState().socket.mainSocket.socket === null) {
                store.dispatch(connectionLoading());
                let websocketURL = getWebSocketURL(store.getState().settings.IP);
                console.log("websocketURL", websocketURL); // geht
                store
                    .getState()
                    .socket.mainSocket.connect(websocketURL) // <--- here lies the problem maybe AUSRUFEZEICHEN
                    .then(() => {
                        store.dispatch(connectionSuccessful());
                        console.warn("NOw starting subscriptions... this may be the problem");
                        store.dispatch(startSubscriptions());
                    })
                    .catch((data) => {
                        console.error('BIG THING', data)
                        store.dispatch(connectionFailed(data));
                    });
            } else {
                console.log("mainSocket connection already opened");
            }
            break;
        case type.CONNECT_UPDATESOCKET:
            if (store.getState().socket.updateSocket.socket === null) {
                store.dispatch(updateConnectionLoading());
                store
                    .getState()
                    .socket.updateSocket.connect(
                    getUpdateSocketURL(store.getState().settings.IP)
                )
                    .then(() => {
                        store.dispatch(updateConnectionSuccessful());
                        store.getState().socket.updateSocket.subscribe((data) => {
                            store.dispatch(refreshUpdate(data));
                        });
                    })
                    .catch((data) => {
                        store.dispatch(updateConnectionFailed(data));
                    });
            } else {
                console.log("UpdateSocket connection already opened");
            }
            break;
        case type.START_SUBSCRIPTIONS:
            store.dispatch(getSettings());
            store.dispatch(getVersions());
            store.dispatch(getState());
            store.dispatch(subscribeStatus());
            store.dispatch(streamsLoading());
            store.dispatch(subscribeStreams());
            store.dispatch(subscribeSyncSetting());
            store.dispatch(subscribeState());
            store.dispatch(subscribeBoatBus());
            store.dispatch(subscribeError());

            startAlarmThread();
            break;
        case type.CLOSE_WEBSOCKET:
            if (store.getState().socket.mainSocket) {
                store.getState().socket.mainSocket.close();
            }
            break;
        case type.CLOSE_EXISTING_CONNECTION:
            if (store.getState().socket.mainSocket) {
                store.dispatch(waitingConnection());

                store
                    .getState()
                    .socket.mainSocket.closeExistingConnection(action.payload);

                store
                    .getState()
                    .socket.mainSocket.restartRegistration()
                    .then(() => {
                        store.dispatch(connectionSuccessful());
                        store.dispatch(startSubscriptions());
                    })
                    .catch((data) => {
                        store.dispatch(connectionFailed(data));
                    });
            }
            break;
        case type.START_UPDATE:
            webservice(
                () => store.dispatch(requestLoading()),
                () => store.dispatch(requestSucceeded()),
                (data) => store.dispatch(requestFailed(data)),
                action.payload,
                URL.START_UPDATE.type,
                "http://" +
                store.getState().settings.IP +
                ":" +
                URL.START_UPDATE.port +
                URL.START_UPDATE.url
            );
            break;
        case type.FINISH_UPDATE:
            webservice(
                () => {
                },
                () => store.dispatch(removeUpdateError()),
                () => {
                },
                null,
                URL.FINISH_UPDATE.type,
                "http://" +
                store.getState().settings.IP +
                ":" +
                URL.FINISH_UPDATE.port +
                URL.FINISH_UPDATE.url
            );
            break;
        case type.PING:
            webservice(
                () => {
                },
                () => {
                    store.dispatch(setAliveState(true));
                },
                () => {
                    store.dispatch(setAliveState(false));
                },
                null,
                URL.PING.type,
                "http://" +
                store.getState().settings.IP +
                ":" +
                URL.PING.port +
                URL.PING.url,
                10000
            );
            break;
        default:
            break;
    }

    return next(action);
};

export default communication;
