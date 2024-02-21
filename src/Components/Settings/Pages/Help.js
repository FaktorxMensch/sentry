import "../../../Assets/css/Settings/Pages/help.css";
import React from "react";
import InformationXL from "../Text/InformationXL";
import SettingsElement from "../SettingsElement";
import { Translator } from "../../../Helpers/Language/Language";
import QRCode from "../../../Assets/icons/qrcode.jpg";
import { ReactComponent as LinkIcon } from "../../../Assets/icons/external-link.svg";
import DescriptionWhite from "../Text/DescriptionWhite";

function Help() {
  return (
    <>
      <div className="helpContentGroup">
        <SettingsElement>
          <p className="helpContentGroup-title">
            <Translator tid={"contacts"} />
          </p>
        </SettingsElement>
        <SettingsElement>
          <p className="helpContentGroup-information">Phone</p>
          <InformationXL info={"+33 699 726 241"} />
        </SettingsElement>
        <SettingsElement>
          <p className="helpContentGroup-information">Email</p>
          <InformationXL info={"service@sea.ai"} />
        </SettingsElement>
        <SettingsElement>
          <p className="helpContentGroup-information">Whatsapp</p>
          <img className="helpContentGroup-image" src={QRCode} alt="qr-code" />
          <a
            className="helpContentGroup-button"
            href="https://wa.me/message/PIQQ7M4CTKGHP1"
            target="_blank"
          >
            <LinkIcon />
            <DescriptionWhite description={"whatsapp link"} />
          </a>
        </SettingsElement>
      </div>
    </>
  );
}

export default Help;
