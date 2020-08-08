import React from 'react';

import SidebarSectionName from '../sidebar_section_name/sidebar_section_name';
import SidebarLink from '../sidebar_link/sidebar_link.component';

import './dashboard_sidebar.css';

function DashboardSidedrawer() {
  return (
    <div className="col-sm-2 side-drawer">
      <div>
        <SidebarSectionName name="Dashboard" />
        <SidebarLink name="Home" icon="icofont-ui-home" active="active" />

        <div class="section-divider"></div>

        <SidebarSectionName name="Clients" />
        <SidebarLink name="Client List" icon="icofont-ui-user" />

        <div class="section-divider"></div>

        <SidebarSectionName name="Loan Applications" />
        <SidebarLink name="Applications" icon="icofont-paper" />
        <SidebarLink name="New Applications" icon="icofont-edit-alt" />
        <SidebarLink name="Closed Applications" icon="icofont-delete-alt" />

        <div class="section-divider"></div>

        <SidebarSectionName name="Loan Status" />
        <SidebarLink name="Overdue" icon="icofont-exclamation-circle" />
        <SidebarLink name="Fully-paid" icon="icofont-tick-boxed" />
      </div>
    </div>
  );
}

export default DashboardSidedrawer;
