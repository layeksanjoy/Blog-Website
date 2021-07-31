import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { GET_POSTS, receivePosts } from "../actions/posts";
import { GET_CATEGORIES, receiveCategories } from "../actions/index";
import { getPostsAPI, getCategoriesAPI ,getCommentsAPI } from "../API/Api";
import {GET_COMMENTS , receiveComments} from "../actions/comments"
// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* getCategoriesData(action) {
  try {
    const Categories = yield call(getCategoriesAPI);
    yield put(receiveCategories(Categories));
  } catch (error) {
    console.log(error);
  }
}
function* getPostsData(action) {
  try {
    const posts = yield call(getPostsAPI);
    yield put(receivePosts(posts));
  } catch (e) {
    console.log(e);
  }
}

function* getCommentsData(action){
  try {
    const Comments = yield call(getCommentsAPI,action.id);

    yield put(receiveComments(Comments));
  } catch (error) {
    console.log(error)
  }
}
// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield all([
    takeEvery(GET_POSTS, getPostsData),
    takeEvery(GET_CATEGORIES, getCategoriesData),
    takeEvery(GET_COMMENTS,getCommentsData)
  ]);
}
