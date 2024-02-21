class WebRTC {
  constructor(mainSocket) {
    console.log("%cConnecting peer", "background: #8e44ad; color: white; padding: 5px;");

    this.peerConnection = null;
    this.mainSocket = mainSocket;

    try {
      this.thermalCanvas = new OffscreenCanvas(640, 512);
      this.thermalCtx = this.thermalCanvas.getContext("2d");
      this.colorCanvas = new OffscreenCanvas(1200, 960);
      this.colorCtx = this.colorCanvas.getContext("2d");
    } catch (e) {
      console.log("Offscreen canvas not supported");
    }
  }

  connectPeer() {
    // purple backgrounded log
    console.log("%cConnecting peer", "background: #8e44ad; color: white; padding: 5px;");
    try {
      this.peerConnection = new RTCPeerConnection({
        iceServers: [],
        iceTransportPolicy: "all",
      });

      this.peerConnection.metadataID = {
        wideThermal: null,
        wideColor: null,
        narrowThermal: null,
        narrowColor: null,
      };

      this.peerConnection.onicecandidate = this._onICECandidate;
      this.peerConnection.ontrack = this._onRemoteTrack;
    } catch (e) {
      console.log("Error connecting RTC: " + e);
    }
  }

  onICEMessage(msg) {
    this.peerConnection.addIceCandidate(new RTCIceCandidate(msg));
  }

  onSDPMessage(msg) {
    if (msg.type !== "offer") {
      return Promise.resolve(null);
    } else {
      this.peerConnection
        .setRemoteDescription(msg)

        .then(() => {
          return this.peerConnection.createAnswer();
        })

        .then((answer) => {
          return this.peerConnection.setLocalDescription(answer);
        })

        .then(() => {
          return this.mainSocket.send("WEBRTC", {
            sdp: this.peerConnection.localDescription,
            peer_id: this.mainSocket.peerID,
          });
        })

        .then(() => {
          return Promise.resolve(null);
        })

        .catch((e) => {
          console.log("On SDP message error: " + e);
        });
    }
  }

  refreshMetadataID = (msg) => {
    this.peerConnection.metadataID.wideThermal = msg.frame_counter_TwFoV;
    this.peerConnection.metadataID.wideColor = msg.frame_counter_TnFoV;
    this.peerConnection.metadataID.narrowThermal = msg.frame_counter_RGBwFoV;
    this.peerConnection.metadataID.narrowColor = msg.frame_counter_RGBnFoV;
  };

  _onICECandidate = (event) => {
    if (event.candidate) {
      return this.mainSocket.send("WEBRTC", {
        ice: event.candidate,
        peer_id: this.mainSocket.peerID,
      });
    }
  };

  _onRemoteTrack(event) {
    if (event.track && event.track.kind === "video") {
      if (!this.wideThermalStream) {
        this.wideThermalStream = new MediaStream([event.track]);

        console.log("wideThermalStream is set");
      } else if (!this.wideColorStream) {
        this.wideColorStream = new MediaStream([event.track]);

        console.log("wideColorStream is set");
      } else if (!this.narrowThermalStream) {
        this.narrowThermalStream = new MediaStream([event.track]);

        console.log("narrowThermalStream is set");
      } else if (!this.narrowColorStream) {
        this.narrowColorStream = new MediaStream([event.track]);

        console.log("narrowColorStream is set");
      }
    }
  }

  closePeerConnection() {
    if (this.peerConnection != null) this.peerConnection.close();
    this.peerConnection = null;
  }
}

export default WebRTC;
