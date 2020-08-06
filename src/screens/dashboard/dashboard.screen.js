import React from 'react';
import { toast } from 'react-toastify';

import DashboardHeader from '../../components/dashboard_header/dashboard_header.component';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.routeToLogin = this.routeToLogin.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    // this.savePayloadToState = this.savePayloadToState.bind(this);
    this.sendPulse = this.sendPulse.bind(this);
    // this.updateAccountData = this.updateAccountData.bind(this);
    this.saveToSessionStorage = this.saveToSessionStorage.bind(this);
    this.getDataFromSessionStorage = this.getDataFromSessionStorage.bind(this);

    /**
     * # State
     *
     * The app's entire state
     *
     * @author Byron Wezvo
     */
    this.state = {
      // -> Ghost Property account_data : {}
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
      // -> Set state from payload
      this.savePayloadToState();

      // -> Log the state to the console
      console.log(this.state);

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
    }

    //  -> Call updatePulse
    this.sendPulse();

    // -> Call checkStatus
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
        .then((response) => response.json())
        .then((result) => {
          // TODO : remove this console log () its repetitive
          console.log(result);

          // -> save to session storage
          this.saveToSessionStorage('pulse', result);

          // if (result.authentication_status === true) {
          //   // TODO : restart
          // } else {
          //   // -> If status is set to false take user back to log in page
          //   this.routeToLogin();
          // }
        })
        .catch((error) => console.log('error', error));
    }, 5000);
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
      // -> Get data from session storage
      const data = this.getDataFromSessionStorage('pulse');

      // TODO : remove this console.log its a memory digester
      console.log(data.current_pulse_id);

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        company_email: data.company_email,
        current_pulse_id: data.current_pulse_id,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://localhost:3300/dashboard/pulse', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // TODO : restart
        })
        .catch((error) => console.log('error', error));
    }, 5000);
  }

  /**
   * # Save to Session Storage
   *
   * This function will save anythings its given to the session storage
   *
   * @author Byron Wezvo
   */
  saveToSessionStorage(key, object) {
    // -> First delete the data from key and create a new one
    sessionStorage.removeItem(key);

    // -> Save new data to session storage
    sessionStorage.setItem(`${key}`, JSON.stringify(object));
  }

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
