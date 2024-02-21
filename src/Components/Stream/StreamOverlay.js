import "./../../Assets/css/Stream/streamOverlay.css";
import React from "react";
import StreamTargets from "./StreamTargets";
import { useState, useEffect, useRef } from "react";
import { store } from "../../Store";
import { dragAndDrop } from "../../Store/Actions/creators";
import {
  getDragActive,
  setDragActive,
  getDragThread,
  setDragThread,
  getDragDisabled,
  setDragDisabled,
  getDragPoint,
  setDragPoint,
  setPinchDistance,
  getPinchDistance,
} from "../../Helpers/dragAndDrop";
import { MAX_ZOOM_STREAM } from "../../Constants/zoom";
import { useSelector } from "react-redux";

function StreamOverlay({
  thermalStream,
  colorStream,
  zoomAction,
  style,
  zoom,
}) {
  //this line is used to fix the bug with the pan Button
  //it allows the component to rerender when changing modes
  //and recalculate the menuViewSizes
  const settings = useSelector((state) => state.socket.settings);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const ref = useRef(null);
  const scale = zoom >= 3 ? zoom - 2 : zoom + 1;
  const menuViewTop = document.getElementsByClassName("menuView-top");
  const menuViewBottom = document.getElementsByClassName("menuView-bottom");

  const getMenuViewSizes = (menuView, hPos) => {
    let width = 0;
    let height = 0;

    if (hPos === "left") {
      width = menuView[0].children[0].clientWidth / scale;
      height = menuView[0].children[0].clientHeight / scale;
    } else if (hPos === "right") {
      width = menuView[0].children[1].clientWidth / scale;
      height = menuView[0].children[1].clientHeight / scale;
    }

    return { width, height };
  };

  const menuViewSizes = {
    topLeft: getMenuViewSizes(menuViewTop, "left"),
    topRight: getMenuViewSizes(menuViewTop, "right"),
    bottomLeft: getMenuViewSizes(menuViewBottom, "left"),
    bottomRight: getMenuViewSizes(menuViewBottom, "right"),
  };

  function getSize() {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
      setOffsetTop(ref.current.parentElement.getBoundingClientRect().y);
      setOffsetLeft(ref.current.parentElement.getBoundingClientRect().x);
    }
  }

  useEffect(() => getSize());

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);

  const videoStyle = {
    height: style.height,
    width: style.width,
    marginLeft: style.marginLeft,
    marginTop: style.marginTop,
    transform: "scale(" + scale + ")",
  };

  /**
   * Returns an object with the top, right, bottom, left limits
   * where is possible to display a detection.
   */
  const getSafeArea = (
    scale,
    canvas,
    halfCanvasWidth,
    marginLeft,
    marginTop
  ) => {
    const halfCanvasHeight = canvas.height / 2;
    const scaledHalfCanvasHeight = halfCanvasHeight / scale;
    const scaledHalfCanvasWidth = halfCanvasWidth / scale;
    const scaledMarginLeft = marginLeft / scale;
    const scaledMarginTop = marginTop / scale;
    const isScaleOne = scale === 1;

    //middle canva + distance to left corner + margin
    //even tho the canvas will always be a fixed value(attributes)
    //when you scale it the real value of the canvas is
    //canvas * scale and a movement of 10 value on scale(1)
    //is 30 on scale(3). Therefore we need to divide the halfCanvasWidth
    //by the scale to get the correct value of the safe area

    const safeAreaLeft = isScaleOne
      ? scaledMarginLeft
      : halfCanvasWidth - scaledHalfCanvasWidth + scaledMarginLeft;

    const safeAreaRight = isScaleOne
      ? canvas.width - scaledMarginLeft
      : halfCanvasWidth + scaledHalfCanvasWidth - scaledMarginLeft;

    const safeAreaTop =
      halfCanvasHeight - scaledHalfCanvasHeight + scaledMarginTop;

    const safeAreaBottom = halfCanvasHeight + scaledHalfCanvasHeight;

    return {
      top: safeAreaTop,
      right: safeAreaRight,
      bottom: safeAreaBottom,
      left: safeAreaLeft,
    };
  };

  const safeArea = getSafeArea(
    scale,
    { width, height },
    width / 2,
    Math.abs(style.marginLeft),
    Math.abs(style.marginTop)
  );

  function setPosition(cX, cY) {
    const x = Math.round(((cX - offsetLeft) / width) * 1000) / 1000;
    const y = Math.round(((cY + offsetTop) / height) * 1000) / 1000;

    setDragPoint({
      x: x >= 0 ? (x <= 1 ? x : 1) / (zoom + 1) : 0,
      y: y >= 0 ? (y <= 1 ? y : 1) / (zoom + 1) : 0,
    });
  }

  function pinchDistance(x1, y1, x2, y2) {
    return Math.hypot((x1 - x2) / width, (y1 - y2) / height);
  }

  function startAction(x1, y1, x2, y2, length) {
    if (length === 1) {
      setTimeout(() => {
        if (!getDragDisabled()) {
          setDragActive(true);
          setPosition(x1, y1);
          store.dispatch(dragAndDrop({ ...getDragPoint(), state: "start" }));

          if (getDragThread() !== null) {
            clearInterval(getDragThread());
            setDragThread(null);
          }

          setDragThread(
            setInterval(() => {
              if (!getDragDisabled())
                store.dispatch(dragAndDrop({ ...getDragPoint(), state: null }));
            }, 200)
          );
        } else {
          console.log("Pinch started before 100ms passed");
        }
      }, 100);
    } else if (length === 2) {
      setDragDisabled(true);
      setPinchDistance(pinchDistance(x1, y1, x2, y2));
    }
  }

  function moveAction(x1, y1, x2, y2, length) {
    if (length === 1) {
      if (getDragActive() === true) {
        setPosition(x1, y1, x2, y2);
      }
    } else if (length === 2) {
      const newPinch = pinchDistance(x1, y1, x2, y2);
      const newZoom = Math.min(
        Math.max(zoom + 5 * (newPinch - getPinchDistance()), 0),
        1000
      );

      setPinchDistance(newPinch);
      zoomAction(Math.min(newZoom, MAX_ZOOM_STREAM));
    }
  }

  function endAction(x, y, length) {
    if (getDragThread() !== null || getDragActive() === true) {
      setPosition(x, y);
      store.dispatch(dragAndDrop({ ...getDragPoint(), state: "end" }));
      clearInterval(getDragThread());
      setDragThread(null);
      setDragActive(false);
    }
    if (length === 0) setDragDisabled(false);
  }

  return (
    <svg
      className="streamOverlay"
      style={videoStyle}
      ref={ref}
      /*onMouseDown={(e) => {
        startAction(e.clientX, e.clientY, null, null, 1);
      }}
      onMouseMove={(e) => {
        e.preventDefault();
        moveAction(e.clientX, e.clientY, null, null, 1);
      }}
      onMouseOut={(e) => {
        endAction(e.clientX, e.clientY, 1);
      }}
      onMouseUp={(e) => {
        endAction(e.clientX, e.clientY, 1);
      }}*/
      onTouchStart={(e) => {
        startAction(
          e.targetTouches[0].clientX,
          e.targetTouches[0].clientY,
          e.targetTouches.length === 2 ? e.targetTouches[1].clientX : null,
          e.targetTouches.length === 2 ? e.targetTouches[1].clientY : null,
          e.targetTouches.length
        );
      }}
      onTouchMove={(e) => {
        moveAction(
          e.touches[0].clientX,
          e.touches[0].clientY,
          e.touches.length === 2 ? e.touches[1].clientX : null,
          e.touches.length === 2 ? e.touches[1].clientY : null,
          e.touches.length
        );
      }}
      onTouchEnd={(e) => {
        endAction(
          e.changedTouches[0].clientX,
          e.changedTouches[0].clientY,
          e.targetTouches.length
        );
      }}
    >
      <StreamTargets
        streamZoom={zoom}
        thermalStream={thermalStream}
        colorStream={colorStream}
        safeArea={safeArea}
        canvas={{ width, height }}
        scale={scale}
        menuViewSizes={menuViewSizes}
      ></StreamTargets>
    </svg>
  );
}

export default StreamOverlay;
