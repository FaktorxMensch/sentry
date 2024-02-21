import React from "react";
import { useSelector } from "react-redux";
import SettingsGroup from "../SettingsGroup";
import Title from "../Text/Title";
import Setting from "../Setting";
import * as types from "../../../Constants/settingTypes";
import * as themes from "../../../Constants/themes";
import {
  setConfigSetting,
  setTheme,
  // setLanguage,
  setDistanceMetric,
  setHideBoatbus,
  // setTemperatureMetric,
  // setSpeedMetric,
} from "../../../Store/Actions/creators";
import { store } from "../../../Store";
import { PAN_SPEED, PAN_ANGLE } from "../../../Constants/constants";
// import LANGUAGES from "../../../Constants/languages";
import {
  DISTANCE_METRICS,
  // SPEED_METRICS,
  // TEMPERATURE_METRICS,
} from "../../../Constants/units";

function General() {
  const settings = useSelector((state) => state.socket.settings);
  const theme = useSelector((state) => state.settings.theme) || themes.DARK;
  const hideBoatbus =
    useSelector((state) => state.settings.hideBoatbus) || false;
  // const language =
  //   useSelector((state) => state.settings.language) || LANGUAGES.ENGLISH;
  const distance_metric = useSelector((state) => state.settings.distanceMetric);
  // const temperature_metric = useSelector(
  //   (state) => state.settings.temperatureMetric
  // );
  // const speed_metric = useSelector((state) => state.settings.speedMetric);

  return (
    <>
      <SettingsGroup>
        <Title title={"DISPLAY"}></Title>

        <Setting
          name={"switch-theme"}
          type={types.SELECT}
          value={theme}
          values={[themes.DARK, themes.LOW_LIGHT]}
          description={"Set low-light mode help text"}
          handleChange={(value) => {
            store.dispatch(setTheme(value));
          }}
        ></Setting>
        <Setting
          name={"display-boatbus"}
          type={types.TOGGLE}
          value={!hideBoatbus}
          description={"no description"}
          handleChange={(value) => {
            store.dispatch(setHideBoatbus(!value));
          }}
        ></Setting>
        <Setting
          name={"select-distance-metric"}
          type={types.SELECT}
          value={distance_metric}
          values={Object.values(DISTANCE_METRICS).filter((key) =>
            key === DISTANCE_METRICS.NM ? false : true
          )}
          description={"Select app distance metric"}
          handleChange={(metric) => store.dispatch(setDistanceMetric(metric))}
        ></Setting>
      </SettingsGroup>

      {/*
        <SettingsGroup>
          <Title title={"LANGUAGE"}></Title>
          <Setting
            name={"select-language"}
            type={types.SELECT}
            value={language}
            values={Object.values(LANGUAGES)}
            description={"Select app language"}
            handleChange={(language) => store.dispatch(setLanguage(language))}
          ></Setting>
        </SettingsGroup>
      */}

      <SettingsGroup>
        <Title title={"MODES"} />
        {settings && settings["collision-avoidance-mode-scanning-speed"] && (
          <Setting
            name={"collision-avoidance-mode-scanning-speed"}
            type={types.SELECT}
            value={settings["collision-avoidance-mode-scanning-speed"].value}
            values={PAN_SPEED}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "collision-avoidance-mode-scanning-speed",
                  value,
                })
              )
            }
          ></Setting>
        )}
        {settings && settings["collision-avoidance-mode-limit"] && (
          <Setting
            name={"collision-avoidance-mode-limit"}
            type={types.SELECT}
            value={settings["collision-avoidance-mode-limit"].value}
            values={PAN_ANGLE}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "collision-avoidance-mode-limit",
                  value,
                })
              )
            }
          ></Setting>
        )}
        {settings && settings["surveillance-mode-scanning-speed"] && (
          <Setting
            name={"surveillance-mode-scanning-speed"}
            type={types.SELECT}
            value={settings["surveillance-mode-scanning-speed"].value}
            values={PAN_SPEED}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "surveillance-mode-scanning-speed",
                  value,
                })
              )
            }
          ></Setting>
        )}
      </SettingsGroup>

      {/*<SettingsGroup>
        <Title title={"UNITS"}></Title>
        <Setting
          name={"select-distance-metric"}
          type={types.SELECT}
          value={distance_metric}
          values={Object.values(DISTANCE_METRICS).filter((key) =>
            key === DISTANCE_METRICS.NM ? false : true
          )}
          description={"Select app distance metric"}
          handleChange={(metric) => store.dispatch(setDistanceMetric(metric))}
        ></Setting>
        <Setting
          name={"select-temperature-metric"}
          type={types.SELECT}
          value={temperature_metric}
          values={Object.values(TEMPERATURE_METRICS)}
          description={"Select app temperature metric"}
          handleChange={(metric) =>
            store.dispatch(setTemperatureMetric(metric))
          }
        ></Setting>
        <Setting
          name={"select-speed-metric"}
          type={types.SELECT}
          value={speed_metric}
          values={Object.values(SPEED_METRICS)}
          description={"Select app speed metric"}
          handleChange={(metric) => store.dispatch(setSpeedMetric(metric))}
       ></Setting>
      </SettingsGroup>*/}
    </>
  );
}

export default General;
