import React from "react";
import Post from "./Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostChange(text);
  };

  return (
    <div className="my-posts-wrapper">
      <h2>My posts</h2>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        className="my-posts-textarea"
        rows={10}
        cols={80}
        value={props.newPostText}
      />
      <button className="my-posts-button" onClick={onAddPost}>
        Send
      </button>
      <div className="myposts-post">
        <Post users={props.users} />
      </div>
    </div>
  );
};

export default MyPosts;
