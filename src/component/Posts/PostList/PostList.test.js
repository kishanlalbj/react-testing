import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../utils/test";
import PostList from "./PostList";
import Post from "../Posts/Post";

const setUp = (props = {}) => shallow(<PostList {...props}></PostList>);

const initialProps = {
  posts: [
    {
      title: "test",
      body: "test",
    },
  ],
};

describe("Post List", () => {
  describe("Check PropTypes", () => {
    test("should NOT throw warning", () => {
      const expectedProps = {
        posts: [
          {
            title: "test",
            body: "test",
          },
          {
            title: "test",
            body: "test",
          },
        ],
      };

      const propsError = checkProps(PostList, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("PostList", () => {
    test("should render PostList without error", () => {
      const wrapper = setUp(initialProps);
      const component = findByTestAttr(wrapper, "postlist");
      expect(component.length).toBe(1);
    });

    test("should render exact number of posts", () => {
      const wrapper = setUp({
        posts: [...initialProps.posts, { title: "test", body: "test" }],
      });
      const component = wrapper.find(Post);
      expect(component.length).toBe(2);
    });

    test("should render message if no posts are there", () => {
      const wrapper = setUp({ posts: [] });
      const component = findByTestAttr(wrapper, "postlist-message");
      expect(component.length).toBe(1);
    });
  });
});
