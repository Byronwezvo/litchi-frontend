import React from 'react';

import './header.css';
import NavBarBrand from '../navbar_brand/navbar_brand.component';
import NavBarItem from '../navbar_item/navbar_item.component';

class DefaultHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavBarBrand name="Litchi" />
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
            <NavBarItem name="Home" route="/" />
            <NavBarItem name="Features" route="/features" />
            <NavBarItem name="Pricing" route="/pricing" />
            <NavBarItem name="Login" route="/login" />
            <NavBarItem name="Signup" route="/signup" />
          </ul>
        </div>
      </nav>
    );
  }
}

export default DefaultHeader;
