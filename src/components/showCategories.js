import { Component } from "react";
import "../CSS/Categories.css";
export default class ShowCategories extends Component {
  render() {
    const { Categories } = this.props;
    if (Categories === undefined) {
      Categories = [];
    }
    return (
      <div>
        <ul className="main-category">
          {Categories.map((category, index) => (
            <div className="main-category-button-div" key={Math.random()}>
              <button className="main-category-button" key={Math.random()}>{category.name}</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
