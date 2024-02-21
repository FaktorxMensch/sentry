import React from "react";
import {
  vecDistance,
  getMapDistance,
  vecAngle,
  getMapMaxDistance,
} from "../../Helpers/mapFunctions";
import MapTargetFar from "./MapTargetFar";
import MapTargetClose from "./MapTargetClose";
import { useSelector } from "react-redux";
import {
  addSelectedTarget,
  showTargetList,
} from "../../Store/Actions/creators";
import { store } from "../../Store";
import {
  getTargetThreatColor,
  getTargetThreatLevel,
} from "../../Helpers/getTargetThreat";

function MapTarget({
  map,
  target,
  zoom,
  menuViewSizes,
  collisionAvoidanceOffset,
}) {
  let settings = useSelector((state) => state.socket.settings);
  let selected = useSelector((state) => state.settings.selectedTarget);
  let mapCircles = settings ? settings["map-distance-ranges"].value : [];

  const trueDistance = vecDistance(target.pos);

  const trueAngle = vecAngle(target.pos);
  const mapDistance = getMapDistance(map, trueDistance, mapCircles, zoom);

  const mapMaxDistance = getMapMaxDistance(map, mapCircles, zoom);

  const targetThreatColor = getTargetThreatColor(
    settings,
    target.alarmCertainty
  );

  const targetThreatLevel = getTargetThreatLevel(
    settings,
    target.alarmCertainty
  );

  return (
    <>
      {mapDistance <= mapMaxDistance ? (
        <MapTargetClose
          target={target}
          angle={trueAngle}
          center={mapDistance}
          mapDistance={map.center}
          pos={{
            x: map.center.x + mapDistance * Math.sin(trueAngle),
            y: map.center.y - mapDistance * Math.cos(trueAngle),
          }}
          color={targetThreatColor}
          threat={targetThreatLevel}
          handleClick={(id) => {
            if (selected === id) {
              store.dispatch(addSelectedTarget(null));
            } else {
              store.dispatch(addSelectedTarget(id));
              store.dispatch(showTargetList());
            }
          }}
        />
      ) : (
        <MapTargetFar
          target={target}
          angle={trueAngle}
          map={map}
          color={targetThreatColor}
          menuViewSizes={menuViewSizes}
          collisionAvoidanceOffset={collisionAvoidanceOffset}
        />
      )}
    </>
  );
}

export default MapTarget;
