import React from "react";
import { useSelector } from "react-redux";
import Title from "../Text/Title";
import SettingsElement from "../SettingsElement";
import Setting from "../Setting";
import * as types from "../../../Constants/settingTypes";
import { setConfigSetting } from "../../../Store/Actions/creators";
import SettingsGroup from "../SettingsGroup";
import { store } from "../../../Store";

function Developer() {
  const settings = useSelector((state) => state.socket.settings);
  const developerMode = useSelector((state) => state.settings.developerMode);

  const getSettingsByGroup = (settings) => {
    const groups = {};

    if (settings)
      Object.keys(settings).forEach((key) => {
        if (settings[key].group) {
          groups[settings[key].group] = groups[settings[key].group] || {};
          groups[settings[key].group][key] = settings[key];
        }
      });

    return groups;
  };

  return (
    <>
      {developerMode &&
        Object.keys(getSettingsByGroup(settings)).map((group) => {
          return (
            <SettingsGroup key={group}>
              <SettingsElement>
                <Title title={group} />
              </SettingsElement>
              {Object.keys(settings).map((key) => {
                if (settings[key].group === group)
                  return (
                    <Setting
                      key={key}
                      name={key}
                      type={
                        settings[key].type === "boolean"
                          ? types.TOGGLE
                          : settings[key].values !== null
                          ? settings[key].type === "int"
                            ? types.DEFAULT_INT_SELECT
                            : settings[key].type === "double"
                            ? types.DEFAULT_DOUBLE_SELECT
                            : types.DEFAULT_STRING_SELECT
                          : settings[key].type === "list_int"
                          ? types.LIST_INPUT
                          : types.INPUT
                      }
                      value={settings[key].value}
                      values={settings[key].values}
                      unit={settings[key].unit}
                      description={settings[key].description}
                      handleChange={(value) => {
                        store.dispatch(
                          setConfigSetting({
                            name: key,
                            value,
                          })
                        );
                      }}
                    />
                  );
              })}
            </SettingsGroup>
          );
        })}
    </>
  );
}

export default Developer;
