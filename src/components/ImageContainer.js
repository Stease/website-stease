import React from "react";

const height = 325;

const imgContainerStyle = {
  marginLeft: "10%",
  marginTop: "10%",
  marginRight: "10%",
  marginBottom: "10%",
  height: height,
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

const imgStyle = {
  height: height,
  width: "500px",
};

const floatLeft = {
  float: "left",
}

const floatRight = {
  float: "right",
}

const LeftPadding = {
  height: height,
  paddingTop: "2%",
  paddingRight: "5%",
  paddingLeft: "50%",
}

const RightPadding = {
  height: height,
  paddingTop: "2%",
  paddingRight: "50%",
  paddingLeft: "6%",
}

export class ImageContainer extends React.Component {
  render() {
    const text = this.props.text.split("\n");
    return (
      <div className="imageContainer" style={imgContainerStyle}>
        {
          // eslint-disable-next-line
        } <img style={imgStyle, this.props.position === "left" ? floatLeft : floatRight} src={this.props.src} alt={this.props.alt} />
        <div style={this.props.position === "left" ? LeftPadding : RightPadding}>
          <h1>{this.props.title}</h1>
          {text.map((line, i) =>
            <p>{line}<br /></p>
          )}
        </div>
      </div>
    );
  }
}