import React from 'react';
import { navbar } from '../preferences/preferences.js';

const ulStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  backgroundColor: "white"
}

const liStyle = {
  float: "right",
}

const liLeftStyle = {
  float: "left",
}

const aStyle = {
  display: "block",
  color: "black",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  fontSize: "1.5em"
}

const aBoldStyle = {
  display: "block",
  color: "black",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  fontSize: "1.7em",
  fontWeight: "800"
}

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: navbar.companyName,
      navbarItems: navbar.navbarItems,
      navbarLinks: navbar.navbarLinks,
    };
  }

  render() {
    return (
      <ul style={ulStyle}>
        <li style={liLeftStyle} key={0}><a style={aBoldStyle} href="home">{this.state.companyName}</a></li>
        {this.state.navbarItems.map((item, i) =>
          <li style={liStyle} key={i + 1}><a style={aStyle} href={this.state.navbarLinks[i]}>{item}</a></li>
        )}
      </ul>
    );
  }
}