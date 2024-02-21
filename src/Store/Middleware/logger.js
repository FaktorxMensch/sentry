const logger = () => (next) => (action) => {
    // if action is "SET_DEVELOPER_MODE", then set payload to true
    if (action.type === "SET_DEVELOPER_MODE") {
        action.payload = true;
    }
    let result = next(action);
    console.log(":LOGGER MIDDLEWARE: Dispatching ", action);
    return result;
};

export default logger;
