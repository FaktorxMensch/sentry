import { useSelector } from "react-redux";
import { STREAM_WIDE_TO_NARROW_ZOOM } from "../../Constants/zoom";
import { vecDistance } from "./../../Helpers/mapFunctions";
import { vecAngle } from "./../../Helpers/mapFunctions";
import { degreeToRad } from "../../Helpers/UnitConverter/converter";
import StreamTarget from "./StreamTarget";

function StreamTargets({
  streamZoom,
  thermalStream,
  colorStream,
  safeArea,
  canvas,
  scale,
  menuViewSizes,
}) {
  const targets = useSelector((state) => state.socket.targets);
  const camera = useSelector((state) => state.socket.camera);
  const settings = useSelector((state) => state.socket.settings);
  const { width, height } = canvas;

  return (
    <>
      {targets &&
        targets.map((target) => {
          if (
            !target.predicted ||
            !target.inside_fov ||
            (settings && settings["display-tracked-predictions"].value)
          )
            return (
              <StreamTarget
                canvas={{ width, height }}
                key={target.name}
                id={target.id}
                name={target.name}
                insideFoV={target.inside_fov}
                rect={
                  colorStream
                    ? streamZoom < STREAM_WIDE_TO_NARROW_ZOOM
                      ? target.rects.RGBwFoV
                      : target.rects.RGBnFoV
                    : thermalStream
                    ? streamZoom < STREAM_WIDE_TO_NARROW_ZOOM
                      ? target.rects.TwFoV
                      : target.rects.TnFoV
                    : null
                }
                threat={target.alarmCertainty}
                distance={vecDistance(target.pos)}
                scale={scale}
                safeArea={safeArea}
                targetAngle={vecAngle(target.pos)}
                cameraAngle={camera ? degreeToRad(camera.pan) : 0}
                menuViewSizes={menuViewSizes}
                predicted={target.predicted}
                cameraSource={target.dominant_sensor}
              />
            );
        })}
    </>
  );
}

export default StreamTargets;
