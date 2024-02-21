import { degreeToRad } from "./../Helpers/UnitConverter/converter";

export const FIELD_OF_VIEW = degreeToRad(32);
export const TILT_INCREMENT = degreeToRad(0.5);
export const PAN_INCREMENT = degreeToRad(1.0);
export const MAX_TILT_UP = degreeToRad(20);
export const MAX_TILT_DOWN = degreeToRad(20);

export const CAMERA_RATIO = 640 / 512;

export const PAN_SPEED = [0.015, 0.03];
export const PAN_ANGLE = [10, 35, 75];
