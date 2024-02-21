import "../../../Assets/css/Settings/Text/title.css";
import { Translator } from "../../../Helpers/Language/Language";
import React from "react";

const Title = ({ title }) => (
  <p className="title">
    <Translator tid={title} />
  </p>
);

export default Title;
