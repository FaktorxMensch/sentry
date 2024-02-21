import { getTargetIcon } from "../../Helpers/getTargetIcon";

function StreamTargetClassification({ name, position, size }) {
  return getTargetIcon(name, size, position.x - size / 2, position.y - size);
}

export default StreamTargetClassification;
