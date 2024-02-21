import React from "react";
import Description from "../Text/Description";
import Title from "../Text/Title";
import SettingsElement from "../SettingsElement";
import SettingsGroup from "../SettingsGroup";
import Upload from "../Input/Upload";
import { useSelector } from "react-redux";
import { startUpdate } from "./../../../Store/Actions/creators";
import { store } from "./../../../Store";
import { useState } from "react";
import ImportantText from "../Text/ImportantText";
import Information from "../Text/Information";
import * as CONNECTION_STATE from "./../../../Constants/connectionState";
import HardwareUnit from "../../../Assets/icons/hardware-unit.png";
import SettingsHardwareGroup from "../SettingsHardwareGroup";
import SettingsLine from "../SettingsLine";
import { Translator } from "../../../Helpers/Language/Language";
import SettingsLineSpaceBetween from "../SettingsLineSpaceBetween";

function Update() {
  const versionState = useSelector((state) => state.socket.versions);
  const [fileName, setFileName] = useState(null);
  const [enableFlag, setEnableFlag] = useState(false);
  const [file, setFile] = useState(null);
  const [invalidFileFlag, setInvalidFileFlag] = useState(false);
  const updateConnection = useSelector(
    (state) => state.socket.connection.update
  );
  const developerMode = useSelector((state) => state.settings.developerMode);

  return (
    <>
      <SettingsHardwareGroup>
        <SettingsLine>
          <Information info={"hardware-unit"} />
        </SettingsLine>
        <img src={HardwareUnit} alt="hardware-unit" />
        <Title title={"SENTRY"} />
      </SettingsHardwareGroup>
      <SettingsGroup>
        <SettingsElement>
          <Title title={"SOFTWARE"} />
        </SettingsElement>
        {versionState && (
          <SettingsElement>
            {developerMode ? (
              Object.keys(versionState).map((key) => {
                return (
                  <SettingsLineSpaceBetween key={key}>
                    <Information info={key + ":"} />
                    <Description description={versionState[key].version} />
                  </SettingsLineSpaceBetween>
                );
              })
            ) : (
              <SettingsLineSpaceBetween>
                <Information info={"version:"} />
                <Description description={versionState.Package.version} />
              </SettingsLineSpaceBetween>
            )}
            <SettingsLineSpaceBetween>
              <Information info={"last updated:"} />
              <Description
                description={new Date(
                  versionState.Package.installDate * 1000
                ).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              />
            </SettingsLineSpaceBetween>
          </SettingsElement>
        )}
      </SettingsGroup>
      <SettingsGroup>
        <SettingsElement>
          <Title title={"SYSTEM UPDATE"} />
        </SettingsElement>
        <SettingsElement>
          <Description description={"update description"} />
          <Upload
            handleInput={(data) => {
              if (data.target.files && data.target.files[0]) {
                setFileName(data.target.files[0].name);
                setFile(data.target.files[0]);
                setEnableFlag(
                  updateConnection &&
                    updateConnection.info === CONNECTION_STATE.SUCCESS &&
                    data.target.files[0].name.endsWith(".oscar")
                );
                setInvalidFileFlag(
                  updateConnection &&
                    updateConnection.info === CONNECTION_STATE.SUCCESS &&
                    !data.target.files[0].name.endsWith(".oscar")
                );
              }
            }}
            handleFile={() => store.dispatch(startUpdate(file))}
            inputText={fileName || "select file"}
            buttonText={"upload file"}
            enable={enableFlag}
          ></Upload>
          {updateConnection &&
            updateConnection.info !== CONNECTION_STATE.SUCCESS && (
              <ImportantText text={"update server unavailable"} />
            )}

          {invalidFileFlag && (
            <ImportantText text={<Translator tid={"invalid update file"} />} />
          )}
        </SettingsElement>
      </SettingsGroup>
    </>
  );
}

export default Update;
