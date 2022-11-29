import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
