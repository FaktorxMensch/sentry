class OpenRequest {
  constructor(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
    this.triggered = false;
  }

  trigger(msg) {
    if (msg.success) {
      this._resolve(msg.data);
    } else {
      this._reject(msg.data);
    }
  }

  _resolve(msg) {
    if (!this.triggered) {
      this.triggered = true;
      this.resolve(msg);
    }
  }

  _reject(msg) {
    if (!this.triggered) {
      this.triggered = true;
      this.reject(msg);
    }
  }
}

export default OpenRequest;
