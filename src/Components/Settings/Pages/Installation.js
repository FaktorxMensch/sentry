import "../../../Assets/css/Settings/Pages/installation.css";
import React, { useState } from "react";
import Title from "../Text/Title";
import Description from "../Text/Description";
import DescriptionWhite from "../Text/DescriptionWhite";
import SettingsElement from "../SettingsElement";
import SettingsGroup from "../SettingsGroup";
import Setting from "../Setting";
import * as types from "../../../Constants/settingTypes";
import { useSelector } from "react-redux";
import { ReactComponent as CameraIcon } from "../../../Assets/icons/camera.svg";
import { ReactComponent as DownloadIcon } from "../../../Assets/icons/download.svg";
import { ReactComponent as RetryIcon } from "../../../Assets/icons/rotate-ccw.svg";
import Upload from "../Input/Upload";
import PasswordInput from "../Input/PasswordInput";
import { store } from "./../../../Store";
import ImportantText from "../Text/ImportantText";
import ImportantTextSuccess from "../Text/ImportantTextSuccess";
import {
  setConfigSetting,
  uploadMask,
  maskSubmittedResult,
  setInstallerMode,
  setDeveloperMode,
  startPanoramaRecording,
} from "../../../Store/Actions/creators";
import ProgressBar from "../ProgressBar";
import * as URL from "../../../Constants/webserviceURL";
import BoatBusConfiguration from "../Input/BoatBusConfiguration";
import SettingsLine from "../../Settings/SettingsLine";
import BoatBusParameters from "../Input/BoatBusGroup";

function Installation() {
  const settings = useSelector((state) => state.socket.settings);
  const maskSuccess = useSelector((state) => state.settings.maskSuccess);
  const installerMode = useSelector((state) => state.settings.installerMode);
  const developerMode = useSelector((state) => state.settings.developerMode);
  const boatbus = useSelector((state) => state.socket.boatbus) || {};
  const state = useSelector((state) => state.socket.state);
  const IP = useSelector((state) => state.settings.IP);

  const [fileName, setFileName] = useState(null);
  const [enableFlag, setEnableFlag] = useState(false);
  const [file, setFile] = useState(null);
  const [invalidFileFlag, setInvalidFileFlag] = useState(false);

  return (
    <>
      <SettingsGroup>
        <Title title={"boatbus setup"} />
        <BoatBusConfiguration settings={settings} state={state} />

        {state && state.BOATBUS === "CONNECTED" && (
          <>
            <hr className="installation-dash"></hr>
            <Title title={"boatbus sources"} />
            <BoatBusParameters settings={settings} boatbus={boatbus} />
          </>
        )}
      </SettingsGroup>

      {(installerMode || developerMode) && (
        <SettingsGroup>
          <Title title={"Vessel Parameters"} />
          {settings && settings["mounting-height"] && (
            <Setting
              name={"mounting-height-input"}
              type={types.INPUT}
              value={settings["mounting-height"].value}
              unit={"m"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              handleChange={(value) =>
                store.dispatch(
                  setConfigSetting({
                    name: "mounting-height",
                    value,
                  })
                )
              }
            ></Setting>
          )}
          {settings && settings["mast-to-bow-length"] && (
            <Setting
              name={"mast-to-bow-input"}
              type={types.INPUT}
              value={settings["mast-to-bow-length"].value}
              unit={"m"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              handleChange={(value) =>
                store.dispatch(
                  setConfigSetting({
                    name: "mast-to-bow-length",
                    value,
                  })
                )
              }
            ></Setting>
          )}
        </SettingsGroup>
      )}
      {(installerMode || developerMode) && (
        <SettingsGroup>
          <Title title={"CAMERA Obstruction Mask"} />
          <SettingsElement>
            <Description description={"first camera mask step"} />
            {state && state.PANORAMA && state.PANORAMA.state === null && (
              <span
                className="installation-maskButton"
                onClick={() => {
                  store.dispatch(startPanoramaRecording());
                }}
              >
                <CameraIcon />
                <DescriptionWhite description={"run camera mask"} />
              </span>
            )}
            {state && state.PANORAMA && state.PANORAMA.state === "RUNNING" && (
              <ProgressBar progress={state.PANORAMA.progress}></ProgressBar>
            )}
            {state && state.PANORAMA && state.PANORAMA.state === "FINISHED" && (
              <SettingsLine>
                <a
                  className={"installation-maskButton"}
                  href={
                    "http://" +
                    IP +
                    ":" +
                    URL.DOWNLOAD_MASK.port +
                    URL.DOWNLOAD_MASK.url
                  }
                  download={"panorama-diagnosis.tiff"}
                >
                  <DownloadIcon></DownloadIcon>
                  <DescriptionWhite description={"download mask"} />
                </a>

                <span
                  className="installation-maskButton retry"
                  onClick={() => {
                    store.dispatch(startPanoramaRecording());
                  }}
                >
                  <RetryIcon></RetryIcon>

                  <DescriptionWhite description={"rerun camera mask"} />
                </span>
              </SettingsLine>
            )}
          </SettingsElement>

          <SettingsElement>
            <Description description={"second camera mask step"} />
            <Upload
              handleInput={(data) => {
                if (data.target.files && data.target.files[0]) {
                  setFileName(data.target.files[0].name);
                  setFile(data.target.files[0]);
                  store.dispatch(maskSubmittedResult(""));
                  if (
                    data.target.files[0].name.endsWith(".oscar") ||
                    data.target.files[0].name.endsWith(".tiff")
                  ) {
                    setEnableFlag(true);
                    setInvalidFileFlag(false);
                  } else {
                    setEnableFlag(false);
                    setInvalidFileFlag(true);
                  }
                }
              }}
              handleFile={() => store.dispatch(uploadMask(file))}
              inputText={fileName || "select file"}
              buttonText={"upload file"}
              enable={enableFlag}
            ></Upload>
            {invalidFileFlag ? (
              <SettingsElement>
                <ImportantText
                  text={"Selected file is incompatible. Please try again."}
                />
              </SettingsElement>
            ) : maskSuccess === true ? (
              <SettingsElement>
                <ImportantTextSuccess
                  text={
                    "Upload completed! You can now turn on the Camera Mask below."
                  }
                />
              </SettingsElement>
            ) : maskSuccess === false ? (
              <SettingsElement>
                <ImportantText text={"Mask upload failed. Please try again."} />
              </SettingsElement>
            ) : (
              <></>
            )}
          </SettingsElement>

          {settings && settings["streaming-src"] && (
            <Setting
              name={"camera-mask-visualization-mode"}
              type={types.TOGGLE}
              value={settings["streaming-src"].value === "processing-pipeline"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              handleChange={(value) => {
                store.dispatch(
                  setConfigSetting({
                    name: "debug-processing-pipeline",
                    value,
                  })
                );

                store.dispatch(
                  setConfigSetting({
                    name: "trigger-worker-restart",
                    value: true,
                  })
                );
              }}
            ></Setting>
          )}
        </SettingsGroup>
      )}
      {!installerMode && !developerMode && (
        <SettingsGroup>
          <SettingsElement>
            <Title title={"auth"} />
          </SettingsElement>
          <SettingsElement>
            <Description description={"auth description"} />
            <PasswordInput
              buttonText={"login as installer"}
              handleSubmit={(input) => {
                if (input === "sentryinstaller")
                  store.dispatch(setInstallerMode(true));
                else if (input === "powerdev123")
                  store.dispatch(setDeveloperMode(true));
              }}
            />
          </SettingsElement>
        </SettingsGroup>
      )}
    </>
  );
}

export default Installation;
