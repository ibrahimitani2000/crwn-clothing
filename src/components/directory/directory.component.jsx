import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        { title: "hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png", id: 1 },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
        },
        {
          title: "men",
          imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
          />
        ))}
      </div>
    );
  }
}
export default Directory;
