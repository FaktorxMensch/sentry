import * as CONNECTION_STATE from "../../Constants/connectionState";

class UpdateSocket {
  constructor() {
    this.socket = null;
    this.subscribeAction = null;
    this.connectPromise = null;
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

  _onOpen(event) {
    console.log("Update socket opened");
    this.connectPromise.resolve();
  }

  _onClose(event) {
    console.log("Update socket closed:");
  }

  _onError(event) {
    console.log("Update socket error");
    this.close();
  }

  subscribe(dispatch) {
    this.subscribeAction = dispatch;
  }

  _onMessage(event) {
    let message = JSON.parse(event.data);
    if (this.subscribeAction !== null)
      this.subscribeAction({ type: message.type, data: message.data });
  }
}

export default UpdateSocket;
