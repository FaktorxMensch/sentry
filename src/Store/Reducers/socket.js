import * as type from "../Actions/types";
import * as CONNECTION_STATE from "./../../Constants/connectionState";

const socket = (store = {}, action) => {
    switch (action.type) {
        case type.CREATE_MAIN_SOCKET:
            console.log('Main socket wurde created, daran kanns nicht liegen', action.payload)
            if (!store.mainSocket) {
                return {
                    ...store,
                    mainSocket: action.payload,
                };
            }
            return store;
        case type.CREATE_UPDATE_SOCKET:
            if (!store.updateSocket) {
                return {
                    ...store,
                    updateSocket: action.payload,
                };
            }
            return store;
        case type.CONNECTION_LOADING:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    websocket: {info: CONNECTION_STATE.LOADING},
                },
            };
        case type.CONNECTION_SUCCESSFUL:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    websocket: {info: CONNECTION_STATE.SUCCESS},
                },
            };
        case type.CONNECTION_FAILED:

            // DUMMY EMULATE TRUE
            console.log('DUMMY EMULATE TRUE')
            return {
                ...store,
                connection: {
                    ...store.connection,
                    websocket: {info: CONNECTION_STATE.SUCCESS},
                },
            };

            return {
                ...store,
                connection: {
                    ...store.connection,
                    websocket: action.payload,
                },
            };
        case type.CONNECTION_LOST:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    websocket: {info: CONNECTION_STATE.LOST},
                    streams: {info: CONNECTION_STATE.LOST},
                },
                aliveState: false,
            };
        case type.CONNECTION_CLOSED:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    websocket: {info: CONNECTION_STATE.CLOSED},
                    streams: {info: CONNECTION_STATE.CLOSED},
                },
            };
        case type.WAITING_CONNECTION:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    websocket: {info: CONNECTION_STATE.WAITING_CONNECTION},
                },
            };
        case type.STREAMS_LOADING:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    streams: {info: CONNECTION_STATE.LOADING},
                },
            };
        case type.STREAMS_CONNECTION_SUCCESSFUL:
            return {
                ...store,
                streamSources: action.payload,
                connection: {
                    ...store.connection,
                    streams: {info: CONNECTION_STATE.SUCCESS},
                },
            };
        case 'dummyEverything':
            // lets fake that we've got a stream successful
            return {
                ...store,
                connection: {
                    ...store.connection,
                    streams: {info: CONNECTION_STATE.SUCCESS},
                },
            };
        case type.STREAMS_CONNECTION_FAILED:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    streams: action.payload,
                },
            };
        case type.UPDATE_CONNECTION_LOADING:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    update: {info: CONNECTION_STATE.LOADING},
                },
            };
        case type.UPDATE_CONNECTION_SUCCESSFUL:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    update: {info: CONNECTION_STATE.SUCCESS},
                },
            };
        case type.UPDATE_CONNECTION_FAILED:
            return {
                ...store,
                connection: {
                    ...store.connection,
                    update: {info: action.payload},
                },
            };
        case type.REQUEST_LOADING:
            return {
                ...store,
                request: {loading: true},
            };
        case type.REQUEST_SUCCESS:
            return {
                ...store,
                request: {loading: false, success: true},
            };
        case type.REQUEST_FAILED:
            return {
                ...store,
                request: {loading: false, success: false, details: action.payload},
            };
        case type.ACKNOWLEDGE_REQUEST_FAILURE:
            return {...store, request: {}};
        case type.SET_ALIVE_STATE:
            return {
                ...store,
                aliveState: action.payload,
            };
        case type.REFRESH_TARGETS:
            const targets = [];

            action.payload.map((target) => {
                if (
                    target.thermalImage64 === null &&
                    store.targets &&
                    store.targets[target.id] &&
                    store.targets[target.id].thermalImage64 !== null
                ) {
                    target.thermalImage64 = store.targets[target.id].thermalImage64;
                }

                if (
                    target.colorImage64 === null &&
                    store.targets &&
                    store.targets[target.id] &&
                    store.targets[target.id].colorImage64 !== null
                ) {
                    target.colorImage64 = store.targets[target.id].colorImage64;
                }

                return (targets[target.id] = target);
            });
            return {...store, targets: targets};
        case type.REFRESH_CAMERA:
            return {...store, camera: action.payload};
        case type.REFRESH_DISTANCE_LINES:
            return {...store, distanceLines: action.payload};
        case type.REFRESH_ALARM_STATE:
            return {...store, alarmState: action.payload};
        case type.REFRESH_SETTINGS:
            return {...store, settings: action.payload};
        case type.REFRESH_VERSIONS:
            return {...store, versions: action.payload};
        case type.REFRESH_STATE:
            return {
                ...store,
                state: {...store.state, ...action.payload},
            };
        case type.REFRESH_ERROR:
            return {
                ...store,
                error: action.payload,
            };
        case type.REFRESH_BOATBUS:
            return {
                ...store,
                boatbus: {...action.payload},
            };
        case type.REFRESH_SETTING:
            return {
                ...store,
                settings: {
                    ...store.settings,
                    [action.payload.name]: action.payload.data,
                },
            };
        case type.REMOVE_UPDATE_ERROR:
            return {
                ...store,
                update: {
                    ...store.update,
                    ERROR: null,
                },
            };
        case type.REFRESH_UPDATE:
            return {
                ...store,
                update: {
                    ...store.update,
                    [action.payload.type]: action.payload.data,
                },
            };
        default:
            return store;
    }
};

export default socket;
