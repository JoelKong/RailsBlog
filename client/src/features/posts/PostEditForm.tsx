import { useState, useEffect } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../../services/postService";
import styles from "../../styles/body.module.css";

export default function PostEditForm(): JSX.Element {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const navigate: NavigateFunction = useNavigate();

  // Fetch current post by id
  async function fetchCurrentPost() {
    try {
      const json = await fetchPost(id);
      setPost(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Handle Submit to update form
  async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", post.title);
    formData.append("post[body]", post.body);
    formData.append("post[image]", post.image);

    // const updatedPost = {
    //   title: post.title,
    //   body: post.body,
    // };
    try {
      const response = await updatePost(id, formData);
      navigate(`/posts/${response.id}`);
    } catch (error) {
      console.error(error);
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
          <label htmlFor="image">Image:</label>
          <input
            className={styles.post_form_input_box}
            id="image"
            type="file"
            accept="image/*"
            onChange={(e: any) =>
              setPost({ ...post, image: e.target.files[0] })
            }
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
