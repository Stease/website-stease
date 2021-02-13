import React from "react";
// eslint-disable-next-line
import styling from "../styling/imagecontainer.css"

export class ImageContainer extends React.Component {
  render() {
    const text = this.props.text.split("\n");
    let className = "img ";
    if (this.props.position === "left") {
      className = className + "floatLeft"
    } else {
      className = className + "floatRight"
    }
    return (
      <div className="imageContainer">
        <img className={className} src={this.props.src} alt={this.props.alt} />
        <div className={this.props.position === "left" ? "leftPadding" : "rightPadding"}>
          <h1 className="h1">{this.props.title}</h1>
          {text.map((line, i) =>
            <p className="p">{line}<br /></p>
          )}
        </div>
      </div>
    );
  }
}