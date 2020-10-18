import moxios from "moxios";
import { testStore } from "../../utils/test";
import { fetchPosts } from "../actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("should update store correctly", () => {
    const expectedState = [
      {
        title: "test",
        body: "test",
      },
      {
        title: "test",
        body: "test",
      },
      {
        title: "test",
        body: "test",
      },
    ];

    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toEqual(expectedState);
    });
  });
});
