import { useSelector } from "react-redux";
import LANGUAGES from "../../Constants/languages";
import { dictionary } from "./dictionary";

function Translator({ tid }) {
  const language =
    useSelector((state) => state.settings.language) || LANGUAGES.ENGLISH;
  return dictionary[language][tid] || tid;
}

export { Translator };
