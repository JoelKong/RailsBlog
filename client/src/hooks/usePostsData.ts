import { useState, useEffect } from "react";
import { fetchPosts, searchPosts } from "../services/postService";

function usePostsData(searchTerm: any) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadPosts() {
    try {
      let data;
      if (searchTerm) {
        data = await searchPosts(searchTerm);
      } else {
        data = await fetchPosts();
      }
      setPosts(data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, [searchTerm]);
}

export default usePostsData;
