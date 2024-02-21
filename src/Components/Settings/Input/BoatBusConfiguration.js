import "../../../Assets/css/Settings/Input/boatBusConfiguration.css";
import React from "react";
import { ReactComponent as InfoIcon } from "./../../../Assets/icons/info.svg";
import { Translator } from "../../../Helpers/Language/Language";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setNMEAGateway } from "../../../Store/Actions/creators";
import { store } from "../../../Store";
import Dropdown from "./Dropdown";
import StatePill from "../StatePill";
import * as STATE from "./../../../Constants/pillState";

const BoatBusConfiguration = ({ settings, state }) => {
  const developerMode = useSelector((state) => state.settings.developerMode);

  const [model, setModel] = useState(
    settings && settings["nmea-gateway-model"].value
  );
  const [ip, setIP] = useState(
    settings && settings["nmea-gateway-ip-address"].value
  );
  const [port, setPort] = useState(
    settings && settings["nmea-gateway-port"].value
  );

  return (
    <>
      <div className="boatBusConfiguration-info">
        <div>
          <InfoIcon></InfoIcon>
        </div>
        <p>
          <Translator tid={"boatbus-info-temp"}></Translator>
        </p>
      </div>

      {state && state.BOATBUS === "DISCONNECTED" ? (
        <StatePill state={STATE.RED} text={"boatbus-failed"} />
      ) : state && state.BOATBUS === "CONNECTING" ? (
        <StatePill state={STATE.YELLOW} text={"boatbus-loading"} />
      ) : state && state.BOATBUS === "CONNECTED" ? (
        <StatePill state={STATE.GREEN} text={"boatbus-connected"} />
      ) : (
        <></>
      )}

      <div className="boatBusConfiguration">
        <form autoComplete="off">
          <div>
            <Translator tid={"boatbus model"} />
            <Dropdown
              locked={!developerMode}
              selected={model}
              options={settings["nmea-gateway-model"].values}
              onChange={(val) => {
                setModel(val);
              }}
            ></Dropdown>
          </div>
          <div>
            <Translator tid={"boatbus ip"} />
            <input
              className="boatBusConfiguration-input"
              value={ip}
              onChange={(data) => {
                setIP(data.currentTarget.value);
              }}
            />
          </div>
          <div>
            <Translator tid={"boatbus port"} />
            <input
              className="boatBusConfiguration-input"
              value={port}
              onChange={(data) => {
                setPort(data.currentTarget.value);
              }}
            />
          </div>
        </form>
        <button
          disabled={
            !/^[0-9]{1,5}$/.test(port) ||
            !/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(ip)
          }
          onClick={() => {
            store.dispatch(setNMEAGateway({ model, ip, port: parseInt(port) }));
          }}
        >
          <Translator tid={"boatbus confirm"} />
        </button>
      </div>
    </>
  );
};

export default BoatBusConfiguration;
