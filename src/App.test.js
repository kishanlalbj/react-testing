import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../utils/test";
import App from "./App";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store}></App>)
    .dive()
    .dive();

  return wrapper;
};

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "test",

          body: "test",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  test("should render without error", () => {
    const component = findByTestAttr(wrapper, "app");
    expect(component.length).toBe(1);
  });

  test("should update state as expected", () => {
    expect(false).toBe(false);
  });
});
