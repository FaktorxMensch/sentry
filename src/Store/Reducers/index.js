import { combineReducers } from "redux";
import socket from "./socket";
import menu from "./menu";
import settings from "./settings";

export default combineReducers({
  socket,
  menu,
  settings,
});
