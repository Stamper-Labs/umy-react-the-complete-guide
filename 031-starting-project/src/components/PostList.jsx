import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal.jsx";

function PostList({ isPosting, onStopPosting }) {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  let modalComponent;

  if (isPosting) {
    modalComponent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onAuthorChange={changeAuthorHandler}
          onBodyChange={changeBodyHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalComponent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Valentina" body="React is cool" />
      </ul>
    </>
  );
}

export default PostList;
