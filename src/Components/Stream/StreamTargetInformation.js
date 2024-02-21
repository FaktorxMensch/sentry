import React from "react";
import MetricConverter from "../../Helpers/UnitConverter/MetricConverter";
import { DISTANCE_METRICS } from "../../Constants/units";
import { useSelector } from "react-redux";

function StreamTargetInformation({
  id,
  pos,
  color,
  distance,
  size,
  cameraSource,
}) {
  const developerMode = useSelector((state) => state.settings.developerMode);

  return (
    <>
      <text
        x={pos.x}
        y={pos.y + size}
        fontSize={size}
        fill={color}
        textAnchor={"middle"}
      >
        <MetricConverter value={distance} unit={DISTANCE_METRICS.METERS} />
      </text>
      {developerMode && (
        <>
          <text
            x={pos.x}
            y={pos.y + size * 2}
            fontSize={size}
            fill={color}
            textAnchor={"middle"}
          >
            {id}
          </text>
          <text
            x={pos.x}
            y={pos.y + size * 3}
            fontSize={size}
            fill={color}
            textAnchor={"middle"}
          >
            {cameraSource}
          </text>
        </>
      )}
    </>
  );
}

export default StreamTargetInformation;
