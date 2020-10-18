import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/index";

export const middlewares = [reduxThunk];

export const storeWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = storeWithMiddleware(rootReducer);
