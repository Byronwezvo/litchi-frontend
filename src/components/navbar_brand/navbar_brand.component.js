import React from 'react';
import { Link } from 'react-router-dom';

function NavBarBrand(props) {
  return (
    <Link className="navbar-brand" to="/">
      {props.name}
    </Link>
  );
}

export default NavBarBrand;
