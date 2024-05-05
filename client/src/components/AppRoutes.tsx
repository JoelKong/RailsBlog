import { Route, Routes } from "react-router-dom";
import Posts from "../features/posts/Posts";
import PostDetails from "../features/posts/PostsDetails";
import PostForm from "../features/posts/PostForm";
import PostEditForm from "../features/posts/PostEditForm";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostDetails />}></Route>
      <Route path="/posts/:id/edit" element={<PostEditForm />}></Route>
      <Route path="/new" element={<PostForm />}></Route>
    </Routes>
  );
}
