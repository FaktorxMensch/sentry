import { createStore, applyMiddleware } from "redux";

import communication from "./Middleware/communication";
import commands from "./Middleware/commands";
import logger from "./Middleware/logger";
import cache from "./Middleware/cache";
import rootReducer from "./Reducers/index";

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(communication, commands, cache, logger)
);
