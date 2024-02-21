import "./../../Assets/css/Stream/streamLowLightOverlay.css";

const StreamLowLightOverlay = ({ style }) => {
  const videoStyle = {
    height: style.height,
    width: style.width,
    marginLeft: style.marginLeft,
    marginTop: style.marginTop,
  };

  return (
    <svg className="streamLowLightOverlay" style={videoStyle}>
      <rect x={0} y={0} style={videoStyle}></rect>
    </svg>
  );
};

export default StreamLowLightOverlay;
