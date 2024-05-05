import { useState, useEffect } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constants";
import styles from "../../styles/body.module.css";

export default function PostEditForm(): JSX.Element {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const navigate: NavigateFunction = useNavigate();

  // Fetch current post by id
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

  // Handle Submit
  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: post.title, body: post.body }),
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        navigate(`/posts/${id}`);
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
    <section className={styles.post_form}>
      <h2>Edit Post</h2>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className={styles.post_form2}
      >
        <div className={styles.post_form_input}>
          <label htmlFor="post-title">Title:</label>
          <input
            className={styles.post_form_input_box}
            id="post-title"
            type="text"
            value={post.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPost({ ...post, title: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.post_form_input}>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            className={styles.post_form_input_box}
            id="bodyInput"
            value={post.body}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setPost({ ...post, body: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.post_form_button}>
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}