import React from 'react';
import { toast } from 'react-toastify';

import './dashboard.css';
import DashboardHeader from '../../components/dashboard_header/dashboard_header.component';
import DashboardSideBar from '../../components/dashboard_sidebar/dashboard_sidebar.component';
import Home from '../../dashboard_views/home_view/home.view';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.routeToLogin = this.routeToLogin.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.sendPulse = this.sendPulse.bind(this);
    this.getDataFromSessionStorage = this.getDataFromSessionStorage.bind(this);
    this.savePayloadToState = this.savePayloadToState.bind(this);

    /**
     * # State
     *
     * The app's entire state
     *
     * @author Byron Wezvo
     */
    this.state = {
      send_pulse: false,
      account_data: 'not changed',
    };
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

      // -> Save payload to state
      this.savePayloadToState(prettyPayload);

      // -> generate a hello notification from company name
      toast(`✅ Hello, ${prettyPayload.company_name}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    // -> Call checkStatus
    this.checkStatus();

    // -> Call sendPulse
    this.sendPulse();
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
    // -> Get data from session storage
    // TODO : get data from state
    // const data = this.getDataFromSessionStorage('payload');

    // -> This code is repetitive
    setInterval(() => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        company_email: this.state.account_data.company_email,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://localhost:3300/dashboard/authstatus', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // -> Update state
          this.savePayloadToState(result);

          if (result.authentication_status === true) {
            // TODO : restart
          } else {
            // -> If status is set to false take user back to log in page
            // TODO : reset this back
            // this.routeToLogin();
          }
        })
        .catch((error) => console.log('error', error));
    }, 120000); // timing (2mins 45 seconds)
  }

  /**
   * # Send Pulse
   *
   * This function will update the pulse in the database using the pulse update
   * route already implemented in the api.
   *
   * @author Byron Wezvo
   */
  sendPulse() {
    // Basically run this function after 2mins 50 seconds (150,000)
    setInterval(() => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        company_email: this.state.account_data.company_email,
        current_pulse_id: this.state.account_data.current_pulse_id,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://localhost:3300/dashboard/pulse', requestOptions)
        .then((response) => {
          if (response.status === 401) {
            // -> route user back to login
            this.routeToLogin();
          } else {
            // -> parse
            response.json();
          }
        })
        .then((result) => {
          // Do nothing
        })
        .catch((error) => console.log('error', error));
    }, 125000); // timing ( 2mins 50seconds)
  }

  /**
   * # Save to Session Storage
   *
   * This function will save anythings its given to the session storage
   *
   * @author Byron Wezvo
   */
  // saveToSessionStorage(key, object) {
  //   // -> First delete the data from key and create a new one
  //   sessionStorage.removeItem(key);

  //   // -> Save new data to session storage
  //   sessionStorage.setItem(`${key}`, JSON.stringify(object));
  // }

  /**
   * # Get data from Session Storage
   *
   * This function will return an object with data from the session storage
   *
   * @author Byron Wezvo
   */
  getDataFromSessionStorage(key) {
    // -> Save new data to session storage
    return JSON.parse(sessionStorage.getItem(`${key}`));
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

  /**
   * # Set state
   *
   * This method will delay for about 3 seconds or so and then update the state while deleting data
   * that exist in the session storage quickly
   *
   * @author Byron Wezvo
   */
  savePayloadToState(payload) {
    // -> Set state after 1 second delay
    setTimeout(() => {
      this.setState({
        account_data: payload,
      });
      console.log(this.state.account_data);
      // -> Clean payload after
      // TODO : Reset this back
      // sessionStorage.removeItem('payload');
    }, 1000);
  }

  render() {
    return (
      <div>
        <DashboardHeader />
        <div className="dashboard-page-warper">
          <div className="row">
            <DashboardSideBar />
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
