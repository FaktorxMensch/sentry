import "../../Assets/css/Popups/update.css";
import React from "react";
import { useSelector } from "react-redux";
import { finishUpdate } from "../../Store/Actions/creators";
import { store } from "../../Store";
import { Translator } from "./../../Helpers/Language/Language";
import { ReactComponent as ErrorIcon } from "./../../Assets/icons/cancel.svg";
import { ReactComponent as CheckIcon } from "./../../Assets/icons/check.svg";
import Loader from "./Loader";
import { ReactComponent as CompanyIcon } from "./../../Assets/icons/company-logo.svg";

function UpdateState() {
  const updateState = useSelector((state) => state.socket.update);

  return (
    <>
      {updateState ? (
        updateState.ERROR ? (
          <div className="updatePopup">
            <ErrorIcon className="initialLoader-errorIcon" />
            <div className="updatePopup-header">
              <p className="updatePopup-title">
                <Translator tid={"update-failed-title"} />
              </p>
              <p className="updatePopup-subtitle">
                <Translator tid={"update-failed-text"} />
              </p>
            </div>

            <button
              className="updatePopup-btn"
              onClick={() => {
                store.dispatch(finishUpdate());
              }}
            >
              <Translator tid={"update-restart-sentry"} />
            </button>
          </div>
        ) : updateState.INFO === "manage_update_finished" ? (
          <div className="updatePopup">
            <CheckIcon className="updatePopup-successIcon" />
            <div className="updatePopup-header">
              <p className="updatePopup-title">
                <Translator tid={"update-success-title"} />
              </p>
              <p className="updatePopup-subtitle">
                <Translator tid={"update-success-text"} />
              </p>
            </div>

            <button
              className="updatePopup-btn"
              onClick={() => {
                store.dispatch(finishUpdate());
              }}
            >
              <Translator tid={"restart-sentry"} />
            </button>
          </div>
        ) : updateState.INFO === "update_finished" ? (
          <div className="updatePopup">
            <Loader></Loader>
            <div className="updatePopup-iconDiv">
              <CompanyIcon />
            </div>
            <p className="updatePopup-subtitle">
              <Translator tid={"restarting system"} />
            </p>
          </div>
        ) : updateState.PROGRESS > 0 ? (
          <div className="updatePopup">
            <div className="updatePopup-progressBar">
              <div className="updatePopup-progressBar-progress">
                <span style={{ width: updateState.PROGRESS + "%" }}></span>
              </div>
            </div>
            <p className="updatePopup-title">
              <Translator tid={"updating-title"} />
            </p>
            <p className="updatePopup-subtitle">
              {updateState.INFO.replace(/_/g, " ").charAt(0).toUpperCase() +
                updateState.INFO.replace(/_/g, " ").slice(1)}
            </p>
          </div>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default UpdateState;
