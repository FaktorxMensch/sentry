let DISABLE_DRAG = false;
let DRAG_ACTIVE = false;
let DRAG_THREAD = null;
let DRAG_POINT = null;
let PINCH_DISTANCE = 0;

export function setDragDisabled(value) {
  DISABLE_DRAG = value;
}

export function getDragDisabled() {
  return DISABLE_DRAG;
}

export function setDragActive(value) {
  DRAG_ACTIVE = value;
}

export function getDragActive() {
  return DRAG_ACTIVE;
}

export function setDragThread(value) {
  DRAG_THREAD = value;
}

export function getDragThread() {
  return DRAG_THREAD;
}

export function setDragPoint(value) {
  DRAG_POINT = value;
}

export function getDragPoint() {
  return DRAG_POINT;
}

export function getPinchDistance() {
  return PINCH_DISTANCE;
}

export function setPinchDistance(value) {
  PINCH_DISTANCE = value;
}
