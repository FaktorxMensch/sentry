import React from "react";
import { ReactComponent as SailingBoatIcon } from "../Assets/icons/obstacles/class-sailing-boat.svg";
import { ReactComponent as ShipIcon } from "../Assets/icons/obstacles/class-ship.svg";
import { ReactComponent as HazardIcon } from "../Assets/icons/obstacles/class-hazard.svg";
import { ReactComponent as HumanIcon } from "../Assets/icons/obstacles/class-person.svg";
import { ReactComponent as BuoyIcon } from "../Assets/icons/obstacles/class-buoy.svg";

export function getTargetIcon(classification, size, x, y) {
  if (classification.includes("SAILING_BOAT"))
    return (
      <SailingBoatIcon width={size} height={size} x={x} y={y}></SailingBoatIcon>
    );
  else if (
    classification.includes("MOTORBOAT") ||
    classification.includes("BOAT") ||
    classification.includes("LEISURE_VEHICLE") ||
    classification.includes("SHIP")
  )
    return <ShipIcon width={size} height={size} x={x} y={y}></ShipIcon>;
  else if (classification.includes("HUMAN"))
    return <HumanIcon width={size} height={size} x={x} y={y}></HumanIcon>;
  else if (classification.includes("BUOY"))
    return <BuoyIcon width={size} height={size} x={x} y={y}></BuoyIcon>;
  else return <HazardIcon width={size} height={size} x={x} y={y}></HazardIcon>;
}
