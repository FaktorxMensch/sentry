import "../../../Assets/css/Settings/Text/information.css";
import { Translator } from "../../../Helpers/Language/Language";
import React from "react";

const Information = ({ info }) => (
  <p className="information">
    <Translator tid={info} />
  </p>
);

export default Information;
