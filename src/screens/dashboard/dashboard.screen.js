import React from 'react';
import { toast } from 'react-toastify';

import DashboardHeader from '../../components/dashboard_header/dashboard_header.component';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.routeToLogin = this.routeToLogin.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.savePayloadToState = this.savePayloadToState.bind(this);

    /**
     * # State
     *
     * The app's entire state
     *
     * @author Byron Wezvo
     */
    this.state = {};
  }

  componentWillMount() {
    this.savePayloadToState();
  }

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

      console.log(this.state.account_data);

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
    }

    this.checkStatus();
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
            // TODO : Remove this comment
            console.log('user is online');
          } else {
            // -> If status is set to false take user back to log in page
            this.routeToLogin();
          }
        })
        .catch((error) => console.log('error', error));
    }, 3000);
  }

  /**
   * # Update Pulse
   *
   * This function will update the pulse in the database using the pulse update
   * route already implemented in the api.
   *
   * @author Byron Wezvo
   */
  updatePulse() {
    // Basically run this function after 2mins 50 seconds (150,000)
    setInterval(() => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        company_email: 'test@test.com',
        current_pulse_id: '11f7d2c6-9565-4a1d-ba67-4ce6bc80a4b2',
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://localhost:3300/dashboard/pulse', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    }, 150000);
  }

  /**
   * # Save Payload to State
   *
   * This function will take payload and basically set it into state under
   * `account data`.
   *
   * @author Byron Wezvo
   */
  savePayloadToState() {
    // -> Get data from payload session object
    const payload = sessionStorage.getItem('payload');

    // -> set new state from the payload object
    this.setState({
      account_data: payload,
    });
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
