import "./../../../Assets/css/Settings/Input/dropdown.css";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as DownIcon } from "./../../../Assets/icons/chevron-down.svg";
import { ReactComponent as UpIcon } from "./../../../Assets/icons/chevron-up.svg";
import { Translator } from "../../../Helpers/Language/Language";

const Dropdown = ({
  selected,
  options,
  onChange,
  locked = false,
  nmeaProperty = false,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selected);
  const inputRef = useRef();

  return (
    <div className="dropdown">
      <div
        ref={inputRef}
        onClick={() => {
          if (locked) return;
          if (Object.keys(options).length <= 1) return;
          else setShowMenu(!showMenu);
        }}
        className={
          Object.keys(options).length <= 1 || locked
            ? "dropdown-input locked"
            : "dropdown-input"
        }
      >
        <div className="dropdown-selected-value">
          {selectedValue === -1 ? (
            <Translator tid={"no source"} />
          ) : options[selectedValue] ? (
            "[" + selectedValue + "] " + options[selectedValue]["src-name"]
          ) : (
            selectedValue
          )}
        </div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            {showMenu ? <UpIcon /> : <DownIcon />}
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {nmeaProperty
            ? Object.keys(options).map((option) => {
                return (
                  <div
                    onClick={() => {
                      setSelectedValue(option);
                      setShowMenu(false);
                      onChange(option);
                    }}
                    key={option}
                    className={
                      parseInt(selectedValue) === parseInt(option)
                        ? "dropdown-menu-option selected"
                        : "dropdown-menu-option"
                    }
                  >
                    <div className="dropdown-menu-option-source">
                      {"[" + option + "] " + options[option]["src-name"]}
                    </div>
                    <div className="dropdown-menu-option-values">
                      {Object.keys(options[option]).map((property) => {
                        if (property !== "src-name")
                          return (
                            <div
                              key={property}
                              className="dropdown-menu-option-values-value"
                            >
                              {options[option][property].value}
                              <Translator
                                tid={
                                  options[option][property].unit +
                                  "_abbreviation"
                                }
                              />
                            </div>
                          );
                      })}
                    </div>
                  </div>
                );
              })
            : options.map((option) => {
                return (
                  <div
                    onClick={() => {
                      setSelectedValue(option);
                      setShowMenu(false);
                      onChange(option);
                    }}
                    key={option}
                    className={
                      selectedValue === option
                        ? "dropdown-menu-option selected"
                        : "dropdown-menu-option"
                    }
                  >
                    <div className="dropdown-menu-option-source">{option}</div>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
