import React from "react";
import StreamTargetClose from "./StreamTargetClose";
import StreamTargetFar from "./StreamTargetFar";

function StreamTarget({
  canvas,
  id,
  name,
  insideFoV,
  threat,
  rect,
  distance,
  scale,
  safeArea,
  targetAngle,
  cameraAngle,
  menuViewSizes,
  predicted,
  cameraSource,
}) {
  const x1 = rect ? Math.min(rect[0], rect[2]) * canvas.width : 0;
  const y1 = rect ? Math.min(rect[1], rect[3]) * canvas.height : 0;
  const width = rect ? Math.abs(rect[2] - rect[0]) * canvas.width : 0;
  const height = rect ? Math.abs(rect[1] - rect[3]) * canvas.height : 0;
  const halfCanvasWidth = canvas.width / 2;

  const isTargetInsideSafeArea = () => {
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const visibleTop = insideFoV ? y1 + halfHeight > safeArea.top : false;

    const visibleRight = insideFoV
      ? x1 + halfWidth < safeArea.right
      : !(x1 > halfCanvasWidth);

    const visibleBottom = insideFoV ? y1 + halfHeight < safeArea.bottom : false;

    const visibleLeft = insideFoV
      ? x1 + halfWidth > safeArea.left
      : !(x1 < halfCanvasWidth);

    return {
      visibleTop: visibleTop,
      visibleRight: visibleRight,
      visibleBottom: visibleBottom,
      visibleLeft: visibleLeft,
    };
  };

  const visibleTarget = isTargetInsideSafeArea();

  const isTargetVisible =
    visibleTarget.visibleTop &&
    visibleTarget.visibleRight &&
    visibleTarget.visibleBottom &&
    visibleTarget.visibleLeft;

  return (
    <>
      {isTargetVisible ? (
        <StreamTargetClose
          id={id}
          name={name}
          position={{ x: x1, y: y1 }}
          width={width}
          height={height}
          distance={distance}
          threat={threat}
          scale={scale}
          predicted={predicted}
          cameraSource={cameraSource}
        ></StreamTargetClose>
      ) : (
        <StreamTargetFar
          id={id}
          name={name}
          position={{ x: x1, y: y1 }}
          width={width}
          height={height}
          threat={threat}
          scale={scale}
          targetAngle={targetAngle}
          cameraAngle={cameraAngle}
          visibleTarget={visibleTarget}
          safeArea={safeArea}
          menuViewSizes={menuViewSizes}
        ></StreamTargetFar>
      )}
    </>
  );
}

export default StreamTarget;
