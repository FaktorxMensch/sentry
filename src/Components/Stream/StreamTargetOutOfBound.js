import "../../Assets/css/Stream/streamTargetOutOfBound.css";
import React from "react";
import { ReactComponent as OutOfBoundIconHorizontal } from "../../Assets/icons/stream/out-of-bound-pin-horizontal.svg";
import { ReactComponent as OutOfBoundIconVertical } from "../../Assets/icons/stream/out-of-bound-pin-vertical.svg";

function StreamTargetOutOfBound({
  position,
  size,
  color,
  opacity,
  visibleTarget,
  vertical,
  left,
}) {
  return (
    <>
      {vertical ? (
        <OutOfBoundIconVertical
          className={!visibleTarget.visibleBottom ? "bottomOutOfBound" : ""}
          width={size}
          height={size}
          x={position.x - size / 2}
          y={position.y - size}
          fill={color}
          opacity={opacity}
        ></OutOfBoundIconVertical>
      ) : (
        <OutOfBoundIconHorizontal
          className={left ? "" : "rightOutOfBound"}
          width={size}
          height={size}
          x={position.x - size / 2}
          y={position.y - size / 2}
          fill={color}
          opacity={opacity}
        ></OutOfBoundIconHorizontal>
      )}
    </>
  );
}

export default StreamTargetOutOfBound;
