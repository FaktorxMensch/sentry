import { MAX_ZOOM_MAP, MAP_ZOOM_STEP } from "../Constants/zoom";

export const vecDistance = (a, b) => {
  if (a && b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  } else if (a) {
    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
  }
};

export const vecAngle = (a, b) => {
  if (a && b) {
    return Math.atan2(-b, a);
  } else if (a) {
    if (a[1] === 0 && a[0] === 0) {
      return 0;
    } else {
      return Math.atan2(-a[1], a[0]);
    }
  }
};

const minDistanceRatio = 0.12;

const getMapDistanceRatio = (distance, maxDistance) => {
  return Math.min((0.73 * distance) / maxDistance, 0.85);
};

export const getMapMaxDistance = (map, mapCircles, zoom) => {
  const maxTrueDistance =
    mapCircles[mapCircles.length - 1] -
    ((mapCircles[mapCircles.length - 1] - mapCircles[0]) * zoom) / MAX_ZOOM_MAP;

  return getMapDistance(map, maxTrueDistance, mapCircles, zoom);
};

export const getMapDistance = (map, trueDistance, mapCircles, zoom) => {
  const distanceRatio = getMapDistanceRatio(
    trueDistance,
    mapCircles[mapCircles.length - 1]
  );
  const mapSize = Math.min(map.center.x * 1.5, map.center.y);
  const zoomGrowth = getMapDistanceRatio(
    mapCircles[mapCircles.length - 1] - mapCircles[0],
    mapCircles[mapCircles.length - 1]
  );

  if (trueDistance < mapCircles[0])
    return (
      mapSize *
      (getMapDistanceRatio(mapCircles[0], mapCircles[mapCircles.length - 1]) *
        (trueDistance / mapCircles[0]) +
        (zoomGrowth * zoom * (trueDistance / mapCircles[0])) / MAX_ZOOM_MAP +
        minDistanceRatio)
    );

  return (
    mapSize *
    (distanceRatio + (zoomGrowth * zoom) / MAX_ZOOM_MAP + minDistanceRatio)
  );
};

export const getMiniMapDistance = (map, trueDistance, mapCircles) => {
  const distanceRatio = getMapDistanceRatio(
    trueDistance,
    mapCircles[mapCircles.length - 1]
  );
  const mapSize = Math.min(map.width / 2, map.height / 2);

  return mapSize * (distanceRatio + minDistanceRatio);
};

export const mapZoomTransform = (zoomValue) => {
  if (zoomValue === 0) {
    return 1;
  } else {
    return Math.floor(zoomValue / MAP_ZOOM_STEP) + 1;
  }
};
