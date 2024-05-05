import { API_URL } from "../constants";

// GET posts
async function fetchPosts(): Promise<JSON> {
  const response = await fetch(`${API_URL}/posts`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}

// GET posts/1
async function fetchPost(id: any): Promise<JSON> {
  const response = await fetch(`${API_URL}/posts/${id}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}

// DELETE post
async function deletePost(id: number) {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export { fetchPosts, fetchPost, deletePost };
