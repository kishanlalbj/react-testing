import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils/test";
import Button from "./Button";

const setUp = (props = {}) => shallow(<Button {...props} />);

describe("Button", () => {
  describe("Check PropTypes", () => {
    test("should NOT throw warning", () => {
      const expectedProps = {
        text: "Test Button",
        emitEvent: () => {},
      };

      const propsErr = checkProps(Button, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Render Button", () => {
    let wrapper;
    let mockFn;
    beforeEach(() => {
      mockFn = jest.fn();
      const initialProps = {
        text: "test",
        emitEvent: mockFn,
      };
      wrapper = setUp(initialProps);
    });

    test("should render a button", () => {
      const button = findByTestAttr(wrapper, "button");
      expect(button.length).toBe(1);
    });

    test("should emit callback on click", () => {
      const button = findByTestAttr(wrapper, "button");
      button.simulate("click");
      const callback = mockFn.mock.calls;
      expect(callback.length).toBe(1);
    });
  });
});
