import { Route, Routes } from "react-router-dom";
import Posts from "../features/posts/Posts";
import PostDetails from "../features/posts/PostsDetails";
import PostForm from "../features/posts/PostForm";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostDetails />}></Route>
      <Route path="/new" element={<PostForm />}></Route>
    </Routes>
  );
}
