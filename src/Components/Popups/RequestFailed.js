import "../../Assets/css/Popups/requestFailed.css";
import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../Store";
import { acknowledgeRequestFailed } from "../../Store/Actions/creators";
import { Translator } from "./../../Helpers/Language/Language";
import { ReactComponent as ErrorIcon } from "./../../Assets/icons/cancel-large.svg";

function RequestFailed() {
  const request = useSelector((state) => state.socket.request);

  return (
    <>
      {request && request.success === false && (
        <div className="requestFailed">
          <div className="requestFailed-popup">
            <ErrorIcon />
            <div className="requestFailed-popup-wrapper">
              <p className="requestFailed-popup-title">
                <Translator tid={"request-failed-title"} />
              </p>
              <div className="requestFailed-popup-content">
                <p className="requestFailed-popup-text">
                  <Translator tid={"request-failed-text"} />
                </p>
                <p className="requestFailed-popup-text">
                  <Translator tid={"request-failed-text2"} />
                </p>
              </div>
            </div>
            <span onClick={() => store.dispatch(acknowledgeRequestFailed())}>
              <Translator tid={"request-failed-refreshTryAgain"} />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default RequestFailed;
