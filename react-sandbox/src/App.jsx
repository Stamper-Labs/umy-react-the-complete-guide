import NewPost from "./NewPost";

/**
 * The <App> component renders the <Post> component twice,
 * using custom <Post> component's attributes to send data.
 * @returns {JSX.Element} a <main> element
 */
function App() {
  return (
    <main>
      <NewPost />
    </main>
  );
}

export default App;
