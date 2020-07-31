import React from 'react';
import { Link } from 'react-router-dom';

function NavBarItem(props) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.route}>
        <div className="h6">{props.name}</div>
      </Link>
    </li>
  );
}

export default NavBarItem;
