import OpenRequest from "./OpenRequest";
import WebRTC from "./WebRTC";
import parser from "ua-parser-js";
import * as CONNECTION_STATE from "../../Constants/connectionState";

class MainSocket {
    constructor(connectionLostAction, connectionClosedAction) {
        this.socket = null;
        this.openRequests = {};
        this.subscribers = {};
        this.connectPromise = null;
        this.peerPromise = null;
        this.webRTC = null;
        this.peerID = null;
        this.messageID = 1;
        this.connectionLostAction = connectionLostAction;
        this.connectionClosedAction = connectionClosedAction;
    }

    connect(url) {
        return new Promise((resolve, reject) => {
            this.connectPromise = {
                resolve,
                reject,
            };

            if (this.socket === null) {
                this.socket = new WebSocket(url);

                this.socket.onopen = (event) => {
                    this._onOpen(event);
                };

                this.socket.onclose = (event) => {
                    this._onClose(event);
                };

                this.socket.onmessage = (event) => {
                    this._onMessage(event);
                };

                this.socket.onerror = (event) => {
                    this._onError(event);
                };

                setTimeout(() => {
                    reject(CONNECTION_STATE.REQUEST_TIMEDOUT);
                }, 5000);
            } else {
                reject(CONNECTION_STATE.SOCKET_ALREADY_OPEN);
            }
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            if (this.socket === null) {
                resolve();
            } else {
                this.socket.close();
                this.socket = null;
                resolve();
            }
        });
    }

    _onOpen() {
        console.log("Websocket opened");
    }

    _onClose(event) {
        if (this.socket !== null) {
            console.log("Websocket closed");
            if (event === CONNECTION_STATE.CLOSED) this.connectionClosedAction();
            else this.connectionLostAction(event);
            this.close();
        }
    }

    _onError(event) {
        console.log("Websocket error");
        this.connectionLostAction(event);
        this.close();
    }

    send(topic = null, data = null, id = null) {
        // console log with yellow background
        console.log('\x1b[43m%s\x1b[0m', 'send() in MainSocket.js');
        if (this.socket !== null) {
            if (topic === null) {
                console.log("Message not supported");
            } else if (id === null) {
                this.socket.send(
                    JSON.stringify({
                        topic,
                        data,
                        peer_id: this.peerID,
                    })
                );
            } else if (data === null) {
                this.socket.send(
                    JSON.stringify({
                        topic,
                        id,
                        peer_id: this.peerID,
                    })
                );
            } else {
                this.socket.send(
                    JSON.stringify({
                        topic,
                        data,
                        id,
                        peer_id: this.peerID,
                    })
                );
            }
        }
    }

    _connectToPeer(peerID) {
        // console log with yellow background
        console.log('\x1b[43m%s\x1b[0m', '_connectToPeer() in MainSocket.js');
        if (!peerID) {
            this.connectPromise.reject(CONNECTION_STATE.UNKNOWN_PEER_ID);
        } else {
            let userAgent = new parser.UAParser(navigator.userAgent);
            let parserResults = userAgent.getResult();

            this.sendCommandRequest(
                "REGISTRATION",
                {
                    user_agent:
                        parserResults.device.vendor + " " + parserResults.device.model,
                    user_name: parserResults.browser.name,
                    timestamp: Date.now(),
                },
                () => {
                },
                (error) => {
                    this.connectPromise.reject(error);
                }
            );
        }
    }

    async sendCommandRequest(topic, data, success, failure) {
        // console log with yellow background
        console.log('\x1b[43m%s\x1b[0m', 'sendCommandRequest() in MainSocket.js');
        const id = this.messageID;
        this.messageID++;
        return new Promise((resolve, reject) => {
            this.send(topic, data, id);

            const openRequest = new OpenRequest(resolve, reject);
            this.openRequests[id] = openRequest;

            setTimeout(() => {
                openRequest.reject(CONNECTION_STATE.REQUEST_TIMEDOUT);
            }, 5000);
        })
            .then((data) => {
                success(data);
            })
            .catch((data) => {
                failure(data);
            })
            .finally(() => {
                delete this.openRequests[id];
            });
    }

    subscribe(topic, dispatch) {
        // teal backgrounded console log about subscribeStreams() in MainSocket.js
        console.log('\x1b[46m%s\x1b[0m', 'teal subscribe() in MainSocket.js');
        if (this.subscribers[topic] === undefined)
            this.subscribers[topic] = dispatch;
    }

    unsubscribe(topic) {
        this.subscribers[topic] = undefined;
    }

    subscribeStreams() {
        return new Promise((resolve, reject) => {
            this.streamsPromise = {
                resolve,
                reject,
            };

            const interval = setInterval(() => {
                if (
                    this.webRTC !== null &&
                    this.webRTC.peerConnection !== null &&
                    this.webRTC.peerConnection.wideThermalStream !== null &&
                    this.webRTC.peerConnection.wideColorStream !== null &&
                    this.webRTC.peerConnection.narrowThermalStream !== null &&
                    this.webRTC.peerConnection.narrowColorStream !== null
                ) {
                    clearInterval(interval);
                    resolve({
                        wideThermal: this.webRTC.peerConnection.wideThermalStream,
                        wideColor: this.webRTC.peerConnection.wideColorStream,
                        narrowThermal: this.webRTC.peerConnection.narrowThermalStream,
                        narrowColor: this.webRTC.peerConnection.narrowColorStream,
                    });
                }
            }, 500);

            setTimeout(() => {
                clearInterval(interval);
                reject(CONNECTION_STATE.REQUEST_TIMEDOUT);
            }, 5000);
        });
    }

    closeExistingConnection(id) {
        this.sendCommandRequest(
            "DISCONNECT_DEVICE",
            {
                peer_id: id,
            },
            () => {
            },
            () => {
            }
        );
    }

    restartRegistration() {
        return new Promise((resolve, reject) => {
            this.connectPromise = {
                resolve,
                reject,
            };
            setTimeout(() => {
                this._connectToPeer(this.peerID);
            }, 3000);
        });
    }

    _onMessage(event) {
        let msg;
        try {
            // console log with yellow background red font
            // console.log('\x1b[43m%s\x1b[0m', '\x1b[31m%s\x1b[0m', '_onMessage() in MainSocket.js');
            // console.log(msg);
            msg = JSON.parse(event.data);

            if (msg.id && this.openRequests[msg.id] !== undefined) {
                this.openRequests[msg.id].trigger(msg);
            }

            switch (msg.topic) {
                case "HELLO":
                    this.peerID = msg.data.peer_id;
                    this._connectToPeer(this.peerID);
                    break;
                case "CONNECTION_ERROR":
                    this.connectPromise.reject(msg.data);
                    break;
                case "REGISTRATION":
                    if (msg.data.info === "REGISTRATION_OK") {
                        this.sendCommandRequest(
                            "WEBRTC",
                            {info: "OFFER_REQUEST", peer_id: this.peerID},
                            () => {
                                this.connectPromise.resolve();
                            },
                            (error) => {
                                this.connectPromise.reject(error);
                            }
                        );
                    } else if (msg.data.info === "CONNECTION_BUSY") {
                        this.connectPromise.reject({
                            info: CONNECTION_STATE.BUSY,
                            devices: msg.data.device_list,
                        });
                    }
                    break;
                case "GOODBYE":
                    this._onClose(CONNECTION_STATE.CLOSED, {
                        info: CONNECTION_STATE.CLOSED,
                    });
                    break;
                case "STATUS":
                    if (this.subscribers["STATUS"] !== undefined)
                        this.subscribers["STATUS"](msg.data);

                    if (this.webRTC !== null) {
                        this.webRTC.refreshMetadataID(msg.data);
                    }
                    break;
                case "SETTINGS":
                    break;
                case "SYNC_SETTING":
                    if (this.subscribers["SYNC_SETTING"] !== undefined) {
                        this.subscribers["SYNC_SETTING"](msg.data);
                    }
                    break;
                case "STATE":
                    if (this.subscribers["STATE"] !== undefined)
                        this.subscribers["STATE"](msg.data);
                    break;
                case "BOATBUS":
                    if (this.subscribers["BOATBUS"] !== undefined)
                        this.subscribers["BOATBUS"](msg.data);
                    break;
                case "VERSIONS":
                    break;
                case "WEBRTC":
                    if (this.webRTC === null) {
                        this.webRTC = new WebRTC(this);
                        this.webRTC.connectPeer();
                    }

                    if (msg.data.sdp != null) {
                        this.webRTC.onSDPMessage(msg.data.sdp);
                    } else if (msg.data.ice != null) {
                        this.webRTC.onICEMessage(msg.data.ice);
                    } else if (msg.data === "OFFER_OK") {
                    } else {
                        console.log("Unknown message: " + event.data);
                    }
                    break;
                case "SETTING":
                    break;
                case "PTU_DND":
                    break;
                case "PTU_CONTROL":
                    break;
                case "DISCONNECT_DEVICE":
                    break;
                case "RECORDING":
                    break;
                case "ERROR":
                    if (this.subscribers["ERROR"] !== undefined)
                        this.subscribers["ERROR"](msg.data);
                    break;
                default:
                    console.log(msg.topic + ": Unsupported message");
                    break;
            }
        } catch (e) {
            console.log("Error parsing response: " + e);
            return;
        }
    }
}

export default MainSocket;
