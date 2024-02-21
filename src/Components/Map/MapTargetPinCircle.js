import React from "react";
import { DANGER, WARNING } from "./../../Constants/threatLevel";

function MapTargetPinCircle({
  id,
  center,
  radius,
  distance,
  angle,
  color,
  threat,
  opacity,
  animate = true,
}) {
  return (
    <circle
      id={id}
      cx={center.width}
      cy={center.height}
      r={radius}
      transform={
        "translate(" + [distance.x, distance.y] + ")rotate(" + angle + ")"
      }
      fill={color}
      fillOpacity={opacity}
    >
      {animate && (
        <>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur={
              threat === DANGER ? "1.0s" : color === WARNING ? "2.0s" : "3.0s"
            }
            values={
              threat === DANGER ? "1;0" : color === WARNING ? "1;0" : "1;0"
            }
            keyTimes="0;1"
            keySplines="0.3 0 0.3 0"
            calcMode="spline"
            begin="0s"
          ></animate>
          <animate
            attributeName="r"
            values={
              threat === DANGER
                ? radius + ";" + radius * 2
                : color === WARNING
                ? radius + ";" + radius * 2
                : radius + ";" + radius * 2
            }
            begin="0s"
            dur={
              threat === DANGER ? "1.0s" : color === WARNING ? "2.0s" : "3.0s"
            }
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0 0.33 0.66 1"
          />
        </>
      )}
    </circle>
  );
}

export default MapTargetPinCircle;
