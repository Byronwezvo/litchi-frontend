import React from 'react';
import { Link } from 'react-router-dom';

function NavBarBrand(props) {
  return (
    <Link className="navbar-brand" to="/">
      <div className="h4">{props.name}</div>
    </Link>
  );
}

export default NavBarBrand;
