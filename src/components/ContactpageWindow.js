import React from "react";
import { ImageContainer } from "./ImageContainer";
import { contactpageWindow } from "../preferences/preferences.js";

export class ContactpageWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: contactpageWindow.title,
      text: contactpageWindow.text,
      imagePosition: contactpageWindow.imagePosition,
    }
  }

  render() {
    return (
      <div>
        <ImageContainer title={this.state.title} text={this.state.text} position={this.state.imagePosition} />
      </div>
    );
  }
}