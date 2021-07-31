export const GET_CATEGORIES = "GET_CATEGORIES";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const GET_CATEGORIES_POSTS = "GET_CATEGORIES_POSTS";

export function getCategories() {
  return {
    type: GET_CATEGORIES
  };
}

export function receiveCategories(Categories) {
  return {
    type: RECEIVE_CATEGORIES,
    Categories
  };
}
