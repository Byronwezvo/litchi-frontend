import React from 'react';

import NavBarBrand from '../navbar_brand/navbar_brand.component';

import './dashboard_header.css';

class DashboardHeader extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <NavBarBrand name="Litchi" />
        </nav>
      </div>
    );
  }
}

export default DashboardHeader;
