import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/index";

const middlewares = [reduxThunk];

const soreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = soreWithMiddleware(rootReducer);

export default store;
