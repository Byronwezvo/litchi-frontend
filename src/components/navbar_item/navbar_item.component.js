import React from 'react';
import { Link } from 'react-router-dom';

function NavBarItem(props) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.route}>
        {props.name}
      </Link>
    </li>
  );
}

export default NavBarItem;
