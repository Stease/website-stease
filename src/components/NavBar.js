import React from 'react';
import { navbar } from '../preferences/preferences.js';
// eslint-disable-next-line
import styles from "../styling/navbar.css";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: navbar.companyName,
      navbarItems: navbar.navbarItems,
      navbarItemsIcons: navbar.navbarItemsIcons,
      navbarLinks: navbar.navbarLinks,
    };
  }

  render() {
    return (
      <ul className="ul">
        <li className="liLeft" key={0}><a className="aBold" href="?page=home">{this.state.companyName}</a></li>
        {this.state.navbarItems.map((item, i) =>
          <li className="liRight" key={i + 1}><a className="a" href={this.state.navbarLinks[i]}>{this.state.navbarItemsIcons[i]} {item}</a></li>
        )}
      </ul>
    );
  }
}