import { fetchPosts, deletePost } from "../../services/postService";
import { useState, useEffect } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import styles from "../../styles/body.module.css";

export default function Posts(): JSX.Element {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>("");
  const navigate: NavigateFunction = useNavigate();

  // Fetch posts from backend api in rails
  async function loadPosts() {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  // Delete Post
  async function deleteCurrentPost(id: number) {
    try {
      await deletePost(id);
      setPosts(posts.filter((post: any) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  if (loading)
    return (
      <div className={styles.loading}>
        <h2>Loading...</h2>
        <div className={styles.loader}></div>
      </div>
    );

  return (
    <div>
      {posts.map((post: any) => {
        return (
          <div key={post.id} className={styles.post}>
            <h2>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.body}</p>
            <div className={styles.post_actions}>
              <button onClick={() => navigate(`/posts/${post.id}/edit`)}>
                Edit
              </button>
              <button onClick={() => deleteCurrentPost(post.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
