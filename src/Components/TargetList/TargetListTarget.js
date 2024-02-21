import "./../../Assets/css/TargetList/targetListTarget.css";
import React from "react";
import TargetListPin from "./TargetListPin";
import { vecAngle, vecDistance } from "../../Helpers/mapFunctions";
import { ReactComponent as EIcon } from "./../../Assets/icons/arrow-east.svg";
import { ReactComponent as WIcon } from "./../../Assets/icons/arrow-west.svg";
import { ReactComponent as SIcon } from "./../../Assets/icons/arrow-south.svg";
import { ReactComponent as NIcon } from "./../../Assets/icons/arrow-north.svg";
import { ReactComponent as SEIcon } from "./../../Assets/icons/arrow-southeast.svg";
import { ReactComponent as SWIcon } from "./../../Assets/icons/arrow-southwest.svg";
import { ReactComponent as NEIcon } from "./../../Assets/icons/arrow-northeast.svg";
import { ReactComponent as NWIcon } from "./../../Assets/icons/arrow-northwest.svg";
import { getTargetClassification } from "./../../Helpers/getTargetClassification";
import { store } from "../../Store";
import { useSelector } from "react-redux";
import {
  addSelectedTarget,
  setTargetListImage,
  setConfigSetting,
} from "../../Store/Actions/creators";
import TargetListImage from "./TargetListImage";
import MetricConverter from "./../../Helpers/UnitConverter/MetricConverter";
import { DISTANCE_METRICS } from "../../Constants/units";
import TargetListTrackButton from "./TargetListTrackButton";
import { Translator } from "../../Helpers/Language/Language";
import { ReactComponent as ThreatCircleIcon } from "./../../Assets/icons/threat-circle.svg";

function TargetListTarget({ target, selected, threatColor }) {
  const settings = useSelector((state) => state.socket.settings);
  const targetListImageSrc = useSelector((state) => state.menu.targetListImage);
  const a = vecAngle(target.pos);
  const trueDistance = vecDistance(target.pos);
  const developerMode = useSelector((state) => state.settings.developerMode);

  return (
    <>
      <div
        className={
          "targetListTarget " +
          `${selected === target.id ? "targetListTarget-selected" : ""}`
        }
      >
        <button
          className="targetListTarget-button"
          onClick={() => {
            if (selected === target.id) {
              store.dispatch(addSelectedTarget(null));
            } else {
              store.dispatch(addSelectedTarget(target.id));
            }
          }}
        >
          <div className="targetListTarget-row">
            <div className="targetListTarget-row-content targetListTarget-targetIcon">
              <TargetListPin name={target.name}></TargetListPin>
              <div className="targetListTarget-row-content-column">
                <p>
                  <Translator tid={getTargetClassification(target.name)} />
                </p>
                {selected === target.id && (
                  <p className="targetListTarget-row-content-column-info">
                    <MetricConverter
                      value={trueDistance}
                      unit={DISTANCE_METRICS.METERS}
                    />
                  </p>
                )}
              </div>
            </div>

            <div className="targetListTarget-row-content targetListTarget-directionIcon">
              <ThreatCircleIcon fill={threatColor}></ThreatCircleIcon>
              {a >= -Math.PI / 8 && a < Math.PI / 8 && <NIcon />}
              {a >= Math.PI / 8 && a < (3 * Math.PI) / 8 && <NEIcon />}
              {a >= (3 * Math.PI) / 8 && a < (5 * Math.PI) / 8 && <EIcon />}
              {a >= (5 * Math.PI) / 8 && a < (7 * Math.PI) / 8 && <SEIcon />}
              {(a >= (7 * Math.PI) / 8 || a < (-7 * Math.PI) / 8) && <SIcon />}
              {a >= (-7 * Math.PI) / 8 && a < (-5 * Math.PI) / 8 && <SWIcon />}
              {a >= (-5 * Math.PI) / 8 && a < (-3 * Math.PI) / 8 && <WIcon />}
              {a >= (-3 * Math.PI) / 8 && a < -Math.PI / 8 && <NWIcon />}
            </div>
          </div>
        </button>
        {selected === target.id && (
          <button
            className="targetListTarget-buttonStreamImage"
            onClick={() => {
              if (targetListImageSrc === "thermal") {
                store.dispatch(setTargetListImage("color"));
              } else {
                store.dispatch(setTargetListImage("thermal"));
              }
            }}
          >
            <TargetListImage
              thermalImage={target.thermalImage64}
              colorImage={target.colorImage64}
              image={
                targetListImageSrc === "thermal"
                  ? target.thermalImage64
                  : target.colorImage64
              }
            ></TargetListImage>
          </button>
        )}

        {selected === target.id && developerMode && (
          <div className="targetListTarget-row">
            <TargetListTrackButton
              state={settings ? settings["track-center-object"].value : false}
              action={() => {
                if (settings)
                  store.dispatch(
                    setConfigSetting({
                      name: "track-center-object",
                      value: !settings["track-center-object"].value,
                    })
                  );
              }}
            ></TargetListTrackButton>
          </div>
        )}
      </div>
    </>
  );
}

export default TargetListTarget;
