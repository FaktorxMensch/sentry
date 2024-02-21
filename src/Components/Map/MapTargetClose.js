import React from "react";
import { useSelector } from "react-redux";
import MapTargetPin from "./MapTargetPin";
import MapTargetPinCircles from "./MapTargetPinCircles";
import "../../Assets/css/Map/mapTargetClose.css";

function MapTargetClose({
  target,
  angle,
  center,
  mapDistance,
  pos,
  color,
  threat,
  handleClick,
}) {
  let selected = useSelector((state) => state.settings.selectedTarget);
  const size = 24;

  return (
    <g
      className={"mapTargetClose"}
      onClick={() => {
        handleClick(target.id);
      }}
    >
      <MapTargetPinCircles
        pinCenter={{ width: 0, height: center }}
        mapDistance={mapDistance}
        angle={angle}
        color={color}
        threat={threat}
        id={target.name}
      />

      <MapTargetPin
        center={{ width: pos.x, height: pos.y }}
        name={target.name}
        size={size}
      />

      {selected === target.id && (
        <circle cx={pos.x} cy={pos.y - size} r={3} fill={color}></circle>
      )}
    </g>
  );
}

export default MapTargetClose;
