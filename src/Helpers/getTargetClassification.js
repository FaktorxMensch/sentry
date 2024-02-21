import * as classification from "./../Constants/classification";

export function getTargetClassification(name) {
  if (name.includes("SAILING_BOAT")) return classification.SAILING_BOAT;
  else if (
    name.includes("MOTORBOAT") ||
    name.includes("BOAT") ||
    name.includes("LEISURE_VEHICLE") ||
    name.includes("SHIP")
  )
    return classification.SHIP;
  else if (name.includes("HUMAN")) return classification.HUMAN;
  else if (name.includes("BUOY")) return classification.BUOY;
  else if (name.includes("ANIMAL")) return classification.ANIMAL;
  else return classification.HAZARD;
}
