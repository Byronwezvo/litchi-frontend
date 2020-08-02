import React from 'react';
import { Link } from 'react-router-dom';
import './navbar_brand.css';

function NavBarBrand(props) {
  return (
    <Link className="navbar-brand" to="/">
      <div className="navbar-text">{props.name}</div>
    </Link>
  );
}

export default NavBarBrand;
