import * as state from "../Constants/threatLevel";
import DANGER_ALARM from "../Assets/sound/danger-alarm.mp3";
import WARNING_ALARM from "../Assets/sound/warning-alarm.mp3";
import { store } from "../Store";

const dangerAudio = new Audio(DANGER_ALARM);
const warningAudio = new Audio(WARNING_ALARM);

function startAlarmThread() {
  console.log("Alarm thread started");
  alarmThread();
}

function alarmThread() {
  const alarm = store.getState().socket.alarmState;
  const alarmState = store.getState().menu.alarm;

  if (alarmState === true)
    if (alarm === state.DANGER) {
      playAudio(dangerAudio);
      return setTimeout(alarmThread, 1000);
    } else if (alarm === state.WARNING) {
      playAudio(warningAudio);
      return setTimeout(alarmThread, 2000);
    }
  return setTimeout(alarmThread, 500);
}

function playAudio(audio) {
  audio.play().catch((event) => console.log(event));
}

export default startAlarmThread;
