import "../../Assets/css/Popups/initialLoader.css";
import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { ReactComponent as CompanyIcon } from "./../../Assets/icons/company-logo.svg";
import { ReactComponent as LargeErrorIcon } from "./../../Assets/icons/cancel-large.svg";
import { ReactComponent as SeaAIIcon } from "./../../Assets/icons/sea-ai-logo-large.svg";
import { ReactComponent as RefreshIcon } from "./../../Assets/icons/refresh-ccw.svg";
import { ReactComponent as LogInIcon } from "./../../Assets/icons/log-in.svg";
import { store } from "../../Store";
import { closeExistingConnection } from "../../Store/Actions/creators";
import * as CONNECTION_STATE from "./../../Constants/connectionState";
import { Translator } from "./../../Helpers/Language/Language";

function InitialLoader() {
  const connection = useSelector((state) => state.socket.connection);

  function refreshPage() {
    window.location.reload(true);
  }

  if (
    connection &&
    connection.websocket &&
    connection.websocket === CONNECTION_STATE.REQUEST_TIMEDOUT
  ) {
    setTimeout(refreshPage, 30000);
  }

  // connection.websocket.info = CONNECTION_STATE.SUCCESS;

  return (
    <>
      {!connection ? (
        <div className="initialLoader">
          <Loader></Loader>
          <div className="initialLoader-iconDiv">
            <CompanyIcon />
          </div>
          <p>
            <Translator tid={"WEBSOCKET LOADING"} />
          </p>
        </div>
      ) : connection.websocket.info === CONNECTION_STATE.LOADING ? (
        <div className="initialLoader">
          <Loader></Loader>
          <div className="initialLoader-iconDiv">
            <CompanyIcon />
          </div>
          <p>
            <Translator tid={"WEBSOCKET LOADING"} />
          </p>
        </div>
      ) : connection.websocket.info === CONNECTION_STATE.BUSY ? (
        <div className="initialLoader">
          <div className="initialLoader-connectionBusy">
            <SeaAIIcon className="initialLoader-seaaiIcon" />
            <div className="initialLoader-connectionBusy-header">
              <p className="initialLoader-connectionBusy-title">
                <Translator tid={"CONNECTION BUSY title"} />
              </p>
              <p className="initialLoader-connectionBusy-subtitle">
                <Translator tid={"CONNECTION BUSY"} />
              </p>
            </div>

            {connection.websocket.device_list.map((device, key) => {
              return (
                <div className="initialLoader-connectionBusy-device" key={key}>
                  <div>
                    <p>
                      {device.user_agent === "UNKNOWN"
                        ? "UNKNOWN DEVICE"
                        : device.user_agent}
                    </p>
                    <p className="initialLoader-connectionBusy-device-grey">
                      {device.user_name === "UNKNOWN"
                        ? "PRIVATE"
                        : device.user_name}
                    </p>
                  </div>
                  <button
                    className="initialLoader-connectionBusy-device-button"
                    onClick={() => {
                      store.dispatch(closeExistingConnection(device.peer_id));
                    }}
                  >
                    <LogInIcon />
                    <Translator tid={"replace"} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : connection.websocket.info === CONNECTION_STATE.WAITING_CONNECTION ? (
        <div className="initialLoader">
          <Loader></Loader>
          <div className="initialLoader-iconDiv">
            <CompanyIcon />
          </div>
          <p>
            <Translator tid={"WAITING CONNECTION"} />
          </p>
        </div>
      ) : connection.websocket.info === CONNECTION_STATE.LOST ? (
        <div className="initialLoader">
          <LargeErrorIcon className="initialLoader-errorIcon" />
          <div className="initialLoader-connectionBusy-header">
            <p className="initialLoader-connectionBusy-title">
              <Translator tid={"CONNECTION LOST TITLE"} />
            </p>
            <p className="initialLoader-connectionBusy-subtitle">
              <Translator tid={"CONNECTION LOST SUBTITLE"} />
            </p>
          </div>
        </div>
      ) : connection.websocket.info === CONNECTION_STATE.CLOSED ? (
        <div className="initialLoader">
          <LargeErrorIcon className="initialLoader-errorIcon" />
          <div className="initialLoader-connectionBusy-header">
            <p className="initialLoader-connectionBusy-title">
              <Translator tid={"CONNECTION CLOSED TITLE"} />
            </p>
            <p className="initialLoader-connectionBusy-subtitle">
              <Translator tid={"CONNECTION CLOSED SUBTITLE"} />
            </p>
          </div>

          <button
            className="initialLoader-refreshButton"
            onClick={() => {
              window.location.reload();
            }}
          >
            <RefreshIcon />
            <Translator tid={"refresh"} />
          </button>
        </div>
      ) : connection.websocket.info === CONNECTION_STATE.SUCCESS ? (
        (!connection.streams) ? ( // TODO remove this false
          <div className="initialLoader">
            <Loader></Loader>
            <div className="initialLoader-iconDiv">
              <CompanyIcon />
            </div>
            <p>
              <Translator tid={"WAITING FOR STREAMS"} />
            </p>
          </div>
        ) : connection.streams.info === CONNECTION_STATE.LOADING ? (
          <div className="initialLoader">
            <Loader></Loader>
            <div className="initialLoader-iconDiv">
              <CompanyIcon />
            </div>
            <p>
              <Translator tid={"LOADING STREAMS"} />
            </p>
          </div>
        ) : connection.streams.info === CONNECTION_STATE.SUCCESS ? (
          <></>
        ) : (
          <div className="initialLoader">
            <LargeErrorIcon className="initialLoader-errorIcon" />
            <p>
              <Translator tid={"CONNECTION FAILED"} />
            </p>
          </div>
        )
      ) : (
        <div className="initialLoader">
          <LargeErrorIcon className="initialLoader-errorIcon" />
          <div>
            <p className="initialLoader-connectionFailed-title">
              <Translator tid={"CONNECTION FAILED"} />
            </p>
            connection.websocket.info !== 'SUCCESS'
          </div>
          <div>
            <p>
              <Translator tid={"CONNECTION FAILED text"} />
            </p>
          </div>

          <button
            className="initialLoader-refreshButton"
            onClick={() => {
              window.location.reload();
            }}
          >
            <RefreshIcon />
            <Translator tid={"refresh"} />
          </button>
        </div>
      )}
    </>
  );
}
export default InitialLoader;
