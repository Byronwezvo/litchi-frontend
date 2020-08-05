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

    this.checkStatus();
  }

  constructor(props) {
    super(props);

    this.routeToLogin = this.routeToLogin.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }

  /**
   * # Check Status
   *
   * This function is run every 5 seconds to see if the user authenticated or
   * not.
   *
   * @author Byron Wezvo
   */
  checkStatus() {
    // -> This code is repetitive
    setInterval(() => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({ company_email: 'test@test.com' });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://localhost:3300/dashboard/authstatus', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          if (result === 'true') {
            console.log('user is online');
          } else {
            window.location = '/login';
          }
        })
        .catch((error) => console.log('error', error));
    }, 3000);
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
