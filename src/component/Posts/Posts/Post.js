import React from "react";
import PropTypes from "prop-types";
import "./Post.scss";

const Post = (props) => {
  return (
    <div data-test="post" className="post">
      <h5 data-test="post-title">{props.title}</h5>
      <p data-test="post-desc">{props.body}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
