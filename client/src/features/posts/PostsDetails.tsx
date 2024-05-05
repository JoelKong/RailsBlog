import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  Link,
  NavigateFunction,
} from "react-router-dom";
import { API_URL } from "../../constants";
import styles from "../../styles/body.module.css";

export default function PostDetails(): JSX.Element {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const navigate: NavigateFunction = useNavigate();

  async function fetchCurrentPost() {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`);
      if (response.ok) {
        const json = await response.json();
        setPost(json);
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Delete Post
  async function deletePost() {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/");
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCurrentPost();
  }, [id]);

  if (loading)
    return (
      <div className={styles.loading}>
        <h2>Loading...</h2>
        <div className={styles.loader}></div>
      </div>
    );

  return (
    <section className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className={styles.post_actions}>
        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
      <Link to="/">Back to Posts</Link>
    </section>
  );
}
