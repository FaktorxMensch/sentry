const getWebSocketURL = (IP = "127.0.0.1") => {
    const port = 9002;
    const url = "/websocket/app";

    return "ws://" + IP + ":" + port + url;
};

export default getWebSocketURL;
