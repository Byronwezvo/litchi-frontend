import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar_link.css';

function SidebarLink({ name }) {
  return (
    <div className="side-bar-link ">
      <Link className="nav-link side_bar-link">
        <div className="side_bar-link-text">
          <span className="sidebar-link-icon">
            <i class="icofont-ui-home"></i>
          </span>
          {name}
        </div>
      </Link>
    </div>
  );
}

export default SidebarLink;
