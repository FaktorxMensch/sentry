import React from "react";
import MetricConverter from "../../Helpers/UnitConverter/MetricConverter";
import { DISTANCE_METRICS } from "../../Constants/units";
import getCSSColor from "../../Helpers/getCSSColor";

function MapDistanceCircle({ radius, distance, center }) {
  const width = 40;
  const height = 20;
  const fontSize = 12;

  return (
    <>
      <circle
        cx={center.x}
        cy={center.y}
        r={radius}
        stroke={getCSSColor("--overLight2")}
        strokeDasharray={"1, 5"}
        fillOpacity={0}
      />
      <rect
        x={center.x - width / 2}
        y={center.y - radius - height / 2}
        width={width}
        height={height}
        rx={12}
        fill={getCSSColor("--surface1")}
      />
      <text
        x={center.x}
        y={center.y - radius + fontSize / 2 - 1}
        fontSize={fontSize}
        fill={getCSSColor("--onSurface1")}
        fontFamily={"Saira-Bold"}
        textAnchor={"middle"}
      >
        <MetricConverter value={distance} unit={DISTANCE_METRICS.METERS} />
      </text>
    </>
  );
}

export default MapDistanceCircle;
