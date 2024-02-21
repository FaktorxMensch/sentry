import "../../../Assets/css/Settings/Input/boatBusGroup.css";
import React from "react";
import Title from "../Text/Title";
import { store } from "../../../Store";
import { setConfigSetting } from "../../../Store/Actions/creators";
import { Translator } from "../../../Helpers/Language/Language";
import Dropdown from "./Dropdown";

function BoatBusGroup({ settings, boatbus }) {
  return (
    <>
      {boatbus &&
        settings &&
        Object.keys(boatbus).map((pgnGroup) => {
          let selectedValue = settings[pgnGroup + "-src"]
            ? settings[pgnGroup + "-src"].value
            : null;

          return (
            <div className="boatBusGroup" key={pgnGroup}>
              <Title title={pgnGroup} />
              <Dropdown
                selected={selectedValue}
                options={boatbus[pgnGroup]}
                nmeaProperty={true}
                onChange={(value) => {
                  store.dispatch(
                    setConfigSetting({
                      name: pgnGroup + "-src",
                      value: parseInt(value),
                    })
                  );
                }}
              ></Dropdown>
              <div className="boatBusGroup-select">
                <div className="boatBusGroup-select-properties">
                  {!boatbus[pgnGroup].hasOwnProperty(selectedValue) ? (
                    <p>{<Translator tid={"no values"} />}</p>
                  ) : (
                    <>
                      {Object.keys(boatbus[pgnGroup]).map((source) => {
                        if (
                          Object.keys(boatbus[pgnGroup][source]).length === 0 &&
                          settings[pgnGroup + "-src"].value === parseInt(source)
                        ) {
                          return (
                            <p key={source}>
                              {<Translator tid={"no values"} />}
                            </p>
                          );
                        }
                        return (
                          <React.Fragment key={source}>
                            {Object.keys(boatbus[pgnGroup][source]).map(
                              (property) => {
                                if (
                                  settings[pgnGroup + "-src"].value ===
                                    parseInt(source) &&
                                  property !== "src-name"
                                )
                                  return (
                                    <div
                                      className="boatBusGroup-select-properties-property"
                                      key={property}
                                    >
                                      <p>{<Translator tid={property} />}</p>
                                      <p className="boatBusGroup-select-properties-property-value">
                                        {
                                          boatbus[pgnGroup][source][property]
                                            .value
                                        }
                                        <Translator
                                          tid={
                                            boatbus[pgnGroup][source][property]
                                              .unit + "_abbreviation"
                                          }
                                        />
                                      </p>
                                    </div>
                                  );
                              }
                            )}
                          </React.Fragment>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default BoatBusGroup;
