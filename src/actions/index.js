import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  try {
    let res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    dispatch({
      type: types.GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
