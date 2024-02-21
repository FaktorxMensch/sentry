import "../../Assets/css/Stream/stream.css";
import Video from "./Video.js";
import { useSelector } from "react-redux";
import React from "react";
import { STREAM_WIDE_TO_NARROW_ZOOM } from "../../Constants/zoom";
import StreamOverlay from "./StreamOverlay";
import * as themes from "./../../Constants/themes";
import StreamLowLightOverlay from "./StreamLowLightOverlay";

function Stream({ thermalStream, colorStream, style, streamZoom, zoomAction }) {
  const streams = useSelector((state) => state.socket.streamSources);
  const theme = useSelector((state) => state.settings.theme) || themes.DARK;

  return (
    <>
      <div className="stream" style={style}>
        {streamZoom < STREAM_WIDE_TO_NARROW_ZOOM && streams && colorStream && (
          <Video
            stream={streams.wideColor}
            zoom={streamZoom}
            size={style}
          ></Video>
        )}
        {streamZoom >= STREAM_WIDE_TO_NARROW_ZOOM && streams && colorStream && (
          <Video
            stream={streams.narrowColor}
            zoom={streamZoom - STREAM_WIDE_TO_NARROW_ZOOM}
            size={style}
          ></Video>
        )}
        {streamZoom < STREAM_WIDE_TO_NARROW_ZOOM &&
          streams &&
          thermalStream && (
            <Video
              stream={streams.wideThermal}
              zoom={streamZoom}
              size={style}
            ></Video>
          )}
        {streamZoom >= STREAM_WIDE_TO_NARROW_ZOOM &&
          streams &&
          thermalStream && (
            <Video
              stream={streams.narrowThermal}
              zoom={streamZoom - STREAM_WIDE_TO_NARROW_ZOOM}
              size={style}
            ></Video>
          )}
      </div>
      {theme === themes.LOW_LIGHT && thermalStream && (
        <StreamLowLightOverlay style={style}></StreamLowLightOverlay>
      )}
      {streams && (
        <StreamOverlay
          thermalStream={thermalStream}
          colorStream={colorStream}
          zoomAction={zoomAction}
          zoom={streamZoom}
          style={style}
        ></StreamOverlay>
      )}
    </>
  );
}

export default Stream;
