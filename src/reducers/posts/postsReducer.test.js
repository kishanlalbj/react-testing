import { types } from "../../actions/types";
import postReducer from "./postsReducer";

describe("Posts reducer", () => {
  test("should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  test("should return new state for type", () => {
    const posts = [{ title: "test1" }, { title: "test2" }, { title: "test3" }];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
