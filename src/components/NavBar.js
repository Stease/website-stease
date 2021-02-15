import React from 'react';
import { navbar } from '../preferences/preferences.js';
// eslint-disable-next-line
import styles from "../styling/navbar.css";

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

  handleClickLogo() {
    window.location.replace("/?page=home");
  }

  render() {
    return (
      <ul className="ul">
        <li className="liLeft" key={0}><button className="logoButton" onClick={this.handleClickLogo}><img className="logo" src={this.state.companyLogo} alt="logo" /></button></li>
        {this.state.navbarItems.map((item, i) =>
          <li className="liRight" key={i + 1}><a className="a" href={this.state.navbarLinks[i]}>{this.state.navbarItemsIcons[i]} {item}</a></li>
        )}
      </ul>
    );
  }
}