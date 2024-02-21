import "./../../Assets/css/Menu/menuSettings.css";
import { store } from "../../Store";
import { useSelector } from "react-redux";
import {
  addSelectedTarget,
  hideTargetList,
  showTargetList,
  hideSettings,
  showSettings,
  // showControls,
  // hideControls,
} from "../../Store/Actions/creators";
import { ReactComponent as DetectionsIcon } from "./../../Assets/icons/motorboat.svg";
import { ReactComponent as SettingsIcon } from "./../../Assets/icons/tool.svg";
// import { ReactComponent as ControlsIcon } from "./../../Assets/icons/settings.svg";
import MenuButton2 from "../MenuButton/MenuButton2";

function MenuSettings({ width }) {
  const targetList = useSelector((state) => state.menu.targetList) || false;
  const settingsMenu = useSelector((state) => state.menu.settings) || false;
  const controlsMenu = useSelector((state) => state.menu.controls) || false;

  function displayElement() {
    if (width > 910) return true;
    else return false;
  }

  return (
    <div
      className={
        "menuSettings primary" +
        (settingsMenu ? " withSettingsMenu" : "") +
        (controlsMenu ? " withControlsMenu" : "")
      }
    >
      <MenuButton2
        handleClick={() => {
          store.dispatch(addSelectedTarget(null));
          if (targetList) store.dispatch(hideTargetList());
          else store.dispatch(showTargetList());
        }}
        active={targetList}
      >
        <DetectionsIcon />
        {displayElement(width) && <p>DETECTIONS</p>}
      </MenuButton2>

      {/*<MenuButton2
        handleClick={() => {
          if (controlsMenu) store.dispatch(hideControls());
          else store.dispatch(showControls());
        }}
        active={controlsMenu}
      >
        <ControlsIcon />
        {displayElement(width) && <p>CONTROLS</p>}
      </MenuButton2>*/}

      <MenuButton2
        handleClick={() => {
          if (settingsMenu) store.dispatch(hideSettings());
          else store.dispatch(showSettings());
        }}
        active={settingsMenu}
      >
        <SettingsIcon />
        {displayElement(width) && <p>SETTINGS</p>}
      </MenuButton2>
    </div>
  );
}

export default MenuSettings;
