import React from "react";
import PropTypes from "prop-types";
import Post from "../Posts/Post";
import "./PostList.scss";

const PostList = (props) => {
  const renderPosts = () => {
    if (props.posts.length) {
      return props.posts.map((post, index) => (
        <Post key={index} title={post.title} body={post.body}></Post>
      ));
    } else {
      return <p data-test="postlist-message">No posts found</p>;
    }
  };
  return (
    <div data-test="postlist" className="postlist">
      {renderPosts()}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};

export default PostList;
