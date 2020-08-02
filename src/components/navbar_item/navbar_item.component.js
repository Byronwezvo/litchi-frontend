import React from 'react';
import { Link } from 'react-router-dom';
import './navbar_item.css';

function NavBarItem(props) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.route}>
        <div className="navbar-item-text">{props.name}</div>
      </Link>
    </li>
  );
}

export default NavBarItem;
