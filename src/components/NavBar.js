import React from 'react';
import { navbar } from '../preferences/preferences.js';
// eslint-disable-next-line
import styles from "../styling/navbar.css";
import logo from "../img/logo.svg";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyLogo: navbar.companyLogo,
      navbarItems: navbar.navbarItems,
      navbarItemsIcons: navbar.navbarItemsIcons,
      navbarLinks: navbar.navbarLinks,
    };
  }

  render() {
    return (
      <ul className="ul">
        <li className="liLeft" key={0}><img className="logo" src={logo} alt="logo" /></li>
        {this.state.navbarItems.map((item, i) =>
          <li className="liRight" key={i + 1}><a className="a" href={this.state.navbarLinks[i]}>{this.state.navbarItemsIcons[i]} {item}</a></li>
        )}
      </ul>
    );
  }
}