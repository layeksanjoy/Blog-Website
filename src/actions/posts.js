export const GET_POSTS = "GET_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const POST_POSTS = "POST_POSTS";
export const GET_POSTS_ID = "GET_POSTS_ID";
export const PUT_POSTS_ID = "PUT_POSTS_ID";
export const DELETE_POSTS_ID = "DELETE_POSTS_ID";

export function getPosts() {
  return {
    type: GET_POSTS
  };
}

export function receivePosts(Posts) {
  //console.log("posts", Posts);
  return {
    type: RECEIVE_POSTS,
    Posts
  };
}
