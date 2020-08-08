import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar_link.css';

/**
 * # Side Bar Link
 *
 * this is for the sidebar link
 *
 * @param {*} name - input name for the custom component
 *
 * @param {*} icon - input icon for the custom component
 *
 * @author Byron Wezvo
 */
function SidebarLink({ name, icon, active }) {
  return (
    <div className={active}>
      <div className="side-bar-link">
        <Link className="nav-link side_bar-link">
          <div className="side_bar-link-text">
            <span className="sidebar-link-icon">
              <i class={icon}></i>
            </span>
            {name}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SidebarLink;
