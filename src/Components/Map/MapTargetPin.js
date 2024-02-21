import { getTargetIcon } from "../../Helpers/getTargetIcon";

function MapTargetPin({ center, name, size }) {
  return getTargetIcon(
    name,
    size,
    center.width - size / 2,
    center.height - size / 2
  );
}

export default MapTargetPin;
