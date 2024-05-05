import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../constants";
import styles from "../../styles/body.module.css";

export default function PostDetails(): JSX.Element {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

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
      <Link to="/">Back to Posts</Link>
    </section>
  );
}
