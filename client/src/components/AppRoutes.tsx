import { Route, Routes } from "react-router-dom";
import Posts from "../features/posts/Posts";
import PostDetails from "../features/posts/PostsDetails";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostDetails />}></Route>
      <Route path="/new" element={<h1>New Post</h1>}></Route>
    </Routes>
  );
}
