import React from 'react';
import { toast } from 'react-toastify';

import DashboardHeader from '../../components/dashboard_header/dashboard_header.component';

class Dashboard extends React.Component {
  componentDidMount() {
    // -> Try find data stored in Session storage
    const payload = sessionStorage.getItem('payload');

    // -> If null which means user in not authenticated do this
    if (payload === null) {
      // -> route user to login screen
      this.routeToLogin();
    } else {
      // -> parse json string into json object
      const prettyPayload = JSON.parse(payload);

      // -> generate a hello notification from company name
      toast.success(`✅ Hello, ${prettyPayload.company_name}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.log(prettyPayload.company_name);
    }
  }

  constructor(props) {
    super(props);

    this.routeToLogin = this.routeToLogin.bind(this);
  }

  /**
   * # Route user to log in
   *
   * This function is called when a user automatically tries to access
   * dashboard with no login
   *
   * @author Byron Wezvo
   */
  routeToLogin() {
    window.location = '/login';
  }

  render() {
    return (
      <div>
        <DashboardHeader />

        <div className="container page-wrapper">
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
