const getUpdateSocketURL = (IP='127.0.0.1') => {
  const port = 8080;
  const url = "/v1/update-status";

  return "ws://" + IP + ":" + port + url;
};

export default getUpdateSocketURL;
