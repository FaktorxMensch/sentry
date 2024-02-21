import "../../../Assets/css/Settings/Text/descriptionWhite.css";
import { Translator } from "../../../Helpers/Language/Language";
import React from "react";

const DescriptionWhite = ({ description }) => (
  <p className="description-white">
    <Translator tid={description} />
  </p>
);

export default DescriptionWhite;
