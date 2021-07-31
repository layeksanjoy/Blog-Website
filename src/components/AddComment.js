import { Component } from "react";
import {IoMdArrowRoundBack} from 'react-icons/io'
import { Link } from "react-router-dom";
import CommentForm from '../components/CommentForm'

export default class AddComment extends Component{
  render(){
    const postID = this.props.match.params.id;
    return(
      <div>
        <Link to={`/comments/${postID}`}>
          <IoMdArrowRoundBack/>
        </Link>
        <CommentForm id={postID} />
      </div>
    )
  }
}