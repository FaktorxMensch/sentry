import React from "react";
import MapTargetPinCircle from "./MapTargetPinCircle";
import { radToDegree } from "../../Helpers/UnitConverter/converter";

function MapTargetPinCircles({
  pinCenter,
  mapDistance,
  angle,
  threat,
  color,
  id,
}) {
  const angleDegree = radToDegree(angle) + 180;

  return (
    <>
      <MapTargetPinCircle
        id={id + "_main_circle"}
        center={pinCenter}
        radius={16}
        distance={mapDistance}
        angle={angleDegree}
        color={color}
        threat={threat}
        opacity={1}
        animate={false}
      />
      <MapTargetPinCircle
        id={id + "_circle1"}
        center={pinCenter}
        radius={16}
        distance={mapDistance}
        angle={angleDegree}
        color={color}
        threat={threat}
        opacity={0.6}
      />
      <MapTargetPinCircle
        id={id + "_circle2"}
        center={pinCenter}
        radius={24}
        distance={mapDistance}
        angle={angleDegree}
        color={color}
        threat={threat}
        opacity={0.2}
      />
    </>
  );
}

export default MapTargetPinCircles;
