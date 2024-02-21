import React from "react";

function StreamTargetBox({
  pos,
  width,
  height,
  opacity,
  stroke,
  color,
  scale,
}) {
  const boundingWidth = Math.max(width / 3, 1);
  const boundingHeight = Math.min(boundingWidth / 2, height / 3);

  const lines = [
    {
      x1: pos.x - 1 / scale,
      y1: pos.y,
      x2: pos.x + boundingWidth,
      y2: pos.y,
    },
    {
      x1: pos.x + width + 1 / scale,
      y1: pos.y,
      x2: pos.x + width - boundingWidth,
      y2: pos.y,
    },
    {
      x1: pos.x - 1 / scale,
      y1: pos.y + height,
      x2: pos.x + boundingWidth,
      y2: pos.y + height,
    },
    {
      x1: pos.x + width + 1 / scale,
      y1: pos.y + height,
      x2: pos.x + width - boundingWidth,
      y2: pos.y + height,
    },
    {
      x1: pos.x,
      y1: pos.y,
      x2: pos.x,
      y2: pos.y + boundingHeight,
    },
    {
      x1: pos.x,
      y1: pos.y + height,
      x2: pos.x,
      y2: pos.y + height - boundingHeight,
    },
    {
      x1: pos.x + width,
      y1: pos.y,
      x2: pos.x + width,
      y2: pos.y + boundingHeight,
    },
    {
      x1: pos.x + width,
      y1: pos.y + height,
      x2: pos.x + width,
      y2: pos.y + height - boundingHeight,
    },
  ];

  return (
    <>
      {lines &&
        lines.map((line, id) => (
          <line
            key={id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            strokeWidth={stroke / scale}
            strokeOpacity={opacity}
            stroke={color}
          />
        ))}
    </>
  );
}

export default StreamTargetBox;
