import { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { connect } from "react-redux";
import {GrAddCircle} from 'react-icons/gr'
import {FiEdit2,FiX} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import { BiUpArrowCircle, BiDownArrowCircle } from "react-icons/bi";

import {getComments,deleteComment,upVoteComment,downVoteComment} from "../actions/comments"

import "../CSS/comments.css"

class ShowComments extends Component {
  state = {
    Post :{},
    comments: []
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    if(this.props.st.Comments.length === 0)
      this.props.getComm(id)
  }

  handleDelete(id){
    this.props.delete(id)
  }
  upVote(id){
    this.props.VoteUp(id)
  }
  downVote(id){
    this.props.VoteDown(id)
  }

  render() {
    const{Posts,Comments} = this.props.st;
    const PostID = this.props.match.params.id;
    return (
      <div  key={Math.random()} className="main">
        <div key={Math.random()} >
          <Link to="/">
            <IconContext.Provider value={{ className: "main-back-button" }}>
              <FiX/>
            </IconContext.Provider>
          </Link>
        </div>
        {Posts.map((post) => (
          <div key={Math.random()} className="main-post">
            <div key={Math.random()}>{post.body}</div>
            <div key={Math.random()}>{post.title}</div>
            <div key={Math.random()}>{post.author}</div>
          </div>
        ))}
        {Comments.map((comment) => (
          <div key={Math.random()} className="main-comment">
            <div key={Math.random()} className="main-comment-body">
              <div key={Math.random()}>{comment.body}</div>
              <div key={Math.random()} className="main-comment-author">@{comment.author}</div>
            </div>
            <div key={Math.random()} className="main-buttons">
                <div className="main-button-left" key={Math.random()}>
                <IconContext.Provider value={{ className:"main-upvote" }}>
                    <BiUpArrowCircle key={Math.random() } 
                      onClick={event => this.upVote(comment.id)} />
                  </IconContext.Provider>
                  <div key={Math.random()} className="main-votescore">{comment.voteScore}</div>
                  <BiDownArrowCircle key={Math.random()}
                    onClick={event => this.downVote(comment.id)} size={20} className="main-downvote" />
                </div>                
                <div className="main-button-right" key={Math.random()}>
                  <Link to={`/editComment/${comment.id}`} >
                    <FiEdit2 key={Math.random()} size={20} className="main-edit"/>
                  </Link>
                  <AiOutlineDelete key={Math.random()} 
                      onClick={event => this.handleDelete(comment.id)} size={20} className="main-delete"/>
                </div>
              </div>
          </div>
        ))}
        <Link to={`/addComment/${PostID}`} >
            <GrAddCircle size={25} key={Math.random()}/>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  const id = ownProps.match.params.id;
  var st = {}
  st.Posts = state.Posts.filter(p => p.id === id)
  st.Comments =  state.Comments.filter(c => c.parentId === id)
  return {
    st
  };
}

function mapDispatchToProps(dispatch){
  return {
    getComm: (id) => dispatch(getComments(id)),
    delete: (id) => dispatch(deleteComment(id)),
    VoteUp: (id) => dispatch(upVoteComment(id)),
    VoteDown:(id) => dispatch(downVoteComment(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowComments);