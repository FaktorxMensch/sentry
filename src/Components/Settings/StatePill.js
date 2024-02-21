import "../../Assets/css/Settings/statePill.css";
import { ReactComponent as LoadingIcon } from "./../../Assets/icons/refresh-ccw.svg";
import { ReactComponent as FailedIcon } from "./../../Assets/icons/info.svg";
import { ReactComponent as ConnectedIcon } from "./../../Assets/icons/check-1.svg";
import { Translator } from "./../../Helpers/Language/Language";
import * as STATE from "./../../Constants/pillState";

const StatePill = ({ state, text }) => {
  return (
    <div className={"statePill " + state}>
      {state === STATE.RED ? (
        <FailedIcon />
      ) : state === STATE.YELLOW ? (
        <LoadingIcon />
      ) : state === STATE.GREEN ? (
        <ConnectedIcon />
      ) : (
        <></>
      )}
      <p>
        <Translator tid={text}></Translator>
      </p>
    </div>
  );
};

export default StatePill;
