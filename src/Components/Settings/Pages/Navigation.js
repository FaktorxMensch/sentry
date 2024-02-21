import React from "react";
import Title from "../Text/Title";
import SettingsGroup from "../SettingsGroup";
import Setting from "../Setting";
import * as types from "../../../Constants/settingTypes";
import { useSelector } from "react-redux";
import { store } from "./../../../Store";
import { setConfigSetting } from "../../../Store/Actions/creators";
import { DISTANCE_METRICS } from "../../../Constants/units";

function Navigation() {
  const settings = useSelector((state) => state.socket.settings);

  return (
    <>
      <SettingsGroup>
        <Title title={"collision-avoidance-mode"} />
        {settings && settings["collision-avoidance-lv3-distance-max"] && (
          <Setting
            name={"collision-avoidance-lv3-distance-max"}
            type={types.SELECT}
            value={settings["collision-avoidance-lv3-distance-max"].value}
            values={settings["collision-avoidance-lv3-distance-max"].values}
            unit={DISTANCE_METRICS.METERS}
            locker={(val) => {
              return val >=
                settings["collision-avoidance-lv1-distance-max"].value
                ? true
                : false;
            }}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "collision-avoidance-lv3-distance-max",
                  value,
                })
              )
            }
          ></Setting>
        )}
        {settings && settings["collision-avoidance-lv1-distance-max"] && (
          <Setting
            name={"collision-avoidance-lv1-distance-max"}
            type={types.SELECT}
            value={settings["collision-avoidance-lv1-distance-max"].value}
            values={settings["collision-avoidance-lv1-distance-max"].values}
            unit={DISTANCE_METRICS.METERS}
            locker={(val) => {
              return val <=
                settings["collision-avoidance-lv3-distance-max"].value
                ? true
                : false;
            }}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "collision-avoidance-lv1-distance-max",
                  value,
                })
              )
            }
          ></Setting>
        )}
      </SettingsGroup>
      <SettingsGroup>
        <Title title={"surveillance-mode"} />
        {settings && settings["surveillance-lv3-distance-max"] && (
          <Setting
            name={"surveillance-lv3-distance-max"}
            type={types.SELECT}
            value={settings["surveillance-lv3-distance-max"].value}
            values={settings["surveillance-lv3-distance-max"].values}
            unit={DISTANCE_METRICS.METERS}
            locker={(val) => {
              return val >= settings["surveillance-lv1-distance-max"].value
                ? true
                : false;
            }}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "surveillance-lv3-distance-max",
                  value,
                })
              )
            }
          ></Setting>
        )}
        {settings && settings["surveillance-lv1-distance-max"] && (
          <Setting
            name={"surveillance-lv1-distance-max"}
            type={types.SELECT}
            value={settings["surveillance-lv1-distance-max"].value}
            values={settings["surveillance-lv1-distance-max"].values}
            unit={DISTANCE_METRICS.METERS}
            locker={(val) => {
              return val <= settings["surveillance-lv3-distance-max"].value
                ? true
                : false;
            }}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "surveillance-lv1-distance-max",
                  value,
                })
              )
            }
          ></Setting>
        )}
      </SettingsGroup>
      <SettingsGroup>
        <Title title={"manual-mode"} />
        {settings && settings["manual-lv3-distance-max"] && (
          <Setting
            name={"manual-lv3-distance-max"}
            type={types.SELECT}
            value={settings["manual-lv3-distance-max"].value}
            values={settings["manual-lv3-distance-max"].values}
            unit={DISTANCE_METRICS.METERS}
            locker={(val) => {
              return val >= settings["manual-lv1-distance-max"].value
                ? true
                : false;
            }}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "manual-lv3-distance-max",
                  value,
                })
              )
            }
          ></Setting>
        )}
        {settings && settings["manual-lv1-distance-max"] && (
          <Setting
            name={"manual-lv1-distance-max"}
            type={types.SELECT}
            value={settings["manual-lv1-distance-max"].value}
            values={settings["manual-lv1-distance-max"].values}
            unit={DISTANCE_METRICS.METERS}
            locker={(val) => {
              return val <= settings["manual-lv3-distance-max"].value
                ? true
                : false;
            }}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            handleChange={(value) =>
              store.dispatch(
                setConfigSetting({
                  name: "manual-lv1-distance-max",
                  value,
                })
              )
            }
          ></Setting>
        )}
      </SettingsGroup>
    </>
  );
}

export default Navigation;
