import "../../../Assets/css/Settings/Input/upload.css";
import React from "react";
import { Translator } from "../../../Helpers/Language/Language";
import { ReactComponent as UploadIcon } from "../../../Assets/icons/upload.svg";

function Upload({ handleInput, handleFile, inputText, buttonText, enable }) {
  return (
    <div className="upload">
      <form className="upload-form">
        <label>
          <input type="file" onInput={handleInput} />
          <Translator tid={inputText} />
        </label>
      </form>
      <span
        className={enable ? "upload-button" : "upload-button disabled"}
        onClick={handleFile}
      >
        <UploadIcon></UploadIcon>
        <Translator tid={buttonText} />
      </span>
    </div>
  );
}

export default Upload;
