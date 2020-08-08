import React from 'react';

import SidebarSectionName from '../sidebar_section_name/sidebar_section_name';
import SidebarLink from '../sidebar_link/sidebar_link.component';

import './dashboard_sidebar.css';

function DashboardSidedrawer() {
  return (
    <div className="col-sm-2 side-drawer">
      <div>
        <SidebarSectionName name="Dashboard" />
        <SidebarLink icon="icofont-ui-home" name="Home" />

        <div class="section-divider"></div>

        <SidebarSectionName name="Loan Applications" />
        <SidebarLink name="Home" />
        <SidebarLink name="Home" />
        <SidebarLink name="Home" />

        <div class="section-divider"></div>
      </div>
    </div>
  );
}

export default DashboardSidedrawer;
