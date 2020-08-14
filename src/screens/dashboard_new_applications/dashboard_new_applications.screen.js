import React from 'react';

import DashboardHeader from '../../components/dashboard_header/dashboard_header.component';
import DashboardSideBar from '../../components/dashboard_sidebar/dashboard_sidebar.component';

class DashboardNewApplication extends React.Component {
  render() {
    return (
      <div>
        <DashboardHeader />
        <div className="dashboard-page-warper">
          <div className="row">
            <DashboardSideBar />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardNewApplication;
