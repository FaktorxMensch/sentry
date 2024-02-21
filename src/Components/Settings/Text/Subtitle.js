import "../../../Assets/css/Settings/Text/subtitle.css";
import { Translator } from "../../../Helpers/Language/Language";
import React from "react";

const Subtitle = ({ title }) => (
  <p className="subtitle">
    <Translator tid={title} />
  </p>
);

export default Subtitle;
