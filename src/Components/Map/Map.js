import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as MapBoatIcon } from "../../Assets/icons/map-boat.svg";
import MapTarget from "./MapTarget";
import MapDistanceCircle from "./MapDistanceCircle";
import FieldOfView from "./FieldOfView";
import { FIELD_OF_VIEW } from "../../Constants/constants";
import { degreeToRad } from "../../Helpers/UnitConverter/converter";
import { getMapDistance } from "../../Helpers/mapFunctions";
import getCSSColor from "../../Helpers/getCSSColor";
import "../../Assets/css/Map/map.css";

function Map({ size, mapZoom, menuViewSizes }) {
  const targets = useSelector((state) => state.socket.targets);
  const camera = useSelector((state) => state.socket.camera);
  const settings = useSelector((state) => state.socket.settings);

  const map = {
    width: size.width,
    height: size.height,
    center: { x: size.width / 2, y: size.height / 2 },
  };

  const boatZoomScale = 0.1 * mapZoom;

  let collisionAvoidanceOffset;

  if (
    settings &&
    settings["system-mode"] &&
    settings["system-mode"].value === "collision-avoidance"
  ) {
    collisionAvoidanceOffset = map.height / 3;
    map.center = {
      x: map.width / 2,
      y: map.height / 2 + collisionAvoidanceOffset,
    };
  } else {
    collisionAvoidanceOffset = 0;
  }

  return (
    <div className="map" style={{ width: map.width, height: map.height }}>
      <svg width={"100%"} height={"100%"}>
        <g className="map-fieldOfView">
          {
            <FieldOfView
              center={map.center}
              innerRadius={0}
              radius={Math.max(map.width, map.height)}
              angle={FIELD_OF_VIEW / 2}
              rotation={camera ? degreeToRad(camera.pan) : 0}
              opacity={1}
              color={getCSSColor("--overlay3")}
            />
          }
        </g>

        {settings &&
          settings["collision-avoidance-mode-limit"].value &&
          settings["system-mode"] &&
          settings["system-mode"].value === "collision-avoidance" && (
            <g className="map-viewRange">
              <FieldOfView
                center={map.center}
                innerRadius={0}
                radius={Math.max(map.width, map.height)}
                angle={
                  degreeToRad(
                    settings["collision-avoidance-mode-limit"].value
                  ) +
                  FIELD_OF_VIEW / 2
                }
                rotation={0}
                opacity={1}
                color={getCSSColor("--overlay2")}
              />
            </g>
          )}

        <g className="map-backgroundLines">
          {settings &&
            settings["map-distance-ranges"] &&
            settings["map-distance-ranges"].value.map((distance) => (
              <MapDistanceCircle
                key={"distance-circle-" + distance}
                radius={getMapDistance(
                  map,
                  distance,
                  settings["map-distance-ranges"].value,
                  mapZoom
                )}
                distance={distance}
                center={map.center}
              />
            ))}
        </g>

        <g className="map-detections">
          {targets &&
            targets.map((target) => (
              <MapTarget
                map={map}
                target={target}
                key={target.name}
                zoom={mapZoom}
                menuViewSizes={menuViewSizes}
                collisionAvoidanceOffset={collisionAvoidanceOffset}
              />
            ))}
        </g>

        <g className="map-sourceBoat">
          <MapBoatIcon
            width={Math.min(map.height, map.width) / 30 + boatZoomScale}
            height={Math.min(map.height, map.width) / 15 + boatZoomScale}
            x={
              map.center.x -
              ((Math.min(map.height, map.width) / 30 + boatZoomScale) * 1) / 2
            }
            y={
              map.center.y -
              ((Math.min(map.height, map.width) / 15 + boatZoomScale) * 1) / 2
            }
          ></MapBoatIcon>
        </g>
      </svg>
    </div>
  );
}

export default Map;
