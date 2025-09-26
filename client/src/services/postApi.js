import { fetchWithAuth } from "./api";

export async function getAllPosts() {
  return fetchWithAuth("/api/blogs");
}

export async function getPost(id) {
  return fetchWithAuth(`/api/blogs/${id}`);
}

export async function createPost(postData) {
  return fetchWithAuth("/api/blogs", {
    method: "POST",
    body: JSON.stringify(postData),
  });
}

export async function updatePost(id, postData) {
  return fetchWithAuth(`/api/blogs/${id}`, {
    method: "PUT",
    body: JSON.stringify(postData),
  });
}

export async function deletePost(id) {
  return fetchWithAuth(`/api/blogs/${id}`, {
    method: "DELETE",
  });
}

export async function addComment(postId, comment) {
  // Server exposes comments under /api/comments and expects blogId in the body
  return fetchWithAuth(`/api/comments`, {
    method: "POST",
    body: JSON.stringify({ blogId: postId, ...comment }),
  });
}

export async function getComments(postId) {
  return fetchWithAuth(`/api/comments?blogId=${postId}`);
}

export async function deleteComment(postId, commentId) {
  return fetchWithAuth(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
}
