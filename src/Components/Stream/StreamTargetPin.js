import React from "react";
import { ReactComponent as PinIcon } from "../../Assets/icons/stream/stream-pin.svg";
import { useSelector } from "react-redux";

function StreamTargetPin({ position, size, id, color }) {
  let selected = useSelector((state) => state.settings.selectedTarget);

  return (
    <>
      <PinIcon
        width={size}
        height={size}
        x={position.x - size / 2}
        y={position.y - size}
        fill={color}
      ></PinIcon>

      {selected === id && (
        <circle
          cx={position.x}
          cy={position.y - size - 10}
          r={3}
          fill={color}
        ></circle>
      )}
    </>
  );
}

export default StreamTargetPin;
