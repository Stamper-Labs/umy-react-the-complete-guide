import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

function PostsList() {
  const posts = useLoaderData();
  return (
    <>
      {
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      }
      {posts.length === 0 && <h1>there are no posts</h1>}
    </>
  );
}

export default PostsList;
