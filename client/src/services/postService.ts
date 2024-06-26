import { API_URL, SEARCH_API_URL } from "../constants";

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

// POST/Create Post
async function createPost(postData: any) {
  const response = await fetch(`${API_URL}/posts/`, {
    method: "POST",
    body: postData,
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}

// PUT/Edit Post
async function updatePost(id: any, postData: any) {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    body: postData,
  });

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

async function searchPosts(query: any) {
  const response = await fetch(`${SEARCH_API_URL}/posts/?q=${query}`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}

export {
  createPost,
  updatePost,
  fetchPosts,
  fetchPost,
  deletePost,
  searchPosts,
};
