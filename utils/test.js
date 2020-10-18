import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/reducers";
import { middlewares } from "../src/store";

export const testStore = (initialState) => {
  const storeWithMiddleWare = applyMiddleware(...middlewares)(createStore);
  return storeWithMiddleWare(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
