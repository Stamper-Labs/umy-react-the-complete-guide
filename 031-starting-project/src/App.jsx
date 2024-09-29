import PostList from "./components/PostList";
import { useState } from "react";
import MainHeader from "./components/MainHeader";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  function showModalHandler() {
    setIsModalVisible(true);
  }

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isPosting={isModalVisible} onStopPosting={hideModalHandler} />
    </main>
  );
}

export default App;
