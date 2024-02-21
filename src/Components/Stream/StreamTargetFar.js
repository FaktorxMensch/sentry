/*
This component has 2 functions that are responsible to calculate the position
of the out of bound background and classification(icon).

Keep in mind that the position received is the (xmin, ymin) of the detection, 
so the top left corner of the detection. And the the axis XY are in the top left
corner of the <svg> and x grows to the right and y grows down

The values are "scaled" because a movement of 4px when scale=1 would be 8 when
scale=2. To keep the same value no matter the scale the value is divided by the scale.
Ex: The menu view buttons have a padding around of 4 px and since we want it to be always
4 the zooming(scalling) we need to scale the value.

Now we will go over an example of an out of bound detection under the top left menu view buttons.
const centerY = positionY + height /2
For horizontal detection:
- we check if centerY has a lower value then safeArea.top and has a grater value then (safeArea.top + buttonHeight + two times the padding around the button).
If true then we need to shit the x position of the icon to the right: x = position.x + buttonWdth + two times the padding around the button

For vertical detecion:
- Same thing but we "play" with the width of the detection and position.x to check if it is under the menu view buttons.

Thoughts from the dev that did this:
- Even if it is considered by some less scalable I think that having the icon with the backgound in the same imagem will
be more eficiente and lead to less code since the function for the icons position will not be needed.
- The fact that the arrow from the icon is in the same image as the backgorund lead to some "martelar" to center the
icon correctly inside. Maybe it would be a good idea to split the arrow and the background.
*/

import "./../../Assets/css/Stream/streamTargetFar.css";
import React from "react";
import StreamTargetClassification from "./StreamTargetClassification";
import StreamTargetOutOfBound from "./StreamTargetOutOfBound";
import { getTargetThreatColor } from "./../../Helpers/getTargetThreat";
import { useSelector } from "react-redux";

function StreamTargetFar({
  id,
  name,
  position,
  threat,
  scale,
  targetAngle,
  cameraAngle,
  visibleTarget,
  safeArea,
  menuViewSizes,
  width,
  height,
}) {
  const settings = useSelector((state) => state.socket.settings);
  const color = getTargetThreatColor(settings, threat);
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const targetOutOfBoundSize = 40;
  const classificationOutOfBoundSize = 24;

  const scaledPaddingMenuView = 4 / scale;
  const scaledHalfTargetOutOfBoundSize = targetOutOfBoundSize / 2 / scale;
  const scaledHalfClassificationSize = classificationOutOfBoundSize / 2 / scale;
  const scaledDoublePaddingMenuView = scaledPaddingMenuView * 2;
  const scaledPaddingClassificationIcon =
    (targetOutOfBoundSize - classificationOutOfBoundSize) / 2 / scale;

  //how much the target is overlap by the menuView and border
  const scaledPositionOffset = 5 / scale;

  const scaledPaddingDiagonalTopBottom = 11 / scale;

  const vertical =
    (!visibleTarget.visibleTop || !visibleTarget.visibleBottom) &&
    visibleTarget.visibleLeft &&
    visibleTarget.visibleRight;

  let targetOutOfBoundPosition, targetClassificationPosition;

  const getTargetClassificationPosition = () => {
    let x = position.x,
      y = position.y;

    //the width when out of bound is horizontal includes the arrow
    //therefore it is no possible to center based on icon size
    const scaledHorizontalPadding = 27 / scale;

    //adjust x left or right
    if (!visibleTarget.visibleRight || !visibleTarget.visibleLeft) {
      if (targetAngle < cameraAngle) {
        //left
        //under top left menu
        if (
          position.y + halfHeight + scaledPositionOffset <
            safeArea.top +
              menuViewSizes.topLeft.height +
              scaledDoublePaddingMenuView &&
          position.y + halfHeight + scaledPositionOffset > safeArea.top
        ) {
          x =
            safeArea.left +
            scaledDoublePaddingMenuView +
            menuViewSizes.topLeft.width +
            scaledHorizontalPadding;
          y = position.y + halfHeight + scaledHalfClassificationSize;
        }
        //under bottom left menu
        else if (
          position.y + halfHeight - scaledPositionOffset >
            safeArea.bottom -
              menuViewSizes.bottomLeft.height -
              scaledDoublePaddingMenuView &&
          position.y + halfHeight - scaledPositionOffset < safeArea.bottom
        ) {
          x =
            safeArea.left +
            scaledDoublePaddingMenuView +
            menuViewSizes.bottomLeft.width +
            scaledHorizontalPadding;
          y = position.y + scaledHalfClassificationSize + halfHeight;
        }
        //if above safeArea.top then make it a static position
        else if (
          position.y - scaledHalfTargetOutOfBoundSize + halfHeight <
          safeArea.top
        ) {
          x =
            safeArea.left +
            scaledDoublePaddingMenuView +
            menuViewSizes.topLeft.width +
            scaledHorizontalPadding;
          y =
            safeArea.top +
            scaledHalfTargetOutOfBoundSize +
            scaledHalfClassificationSize +
            scaledPaddingDiagonalTopBottom;
        }
        //if below safeArea.bottom then make it a static position
        else if (
          position.y + scaledHalfTargetOutOfBoundSize + halfHeight >
          safeArea.bottom
        ) {
          x =
            safeArea.left +
            scaledDoublePaddingMenuView +
            menuViewSizes.bottomLeft.width +
            scaledHorizontalPadding;
          y =
            safeArea.bottom -
            scaledPaddingClassificationIcon -
            scaledPaddingDiagonalTopBottom;
        }
        //between menus
        else {
          x = safeArea.left + scaledPaddingMenuView + scaledHorizontalPadding;
          y =
            position.y -
            scaledPaddingClassificationIcon +
            halfHeight +
            scaledHalfTargetOutOfBoundSize;
        }
      } else {
        //right
        //under top right menu
        if (
          position.y + halfHeight + scaledPositionOffset <
            safeArea.top +
              menuViewSizes.topRight.height +
              scaledDoublePaddingMenuView &&
          position.y + halfHeight + scaledPositionOffset > safeArea.top
        ) {
          x =
            safeArea.right -
            scaledDoublePaddingMenuView -
            menuViewSizes.topRight.width -
            scaledHorizontalPadding;
          y = position.y + halfHeight + scaledHalfClassificationSize;
        }
        //under bottom right menu
        else if (
          position.y + halfHeight - scaledPositionOffset >
            safeArea.bottom -
              menuViewSizes.bottomRight.height -
              scaledDoublePaddingMenuView &&
          position.y + halfHeight - scaledPositionOffset < safeArea.bottom
        ) {
          x =
            safeArea.right -
            scaledDoublePaddingMenuView -
            menuViewSizes.bottomRight.width -
            scaledHorizontalPadding;
          y = position.y + halfHeight + scaledHalfClassificationSize;
        }
        //if above safeArea.top then make it a static position
        else if (
          position.y - scaledHalfTargetOutOfBoundSize + halfHeight <
          safeArea.top
        ) {
          x =
            safeArea.right -
            scaledDoublePaddingMenuView -
            menuViewSizes.topRight.width -
            scaledHorizontalPadding;
          y =
            safeArea.top +
            scaledHalfTargetOutOfBoundSize +
            scaledHalfClassificationSize +
            scaledPaddingDiagonalTopBottom;
        }
        //if below safeArea.bottom then make it a static position
        else if (
          position.y + scaledHalfTargetOutOfBoundSize + halfHeight >
          safeArea.bottom
        ) {
          x =
            safeArea.right -
            scaledDoublePaddingMenuView -
            menuViewSizes.bottomRight.width -
            scaledHorizontalPadding;
          y =
            safeArea.bottom -
            scaledPaddingClassificationIcon -
            scaledPaddingDiagonalTopBottom;
        }
        //between menus
        else {
          x = safeArea.right - scaledPaddingMenuView - scaledHorizontalPadding;
          y =
            position.y -
            scaledPaddingClassificationIcon +
            halfHeight +
            scaledHalfTargetOutOfBoundSize;
        }
      }
    }

    //adjust x and y bottom
    else if (!visibleTarget.visibleBottom) {
      const scaledPaddingBottomClassification = 15 / scale;
      //under bottom menu left
      if (
        position.x + halfWidth <
        safeArea.left +
          menuViewSizes.bottomLeft.width +
          scaledDoublePaddingMenuView
      ) {
        x = position.x + halfWidth;
        y =
          safeArea.bottom -
          scaledDoublePaddingMenuView -
          menuViewSizes.bottomLeft.height -
          scaledPaddingBottomClassification;
      }
      //under bottom menu right
      else if (
        position.x + halfWidth >
        safeArea.right -
          menuViewSizes.bottomRight.width -
          scaledDoublePaddingMenuView
      ) {
        x = position.x + halfWidth;
        y =
          safeArea.bottom -
          scaledDoublePaddingMenuView -
          menuViewSizes.bottomRight.height -
          scaledPaddingBottomClassification;
      }
      //between menus
      else {
        x = position.x + halfWidth;
        y =
          safeArea.bottom -
          scaledPaddingMenuView -
          scaledPaddingBottomClassification;
      }
    }

    //adjust x and y top
    else if (!visibleTarget.visibleTop) {
      const scaledPaddingTopClassification = 39 / scale;

      //under top menu left
      if (
        position.x + halfWidth <
        safeArea.left +
          menuViewSizes.topLeft.width +
          scaledDoublePaddingMenuView
      ) {
        x = position.x + halfWidth;
        y =
          safeArea.top +
          scaledDoublePaddingMenuView +
          menuViewSizes.topLeft.height +
          scaledPaddingTopClassification;
      }
      //under top menu right
      else if (
        position.x + halfWidth >
        safeArea.right -
          menuViewSizes.topRight.width -
          scaledDoublePaddingMenuView
      ) {
        x = position.x + halfWidth;
        y =
          safeArea.top +
          scaledDoublePaddingMenuView +
          menuViewSizes.topRight.height +
          scaledPaddingTopClassification;
      }
      //between menus
      else {
        x = position.x + halfWidth;
        y =
          safeArea.top + scaledPaddingMenuView + scaledPaddingTopClassification;
      }
    }

    return {
      x: x,
      y: y,
    };
  };

  const getTargetOutOfBoundPosition = () => {
    let x = position.x,
      y = position.y;

    //adjust x left or right
    if (!visibleTarget.visibleRight || !visibleTarget.visibleLeft) {
      if (targetAngle < cameraAngle) {
        //left
        //under top left menu
        if (
          position.y + halfHeight + scaledPositionOffset <
            safeArea.top +
              menuViewSizes.topLeft.height +
              scaledDoublePaddingMenuView &&
          position.y + halfHeight + scaledPositionOffset > safeArea.top
        ) {
          x =
            safeArea.left +
            scaledHalfTargetOutOfBoundSize +
            menuViewSizes.topLeft.width +
            scaledDoublePaddingMenuView;
          y = position.y + halfHeight;
        }
        //under bottom left menu
        else if (
          position.y + halfHeight - scaledPositionOffset >
            safeArea.bottom -
              menuViewSizes.bottomLeft.height -
              scaledDoublePaddingMenuView &&
          position.y + halfHeight - scaledPositionOffset < safeArea.bottom
        ) {
          x =
            safeArea.left +
            scaledHalfTargetOutOfBoundSize +
            menuViewSizes.bottomLeft.width +
            scaledDoublePaddingMenuView;
          y = position.y + halfHeight;
        }
        //if above safeArea.top then make it a static position
        else if (
          position.y - scaledHalfTargetOutOfBoundSize + halfHeight <
          safeArea.top
        ) {
          x =
            safeArea.left +
            scaledHalfTargetOutOfBoundSize +
            menuViewSizes.topLeft.width +
            scaledDoublePaddingMenuView;
          y = safeArea.top + 31 / scale;
        }
        //if below safeArea.bottom then make it a static position
        else if (
          position.y + scaledHalfTargetOutOfBoundSize + halfHeight >
          safeArea.bottom
        ) {
          x =
            safeArea.left +
            scaledHalfTargetOutOfBoundSize +
            menuViewSizes.bottomLeft.width +
            scaledDoublePaddingMenuView;
          y = safeArea.bottom - 30 / scale;
        }
        //betweem menus
        else {
          x =
            safeArea.left +
            scaledHalfTargetOutOfBoundSize +
            scaledPaddingMenuView;
          y = position.y + halfHeight;
        }
      } else {
        //right
        //under top right menu
        if (
          position.y + halfHeight + scaledPositionOffset <
            safeArea.top +
              menuViewSizes.topRight.height +
              scaledDoublePaddingMenuView &&
          position.y + halfHeight + scaledPositionOffset > safeArea.top
        ) {
          x =
            safeArea.right -
            menuViewSizes.topRight.width -
            scaledHalfTargetOutOfBoundSize -
            scaledDoublePaddingMenuView;
          y = position.y + halfHeight;
        }
        //under bottom right menu
        else if (
          position.y + halfHeight - scaledPositionOffset >
            safeArea.bottom -
              menuViewSizes.bottomRight.height -
              scaledDoublePaddingMenuView &&
          position.y + halfHeight - scaledPositionOffset < safeArea.bottom
        ) {
          x =
            safeArea.right -
            scaledHalfTargetOutOfBoundSize -
            menuViewSizes.bottomRight.width -
            scaledDoublePaddingMenuView;
          y = position.y + halfHeight;
        }
        //if above safeArea.top then make it a static position
        else if (
          position.y - scaledHalfTargetOutOfBoundSize + halfHeight <
          safeArea.top
        ) {
          x =
            safeArea.right -
            scaledHalfTargetOutOfBoundSize -
            menuViewSizes.topRight.width -
            scaledDoublePaddingMenuView;
          y = safeArea.top + 31 / scale;
        }
        //if below safeArea.bottom then make it a static position
        else if (
          position.y + scaledHalfTargetOutOfBoundSize + halfHeight >
          safeArea.bottom
        ) {
          x =
            safeArea.right -
            scaledHalfTargetOutOfBoundSize -
            menuViewSizes.bottomRight.width -
            scaledDoublePaddingMenuView;
          y = safeArea.bottom - 30 / scale;
        }
        //betweem menus
        else {
          x =
            safeArea.right -
            scaledHalfTargetOutOfBoundSize -
            scaledPaddingMenuView;
          y = position.y + halfHeight;
        }
      }
    }

    //adjust y top
    else if (!visibleTarget.visibleTop) {
      const scaledTargetOutOfBoundSize = targetOutOfBoundSize / scale;
      //under top left menu
      if (
        position.x + halfWidth <
        safeArea.left +
          menuViewSizes.topLeft.width +
          scaledDoublePaddingMenuView
      ) {
        x = position.x + halfWidth;
        y =
          safeArea.top +
          scaledDoublePaddingMenuView +
          menuViewSizes.topLeft.height +
          scaledTargetOutOfBoundSize;
      }
      //under top right menu
      else if (
        position.x + halfWidth >
        safeArea.right -
          menuViewSizes.topRight.width -
          scaledDoublePaddingMenuView
      ) {
        x = position.x + halfWidth;
        y =
          safeArea.top +
          scaledDoublePaddingMenuView +
          menuViewSizes.topRight.height +
          scaledTargetOutOfBoundSize;
      } else {
        x = position.x + halfWidth;
        y = safeArea.top + scaledPaddingMenuView + scaledTargetOutOfBoundSize;
      }
    }

    // //adjust y bottom
    else if (!visibleTarget.visibleBottom) {
      //under bottom left menu
      if (
        position.x + halfWidth <
        safeArea.left +
          menuViewSizes.bottomLeft.width +
          scaledDoublePaddingMenuView
      ) {
        x = position.x + halfWidth;
        y =
          safeArea.bottom -
          scaledDoublePaddingMenuView -
          menuViewSizes.bottomLeft.height;
      }
      //under bottom right menu
      else if (
        position.x + halfWidth >
        safeArea.right -
          menuViewSizes.bottomRight.width -
          scaledDoublePaddingMenuView
      ) {
        x = position.x + halfWidth;
        y =
          safeArea.bottom -
          scaledDoublePaddingMenuView -
          menuViewSizes.bottomRight.height;
      } else {
        x = position.x + halfWidth;
        y = safeArea.bottom - scaledPaddingMenuView;
      }
    }

    return {
      x: x,
      y: y,
    };
  };

  //only show the targets out of bound on the closests 180 degree
  // of the camera direction
  if (!(cameraAngle < -Math.PI / 2 && cameraAngle > Math.PI / 2)) {
    if (cameraAngle > Math.PI / 2) {
      if (targetAngle < -Math.PI / 2) {
        targetAngle = targetAngle + 2 * Math.PI;
      }
    } else if (cameraAngle < -Math.PI / 2) {
      if (targetAngle > Math.PI / 2) {
        targetAngle = targetAngle - 2 * Math.PI;
      }
    }
  }

  if (
    cameraAngle - Math.PI / 2 < targetAngle &&
    targetAngle < cameraAngle + Math.PI / 2
  ) {
    targetOutOfBoundPosition = getTargetOutOfBoundPosition();
    targetClassificationPosition = getTargetClassificationPosition();
  }

  return (
    <svg className={"streamTargetFar"}>
      {cameraAngle - Math.PI / 2 < targetAngle &&
        targetAngle < cameraAngle + Math.PI / 2 && (
          <>
            <StreamTargetOutOfBound
              id={id}
              position={{
                x: targetOutOfBoundPosition.x,
                y: targetOutOfBoundPosition.y,
              }}
              size={targetOutOfBoundSize / scale}
              color={color}
              vertical={vertical}
              left={targetAngle < cameraAngle}
              visibleTarget={visibleTarget}
              opacity={0.7}
            ></StreamTargetOutOfBound>
            <StreamTargetClassification
              id={id}
              name={name}
              position={{
                x: targetClassificationPosition.x,
                y: targetClassificationPosition.y,
              }}
              size={classificationOutOfBoundSize / scale}
              color={color}
            />
          </>
        )}
    </svg>
  );
}

export default StreamTargetFar;
