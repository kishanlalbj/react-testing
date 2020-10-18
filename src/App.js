import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import Header from "./component/Header/Header";
import Headline from "./component/Headline/Headline";
import PostList from "./component/Posts/PostList/PostList";
import Button from "./component/Button/Button";
import { fetchPosts } from "./actions";

function App(props) {
  const getPosts = () => props.fetchPosts();

  return (
    <div>
      <Header></Header>

      <main>
        <Headline header={"post"} desc="click the button to render posts" />
        <Button text="Get Posts" emitEvent={getPosts}></Button>
        <PostList posts={props.posts}></PostList>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);
