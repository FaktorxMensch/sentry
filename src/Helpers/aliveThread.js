import * as CONNECTION_STATE from "./../Constants/connectionState";
import { store } from "../Store";

function startAliveThread(ping, lostAction) {
  console.log("Is Alive thread started");
  aliveThread(ping, lostAction, 1);
}

function aliveThread(ping, lostAction, attempt) {
  const connection = store.getState().socket.connection;
  const aliveState = store.getState().socket.aliveState;

  if (
    aliveState === false &&
    connection &&
    connection.websocket &&
    connection.websocket.info !== CONNECTION_STATE.LOST
  ) {
    if (attempt < 4) attempt++;
    else lostAction();
  }

  if (
    aliveState === true &&
    connection &&
    connection.websocket &&
    connection.websocket.info === CONNECTION_STATE.LOST
  ) {
    window.location.reload(true);
  }
  if (aliveState === true) {
    attempt = 1;
  }

  ping();
  return setTimeout(() => aliveThread(ping, lostAction, attempt), 3000);
}

export default startAliveThread;
