import "../../../Assets/css/Settings/Input/selectButtons.css";
import React from "react";
import { Translator } from "../../../Helpers/Language/Language";
import MetricConverter from "../../../Helpers/UnitConverter/MetricConverter";

function SelectButtons({ values, value, unit = null, handleClick, locker }) {
  return (
    <div className="selectButtons">
      {values.map((element) => (
        <button
          key={element}
          href="!#"
          className={
            locker && locker(element)
              ? "selectButtons-button locked"
              : element === value
              ? "selectButtons-button active"
              : "selectButtons-button"
          }
          onClick={
            locker && locker(element) ? null : () => handleClick(element)
          }
        >
          {unit === null ? (
            <Translator tid={element} />
          ) : (
            <MetricConverter value={element} unit={unit} />
          )}
        </button>
      ))}
    </div>
  );
}

export default SelectButtons;
