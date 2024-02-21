import "./../Assets/css/page.css";
import React from "react";
import InitialLoader from "./Popups/InitialLoader";
import { useSelector } from "react-redux";
import * as themes from "../Constants/themes";
import UpdateState from "./Popups/Update";
import RequestLoader from "./Popups/RequestLoader";
import RequestFailed from "./Popups/RequestFailed";
import BigView from "./Grid/BigView";
import SmallView from "./Grid/SmallView";
import Instruments from "./Grid/Instruments";
import Menu from "./Grid/Menu";
import Settings from "./Grid/Settings";
import TargetList from "./Grid/TargetList";
import Controls from "./Grid/Controls";
import InstallerMode from "./Popups/InstallerMode";
import * as view from "../Constants/view";

window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

function Page() {
  const theme = useSelector((state) => state.settings.theme) || themes.DARK;
  const settingsMenu = useSelector((state) => state.menu.settings) || false;
  const controlsMenu = useSelector((state) => state.menu.controls) || false;
  const targetList = useSelector((state) => state.menu.targetList);
  const selectedView = useSelector((state) => state.menu.view);
  const installerMode = useSelector((state) => state.settings.installerMode);
  const developerMode = useSelector((state) => state.settings.developerMode);

  return (
    <div className="page" data-theme={theme}>
      <div
        className={
          "grid" +
          (selectedView ? "" : " fullscreen") +
          (developerMode ? " withDeveloperMode" : "") +
          (installerMode ? " withInstallerMode" : "")
        }
      >
        {selectedView !== view.SMALL_VIEW && <BigView></BigView>}
        {selectedView !== view.BIG_VIEW && <SmallView></SmallView>}
        {selectedView === view.DUAL_VIEW && <Instruments></Instruments>}
        <Menu></Menu>

        {targetList && <TargetList></TargetList>}
        {settingsMenu && <Settings></Settings>}
        {controlsMenu && <Controls></Controls>}
      </div>
      {(installerMode || developerMode) && (
        <InstallerMode
          installerMode={installerMode}
          developerMode={developerMode}
        ></InstallerMode>
      )}
      <InitialLoader></InitialLoader>
      <UpdateState></UpdateState>
      <RequestLoader></RequestLoader>
      <RequestFailed></RequestFailed>
    </div>
  );
}
export default Page;
