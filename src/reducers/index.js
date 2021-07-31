import { combineReducers } from "redux";
import { RECEIVE_POSTS } from "../actions/posts";
import { RECEIVE_CATEGORIES } from "../actions/index";

import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT
} from "../actions/comments"

function Categories(state = [], action) {
  //console.log("Categories",action)
  switch (action.type) {
    case RECEIVE_CATEGORIES:{
      return (action.Categories.Categories);
    }
    default:
      return state;
  }
}
function Posts(state = [], action) {
  //console.log("Posts",action)
  switch (action.type) {
    case RECEIVE_POSTS:
      return (action.Posts)
    default:
      return state;
  }
}

function Comments(state = [],action){
  switch(action.type){
    case RECEIVE_COMMENTS:
      return (action.Comments);
   
    case ADD_COMMENT:
      var st = [...state]
      st.push(action.Comment)
      console.log(st)
      console.log("Reducer",st)
      return st
   
    case EDIT_COMMENT:
      var newState = state.filter(st => st.id !== action.Comment.id);
      newState.push(action.Comment);
      return newState;

    case DELETE_COMMENT:
        newState = state.filter(st => st.id !== action.id);
        return newState;
    
    case UP_VOTE_COMMENT:
        st = [...state]
        for(var c in st){
          if(st[c].id === action.id){
            st[c].voteScore += 1;
            break;
          }
        }
      return st;
      case DOWN_VOTE_COMMENT:
          st = [...state]
          for(c in st){
            if(st[c].id === action.id){
              st[c].voteScore -= 1;
              break;
            }
          }
        return st;
    
    default:
      return state;
  }
}
export default combineReducers({
  Posts,
  Categories,
  Comments
});
