import * as d3 from "d3";
import React from "react";

function FieldOfView({
  center,
  innerRadius,
  radius,
  angle,
  rotation,
  color,
  opacity = 1,
}) {
  return (
    <path
      d={d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(radius)
        .startAngle(-angle + rotation)
        .endAngle(angle + rotation)()}
      transform={"translate(" + [center.x, center.y] + ")"}
      opacity={opacity}
      fill={color}
    />
  );
}

export default FieldOfView;
