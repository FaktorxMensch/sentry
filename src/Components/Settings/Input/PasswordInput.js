import "../../../Assets/css/Settings/Input/passwordInput.css";
import React from "react";
import { Translator } from "../../../Helpers/Language/Language";
import { useState } from "react";
import { ReactComponent as LoginIcon } from "./../../../Assets/icons/service.svg";

const PasswordInput = ({ buttonText, handleSubmit }) => {
  const [password, setPassword] = useState(null);

  return (
    <div className={"passwordInput"}>
      <form autoComplete="off">
        <input
          className="passwordInput-input"
          type="password"
          placeholder="Password"
          autoComplete="false"
          onChange={(value) => {
            setPassword(value.currentTarget.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleSubmit(password);
            }
          }}
        />
      </form>
      <button
        className={"passwordInput-button"}
        onClick={() => handleSubmit(password)}
      >
        <LoginIcon></LoginIcon>
        <Translator tid={buttonText} />
      </button>
    </div>
  );
};

export default PasswordInput;
