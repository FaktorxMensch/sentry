import "../../Assets/css/Popups/requestLoader.css";
import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

function RequestLoader() {
  const request = useSelector((state) => state.socket.request);

  return (
    <>
      {request && request.loading && (
        <div className="requestLoader">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default RequestLoader;
