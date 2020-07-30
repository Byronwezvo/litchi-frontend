import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './header.css';
import '../navbar_item/navbar_item.component';
import NavBar_item from '../navbar_item/navbar_item.component';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          Litchi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <NavBar_item name="Home" route="/" />
            <NavBar_item name="Features" route="/features" />
            <NavBar_item name="Pricing" route="/pricing" />
            <NavBar_item name="Login" route="/login" />
            <NavBar_item name="Signup" route="/signup" />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
