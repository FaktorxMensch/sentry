import "../../../Assets/css/Settings/Text/informationXL.css";
import { Translator } from "../../../Helpers/Language/Language";
import React from "react";

const InformationXL = ({ info }) => (
  <p className="informationXL">
    <Translator tid={info} />
  </p>
);

export default InformationXL;
