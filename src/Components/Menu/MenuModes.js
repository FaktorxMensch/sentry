import "./../../Assets/css/Menu/menuModes.css";
import { useSelector } from "react-redux";
import { ReactComponent as SurveillanceIcon } from "../../Assets/icons/shield.svg";
import { ReactComponent as CollisionIcon } from "../../Assets/icons/compass.svg";
import { ReactComponent as ManualIcon } from "../../Assets/icons/crosshair.svg";
import { ReactComponent as SoundIcon } from "./../../Assets/icons/mute-off.svg";
import { ReactComponent as StreamRecIcon } from "./../../Assets/icons/video.svg";
import { ReactComponent as IMURecIcon } from "./../../Assets/icons/inertia.svg";
import TURN_ON_ALARM from "./../../Assets/sound/turn-on-alarm.mp3";
import {
  setConfigSetting,
  setAlarmMode,
  startSnapshotRecording,
  stopSnapshotRecording,
  startIMURecording,
  stopIMURecording,
  startStreamRecording,
  stopStreamRecording,
} from "../../Store/Actions/creators";
import MenuButton from "../MenuButton/MenuButton";
import MenuButton2 from "../MenuButton/MenuButton2";
import { store } from "../../Store";
import { Translator } from "./../../Helpers/Language/Language";

function MenuModes({ width }) {
  const settings = useSelector((state) => state.socket.settings);
  const settingsMenu = useSelector((state) => state.menu.settings) || false;
  const controlsMenu = useSelector((state) => state.menu.controls) || false;
  const alarm = useSelector((state) => state.menu.alarm) || false;
  const targetList = useSelector((state) => state.menu.targetList);
  const developerMode = useSelector((state) => state.settings.developerMode);
  const state = useSelector((state) => state.socket.state);

  function changeMode(mode) {
    store.dispatch(
      setConfigSetting({
        name: "system-mode",
        value: mode,
      })
    );
    return;
  }

  function displayElement(active) {
    if (width > 910) return true;
    else if (width > 560 && active) return true;
    else return false;
  }

  function modeActive(mode) {
    return settings &&
      settings["system-mode"] &&
      settings["system-mode"].value === mode
      ? true
      : false;
  }

  return (
    <div
      className={
        "menuModes primary" +
        (targetList ? " withTargetList" : "") +
        (settingsMenu ? " withSettingsMenu" : "") +
        (controlsMenu ? " withControlsMenu" : "")
      }
    >
      <div className={"menuModes-modes"}>
        <MenuButton
          handleClick={() => changeMode("collision-avoidance")}
          active={modeActive("collision-avoidance")}
        >
          <CollisionIcon />
          {displayElement(modeActive("collision-avoidance")) && (
            <p>
              <Translator tid={"COLLISION AVOIDANCE"} />
            </p>
          )}
        </MenuButton>
        <MenuButton
          handleClick={() => changeMode("surveillance")}
          active={modeActive("surveillance")}
        >
          <SurveillanceIcon />
          {displayElement(modeActive("surveillance")) && (
            <p>
              <Translator tid={"SURVEILLANCE"} />
            </p>
          )}
        </MenuButton>
        <MenuButton
          handleClick={() => changeMode("manual")}
          active={modeActive("manual")}
        >
          <ManualIcon />
          {displayElement(modeActive("manual")) && (
            <p>
              <Translator tid={"MANUAL"} />
            </p>
          )}
        </MenuButton>
      </div>

      <div className={"menuModes-alarm"}>
        {developerMode && (
          <>
            <MenuButton2
              handleClick={() => {
                if (state) {
                  if (state.SNAPSHOT_RECORDING)
                    store.dispatch(stopSnapshotRecording());
                  else store.dispatch(startSnapshotRecording());
                }
              }}
              active={state && state.SNAPSHOT_RECORDING === true}
            >
              <StreamRecIcon />
              {displayElement(false) && (
                <p>
                  <Translator tid={"SNAPSHOT"} />
                </p>
              )}
            </MenuButton2>

            <MenuButton2
              handleClick={() => {
                if (state) {
                  if (state.IMU_RECORDING) store.dispatch(stopIMURecording());
                  else store.dispatch(startIMURecording());
                }
              }}
              active={state && state.IMU_RECORDING === true}
            >
              <IMURecIcon />
              {displayElement(false) && (
                <p>
                  <Translator tid={"IMU"} />
                </p>
              )}
            </MenuButton2>

            <MenuButton2
              handleClick={() => {
                if (state) {
                  if (state.RECORDING) store.dispatch(stopStreamRecording());
                  else store.dispatch(startStreamRecording());
                }
              }}
              active={state && state.RECORDING === true}
            >
              <StreamRecIcon />
              {displayElement(false) && (
                <p>
                  <Translator tid={"STREAM"} />
                </p>
              )}
            </MenuButton2>
          </>
        )}
        <MenuButton2
          handleClick={() => {
            const audio = new Audio(TURN_ON_ALARM);
            if (alarm !== true) {
              audio.play().catch((event) => console.log(event));
            }
            store.dispatch(setAlarmMode(!alarm));
          }}
          active={alarm}
        >
          <SoundIcon />
          {displayElement(false) && (
            <p>
              <Translator tid={"ALARM"} />
            </p>
          )}
        </MenuButton2>
      </div>
    </div>
  );
}

export default MenuModes;
