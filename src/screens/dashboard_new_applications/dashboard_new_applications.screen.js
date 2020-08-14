import React from 'react';

import DashboardHeader from '../../components/dashboard_header/dashboard_header.component';
import DashboardSideBar from '../../components/dashboard_sidebar/dashboard_sidebar.component';
import NewApplicationView from '../../dashboard_views/new_application_view/new_application.view';

class DashboardNewApplication extends React.Component {
  render() {
    return (
      <div>
        <DashboardHeader />
        <div className="dashboard-page-warper">
          <div className="row">
            <DashboardSideBar />
            <NewApplicationView />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardNewApplication;
