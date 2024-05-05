import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";
import styles from "../../styles/body.module.css";

export default function PostForm(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  // Submitting of post data
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const postData = { title, body };

    try {
      const response = await createPost(postData);
      navigate(`/posts/${response.id}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className={styles.post_form}>
      <h2>Create New Post</h2>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className={styles.post_form2}
      >
        <div className={styles.post_form_input}>
          <label htmlFor="titleInput">Title:</label>
          <input
            className={styles.post_form_input_box}
            id="titleInput"
            type="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            required
          />
        </div>
        <div className={styles.post_form_input}>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            className={styles.post_form_input_box}
            id="bodyInput"
            value={body}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setBody(e.target.value)
            }
            required
          />
        </div>
        <div className={styles.post_form_button}>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </section>
  );
}
