import { useState } from "react";
import "./App.css";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <div className="app">
      <h1>Rails Blog</h1>
      <p>A blog made with react and ruby on rails</p>
      <Posts />
    </div>
  );
}

export default App;
