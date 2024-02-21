import "../../../Assets/css/Settings/Text/description.css";
import { Translator } from "../../../Helpers/Language/Language";
import React from "react";

const Description = ({ description }) => (
  <p className="description">
    <Translator tid={description} />
  </p>
);

export default Description;
