import MapTargetPin from "./MapTargetPin";
import { radToDegree } from "./../../Helpers/UnitConverter/converter";
import "../../Assets/css/Map/mapTargetFar.css";

function MapTargetFar({
  target,
  angle,
  color,
  map,
  opacity,
  menuViewSizes,
  collisionAvoidanceOffset,
}) {
  const size = 20;
  const margin = 24;
  let width = 0;
  let height = 0;

  const diagAngle = Math.atan(map.height / map.width);
  const angleTan = Math.tan(Math.PI / 2 - angle);

  //DOWN left
  if (angle <= -Math.PI / 2 - diagAngle) {
    width = -map.height / (2 * angleTan);
    height = -map.height / 2 + margin;

    //under bottom left menu
    if (map.center.x + width < menuViewSizes.bottomLeft.width)
      height = height + menuViewSizes.bottomLeft.height;
  }

  //LEFT
  else if (angle <= -Math.PI / 2 + diagAngle) {
    width = -map.width / 2 + margin;
    height = -(map.width * angleTan) / 2;

    //under top left menu
    if (
      height > 0 &&
      map.center.y - height - collisionAvoidanceOffset <
        menuViewSizes.topLeft.height
    ) {
      width = width + menuViewSizes.topLeft.width;
    }

    //under bottom left menu
    else if (
      height < 0 &&
      map.center.y + height > map.height - menuViewSizes.bottomLeft.height
    ) {
      width = width + menuViewSizes.bottomLeft.height;
    }
  }

  //UP
  else if (angle <= Math.PI / 2 - diagAngle) {
    height = map.height / 2 - margin;
    width = map.height / (2 * angleTan);

    //under top left menu
    if (map.center.x + width < menuViewSizes.topLeft.width) {
      height = height - menuViewSizes.topLeft.height;
    }

    //under top right menu
    else if (map.center.x + width > map.width - menuViewSizes.topRight.width) {
      height = height - menuViewSizes.topRight.height;
    }
  }

  //RIGHT
  else if (angle < Math.PI / 2 + diagAngle) {
    width = map.width / 2 - margin;
    height = (map.width * angleTan) / 2;

    //under top right menu
    if (
      height > 0 &&
      map.center.y - height - collisionAvoidanceOffset <
        menuViewSizes.topRight.height
    ) {
      width = width - menuViewSizes.topRight.width;
    }

    //under bottom right menu
    else if (
      height < 0 &&
      map.center.y - height > map.height - menuViewSizes.bottomRight.height
    ) {
      width = width - menuViewSizes.bottomRight.width;
    }
  } else {
    //DOWN right
    width = -map.height / (2 * angleTan);
    height = -map.height / 2 + margin;

    if (map.center.x + width > map.width - menuViewSizes.bottomRight.width)
      height = height + menuViewSizes.bottomRight.height;
  }

  return (
    <g className={"mapTargetFar"}>
      <circle
        cx={map.center.x + width}
        cy={map.center.y - height - collisionAvoidanceOffset}
        r={size / 2 + 2}
        fill={color}
        opacity={opacity}
      ></circle>

      <MapTargetPin
        center={{
          width: map.center.x + width,
          height: map.center.y - height - collisionAvoidanceOffset,
        }}
        name={target.name}
        size={size}
      />

      <polyline
        points="0,20 8,14 -8,14"
        transform={
          "translate(" +
          [
            map.center.x + width,
            map.center.y - height - collisionAvoidanceOffset,
          ] +
          ")rotate(" +
          radToDegree(Math.PI + angle) +
          ")"
        }
        fill={color}
        opacity={opacity}
      ></polyline>
    </g>
  );
}

export default MapTargetFar;
