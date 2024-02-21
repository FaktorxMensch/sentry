import "../../Assets/css/Stream/video.css";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Video({ id, stream, zoom, size }) {
  let videoStream = useRef();
  let video = useRef();

  useEffect(() => {
    videoStream.current.srcObject = stream;
  }, []);

  const videoStyle = {
    height: size.height,
    width: size.width,
    transform: "scale(" + (1 + zoom) + ")",
  };

  return (
    <div className={"video"} ref={video}>
      <video
        id={id}
        ref={videoStream}
        autoPlay
        playsInline
        muted
        style={videoStyle}
      >
        Your browser doesn't support video
      </video>
    </div>
  );
}

export default Video;
