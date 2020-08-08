import React from 'react';
import './dashboard_sidebar.css';
import SidebarSectionName from '../sidebar_section_name/sidebar_section_name';

function DashboardSidedrawer() {
  return (
    <div className="col-sm-2 side-drawer">
      <div>
        <SidebarSectionName name="Home" />
      </div>
    </div>
  );
}

export default DashboardSidedrawer;
