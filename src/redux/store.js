import { applyMiddleware, createStore } from "redux";
import profileReducer from "./profile/profileReducer";

import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(profileReducer,
    composeWithDevTools(applyMiddleware(logger)))

export default store ;