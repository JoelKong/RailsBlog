import { API_URL } from "../../constants";
import { useState, useEffect } from "react";

export default function Posts(): JSX.Element {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<String>("");

  // Fetch posts from backend api in rails
  async function loadPosts() {
    try {
      const response = await fetch(`${API_URL}/posts`);
      if (response.ok) {
        const json = await response.json();
        setPosts(json);
      } else {
        throw response;
      }
    } catch (error) {
      setError("An error occured. Please reload the page");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      {posts.map((post: any) => {
        return (
          <div key={post.id} className="post-container">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
