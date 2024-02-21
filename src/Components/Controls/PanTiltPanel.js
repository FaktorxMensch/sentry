import "../../Assets/css/Controls/panTiltPanel.css";
import { ReactComponent as LeftIcon } from "../../Assets/icons/arrow-left.svg";
import { ReactComponent as UpIcon } from "../../Assets/icons/arrow-up.svg";
import { ReactComponent as DownIcon } from "../../Assets/icons/arrow-down.svg";
import { ReactComponent as RightIcon } from "./../../Assets/icons/arrow-right.svg";
import { tiltCamera, panCamera } from "../../Store/Actions/creators";
import { store } from "../../Store";
import PanTiltButton from "./PanTiltButton";
import React from "react";
import { useSelector } from "react-redux";

function PanTiltPanel({ map }) {
  const camera = useSelector((state) => state.socket.camera);

  return (
    <div className={map ? "panTiltPanel withMap" : "panTiltPanel"}>
      <>
        <PanTiltButton
          holdAction={() => store.dispatch(panCamera("NEG"))}
          holdEndAction={() => store.dispatch(panCamera("STOP"))}
          clickAction={() => null}
          extraClass={"left"}
        >
          <LeftIcon></LeftIcon>
        </PanTiltButton>
        {!map && (
          <PanTiltButton
            holdAction={() => store.dispatch(tiltCamera("POS"))}
            holdEndAction={() => store.dispatch(tiltCamera("STOP"))}
            clickAction={() => null}
            extraClass={"up"}
          >
            <UpIcon></UpIcon>
          </PanTiltButton>
        )}
        <PanTiltButton
          holdAction={() => null}
          holdEndAction={() => null}
          clickAction={() => {
            const pan = camera ? camera.pan - 30 : 0;
            store.dispatch(panCamera(pan < -180 ? pan + 360 : pan));
          }}
          children={"-30"}
        ></PanTiltButton>
        <PanTiltButton
          holdAction={() => store.dispatch(panCamera(0))}
          holdEndAction={() => null}
          clickAction={() => store.dispatch(panCamera(0))}
          children={"0"}
        ></PanTiltButton>
        <PanTiltButton
          holdAction={() => null}
          holdEndAction={() => null}
          clickAction={() => {
            const pan = camera ? camera.pan + 30 : 0;
            store.dispatch(panCamera(pan > 180 ? pan - 360 : pan));
          }}
          children={"+30"}
        ></PanTiltButton>
        {!map && (
          <PanTiltButton
            holdAction={() => store.dispatch(tiltCamera("NEG"))}
            holdEndAction={() => store.dispatch(tiltCamera("STOP"))}
            clickAction={() => null}
            extraClass={"down"}
          >
            <DownIcon></DownIcon>
          </PanTiltButton>
        )}
        <PanTiltButton
          holdAction={() => store.dispatch(panCamera("POS"))}
          holdEndAction={() => store.dispatch(panCamera("STOP"))}
          clickAction={() => null}
          extraClass={"right"}
          children={""}
        >
          <RightIcon></RightIcon>
        </PanTiltButton>
      </>
    </div>
  );
}

export default PanTiltPanel;
