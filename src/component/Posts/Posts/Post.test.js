import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../utils/test";
import Post from "./Post";

const setUp = (props = {}) => shallow(<Post {...props} />);

describe("Post", () => {
  describe("Check PropTypes", () => {
    test("should NOT throw warning", () => {
      const expectedProps = {
        title: "title test",
        body: "some desc",
      };

      const propErr = checkProps(Post, expectedProps);

      expect(propErr).toBeUndefined();
    });
  });

  describe("Component renders", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ title: "test", body: "test" });
    });

    test("should render without error", () => {
      const component = findByTestAttr(wrapper, "post");
      expect(component.length).toBe(1);
    });

    test("should render a post title", () => {
      const component = findByTestAttr(wrapper, "post-title");
      expect(component.length).toBe(1);
    });

    test("should render post desc", () => {
      const component = findByTestAttr(wrapper, "post-desc");
      expect(component.length).toBe(1);
    });
  });
});
