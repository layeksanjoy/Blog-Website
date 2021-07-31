export const GET_COMMENTS = "GET_COMMENTS";
export const RECEIVE_COMMENTS  = "RECEIVE_COMMENTS"
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT ='EDIT_COMMENT'
export const DELETE_COMMENT = "DELETE_COMMENT"
export const UP_VOTE_COMMENT = "UP_VOTE_COMMENT"
export const DOWN_VOTE_COMMENT ="DOWN_VOTE_COMMENT"

export function getComments(id) {
  return {
    type: GET_COMMENTS,
    id
  };
}

export function receiveComments(Comments) {
  return{
    type:RECEIVE_COMMENTS,
    Comments
  }
}

export function addComment(Comment){
  return{
    type:ADD_COMMENT,
    Comment
  }
}

export function editComment(Comment){
  return{
    type:EDIT_COMMENT,
    Comment
  }
}

export function deleteComment(id){
    return{
      type:DELETE_COMMENT,
      id
    }
}

export function upVoteComment(id){
  return {
    type:UP_VOTE_COMMENT,
    id
  }
}

export function downVoteComment(id){
  return {
    type:DOWN_VOTE_COMMENT,
    id
  }
}