import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="german" body="reactjs is awesome" />
      <Post author="valentina " body="reactjs is amazing" />
    </ul>
  );
}

export default PostList;
