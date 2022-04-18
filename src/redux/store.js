import { applyMiddleware, createStore ,combineReducers } from "redux";

import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import profileReducer from "./profile/profileReducer";
import parameterReducer from "./parameter/parameterReducer";

const rootReducer = combineReducers({
    profile : profileReducer,
    parameter : parameterReducer,
})

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger)))

export default store ;