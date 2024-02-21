import "./../../Assets/css/Popups/alertStatus.css";
import { ReactComponent as HazardIcon } from "./../../Assets/icons/alert.svg";
import { ReactComponent as BellIcon } from "./../../Assets/icons/bell.svg";
import { useSelector } from "react-redux";
import * as STATE from "../../Constants/threatLevel";
import React from "react";
import { Translator } from "../../Helpers/Language/Language";

function AlertStatus() {
  const alarm = useSelector((state) => state.socket.alarmState);
  const error = useSelector((state) => state.socket.error);

  return (
    <>
      {(alarm === STATE.DANGER || alarm === STATE.WARNING || error) && (
        <div className="alertStatus">
          {alarm === STATE.DANGER ? (
            <div className="alertStatus-danger">
              <HazardIcon></HazardIcon>
              <div>
                <p className="alertStatus-title">
                  <Translator tid={"status-danger-title"}></Translator>
                </p>
                <p className="alertStatus-text">
                  <Translator tid={"status-danger-text"}></Translator>
                </p>
              </div>
            </div>
          ) : alarm === STATE.WARNING ? (
            <div className="alertStatus-warning">
              <HazardIcon></HazardIcon>
              <div>
                <p className="alertStatus-title">
                  <Translator tid={"status-warning-title"}></Translator>
                </p>
                <p className="alertStatus-text">
                  <Translator tid={"status-warning-text"}></Translator>
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}

          {error && (
            <div className="alertStatus-notifications">
              <BellIcon></BellIcon>
              <div>
                <p className="alertStatus-title">
                  <Translator tid={error.message}></Translator>
                </p>
                <p className="alertStatus-text">
                  <Translator tid={error.message + "-text"}></Translator>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default AlertStatus;
