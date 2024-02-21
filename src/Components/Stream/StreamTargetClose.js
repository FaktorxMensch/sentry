import "./../../Assets/css/Stream/streamTargetClose.css";
import React from "react";
import StreamTargetPin from "./StreamTargetPin";
import StreamTargetBox from "./StreamTargetBox";
import { getTargetThreatColor } from "./../../Helpers/getTargetThreat";
import { useSelector } from "react-redux";
import StreamTargetClassification from "./StreamTargetClassification";
import StreamTargetInformation from "./StreamTargetInformation";
import getCSSColor from "../../Helpers/getCSSColor";

function StreamTargetClose({
  id,
  name,
  threat,
  position,
  width,
  height,
  distance,
  scale,
  predicted,
  cameraSource,
}) {
  const settings = useSelector((state) => state.socket.settings);
  const color = getTargetThreatColor(settings, threat);
  const developerMode = useSelector((state) => state.settings.developerMode);

  return (
    <svg className="streamTargetClose">
      <StreamTargetPin
        position={{ x: position.x + width / 2, y: position.y }}
        id={id}
        size={32 / scale}
        color={predicted && developerMode ? getCSSColor("--surface1") : color}
      ></StreamTargetPin>

      <StreamTargetClassification
        name={name}
        position={{ x: position.x + width / 2, y: position.y - 6 / scale }}
        size={24 / scale}
        color={color}
      />

      <StreamTargetBox
        pos={position}
        width={width}
        height={height}
        opacity={1}
        color={color}
        stroke={2}
        scale={scale}
      ></StreamTargetBox>

      <StreamTargetInformation
        id={id}
        pos={{ x: position.x + width / 2, y: position.y + height }}
        color={color}
        distance={distance}
        size={12 / scale}
        cameraSource={cameraSource}
      ></StreamTargetInformation>
    </svg>
  );
}

export default StreamTargetClose;
