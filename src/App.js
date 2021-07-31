import React from "react";
import { Route, Link, Router } from "react-router-dom";
import { connect } from "react-redux";
import { GrAddCircle } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";

import "./CSS/index.css";
import ShowPosts from "./components/showPosts";
import ShowComment from "./components/showComments";
import ShowCategories from "./components/showCategories";
import AddComment from "./components/AddComment"
import { getPosts } from "../src/actions/posts";
import { getCategories } from "../src/actions/index";
import EditComment from "./components/EditComment"

class App extends React.Component {
  state = {
    Categories: [],
    Posts: []
  };
  componentDidMount() {
    this.props.Post();
    this.props.Categories();
    this.setState({
      Categories: this.props.state.Categories,
      Posts: this.props.state.Posts
    });
  }
  onClickHandle = (event) => {
    event.preventDefault();
    event.persist();
    //console.log(event)
    //console.log(this.state.data)
  };

  onAddPosts = () => {};
  render() {
    const { Posts, Categories } = this.props.state;
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <ShowCategories Categories={Categories}></ShowCategories>
              <ShowPosts Posts={Posts}></ShowPosts>
              <Link
                to="/addPost"
                className="icon-btn"
                onClick={this.onAddPosts}
              >
                <div className="container-button-add-div">
                  <GrAddCircle className="container-button-add" size={30} />
                </div>
              </Link>
            </div>
          )}
        />
        <Route
          exact
          path="/addPost"
          render={() => (
            <div>
              <Link to="/" className="icon-btn">
                <div className="container-button-div">
                  <BiArrowBack className="container-button" size={30} />
                </div>
              </Link>
              <h1>Add Posts Form</h1>
            </div>
          )}
        />
        <Route path="/comments/:id" component={ShowComment} />
        <Route path="/addComment/:id" component={AddComment}/>
        <Route path="/editComment/:id" component={EditComment}/>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    Post: () => {
      dispatch(getPosts());
    },
    Categories: () => {
      dispatch(getCategories());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
