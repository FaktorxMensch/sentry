import "../../Assets/css/Instruments/boatBusParameter.css";
import React, { useState, useEffect, useRef } from "react";
import { Translator } from "../../Helpers/Language/Language";

const BoatBusParameter = ({ name, value, unit }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  function getSize() {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  }

  useEffect(() => getSize());

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);

  return (
    <div ref={ref} className="boatBusParameter">
      <div className="boatBusParameter-name">
        <p>
          <Translator tid={name} />
        </p>
      </div>
      <div
        className={
          "boatBusParameter-value" +
          (width < 160 || height < 150
            ? " smallFont"
            : width < 270 || height < 260
            ? " mediumFont"
            : "")
        }
      >
        <p>{value}</p>
      </div>
      <div className="boatBusParameter-unit">
        {unit && (
          <p>
            <Translator tid={unit} />
          </p>
        )}
      </div>
    </div>
  );
};

export default BoatBusParameter;
