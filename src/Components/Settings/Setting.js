import "../../Assets/css/Settings/setting.css";
import React from "react";
import { useState } from "react";
import Description from "./Text/Description";
import ToggleSwitch from "./Input/ToggleSwitch";
import SelectButtons from "./Input/SelectButtons";
import SettingsContent from "./SettingsContent";
import MetricInput from "./Input/MetricInput";
import DefaultSelect from "./Input/DefaultSelect";
// import { ReactComponent as InfoIcon } from "../../Assets/icons/info.svg";
import * as types from "../../Constants/settingTypes";
import SettingsElement from "./SettingsElement";
import Subtitle from "./Text/Subtitle";

const Setting = ({
  name,
  type,
  value,
  values = null,
  unit = null,
  description = "",
  handleChange,
  locker = null,
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <SettingsElement>
        <SettingsContent>
          <div className="setting-title">
            <Subtitle title={name} />
            {/*<button
              className={
                clicked
                  ? "setting-title-infoButton clicked"
                  : "setting-title-infoButton"
              }
              onClick={() => {
                setClicked(!clicked);
              }}
              href="#"
            >
              <InfoIcon />
            </button>*/}
          </div>
          {type === types.TOGGLE && (
            <ToggleSwitch
              state={value}
              onChange={(e) => handleChange(e.target.checked)}
            />
          )}
          {type === types.INPUT && (
            <MetricInput
              value={value}
              unit={unit}
              action={handleChange}
              type={null}
            ></MetricInput>
          )}
          {type === types.LIST_INPUT && (
            <MetricInput
              value={value}
              unit={unit}
              action={handleChange}
              type={"list"}
            ></MetricInput>
          )}
          {type === types.DEFAULT_INT_SELECT && (
            <DefaultSelect
              type={"int"}
              value={value}
              values={values}
              action={handleChange}
            ></DefaultSelect>
          )}
          {type === types.DEFAULT_DOUBLE_SELECT && (
            <DefaultSelect
              type={"double"}
              value={value}
              values={values}
              action={handleChange}
            ></DefaultSelect>
          )}
          {type === types.DEFAULT_STRING_SELECT && (
            <DefaultSelect
              type={"string"}
              value={value}
              values={values}
              action={handleChange}
            ></DefaultSelect>
          )}
        </SettingsContent>
        {type === types.SELECT && (
          <SelectButtons
            values={values}
            value={value}
            unit={unit}
            locker={locker}
            handleClick={(target) => {
              handleChange(target);
            }}
          />
        )}
        {clicked && <Description description={description} />}
      </SettingsElement>
    </>
  );
};

export default Setting;
