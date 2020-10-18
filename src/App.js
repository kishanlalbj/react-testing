import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.scss";
import Header from "./component/Header/Header";
import Headline from "./component/Headline/Headline";
import PostList from "./component/Posts/PostList/PostList";
import Button from "./component/Button/Button";
import { fetchPosts } from "./actions";

const initialState = false;

function App(props) {
  const [hideButton, setHideButton] = useState(initialState);
  const getPosts = () => {
    props.fetchPosts();
    toggleBtn();
  };

  const toggleBtn = () => setHideButton(!hideButton);

  return (
    <div data-test="app">
      <Header></Header>

      <main>
        <Headline header={"post"} desc="click the button to render posts" />
        {!hideButton ? (
          <Button text="Get Posts" emitEvent={getPosts}></Button>
        ) : null}
        <PostList posts={props.posts}></PostList>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);
