import React from "react";
import { Route, Link } from "react-router-dom";
import "../CSS/Posts.css";
import { FaRegComment } from "react-icons/fa";
import { BiUpArrowCircle, BiDownArrowCircle } from "react-icons/bi";
import ShowComments from "./showComments";

export default class ShowPosts extends React.Component {
  render() {
    var { Posts } = this.props;
    if (Posts[0] === undefined) {
      Posts = [];
    }
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div key={Math.random()}>
              {Posts.map((post) => (
                <div className="showpost-main" key={Math.random()}>
                  <div key={Math.random()}>{post.title}</div>
                  <div key={Math.random()}>{post.body}</div>
                  <div key={Math.random()}>{post.author}</div>
                  <div className="showpost-buttons" key={Math.random()}>
                    <BiUpArrowCircle
                      className="showpost-main-up-arrow"
                      size={25}
                      key={Math.random()}
                    />
                    <BiDownArrowCircle
                      className="showpost-main-down-arrow"
                      size={25}
                      key={Math.random()}
                    />
                    <div
                      className="showpost-comment-button"
                      key={Math.random()}
                    >
                      <Link to={`/comments/${post.id}`} key={Math.random()}>
                        <FaRegComment
                          className="showpost-main-comment"
                          size={25}
                          key={Math.random()}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}
