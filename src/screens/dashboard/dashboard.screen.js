import React from 'react';
import { toast } from 'react-toastify';

import DashboardHeader from '../../components/dashboard_header/dashboard_header.component';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.routeToLogin = this.routeToLogin.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.savePayloadToState = this.savePayloadToState.bind(this);
    this.updatePulse = this.updatePulse.bind(this);
    this.updateAccountData = this.updateAccountData.bind(this);

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
      // -> Log the state to the console
      console.log(this.state.account_data);

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
    this
      .updatePulse
      // this.state.account_data.company_email,
      // this.state.account_data.current_pulse_id
      ();

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
          console.log(result);
          if (result.authentication_status === true) {
            // TODO : restart
          } else {
            // -> If status is set to false take user back to log in page
            this.routeToLogin();
          }
        })
        .catch((error) => console.log('error', error));
    }, 5000);
  }

  /**
   * # Update Pulse
   *
   * This function will update the pulse in the database using the pulse update
   * route already implemented in the api.
   *
   * @author Byron Wezvo
   */
  updatePulse(email, pulse_id) {
    // Basically run this function after 2mins 50 seconds (150,000)
    setInterval(() => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        // company_email: email,
        // current_pulse_id: pulse_id,
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
   * # Save Payload to State
   *
   * This function will take payload and basically set it into state under
   * `account data`.
   *
   * @author Byron Wezvo
   */
  savePayloadToState() {
    // -> Get data from payload session object
    const payload = JSON.parse(sessionStorage.getItem('payload'));

    // -> set new state from the payload object
    this.setState({
      account_data: payload,
    });
  }

  /**
   * # Save to Session Storage
   *
   * this function will save anythings its given to the sessionStorage
   *
   * @author Byron Wezvo
   */
  saveToSessionStorage(key, object) {
    // -> First delete the data from key and create a new one
    sessionStorage.removeItem(key);

    // -> Save new data to session storage
    sessionStorage.setItem(`${key}`, JSON.parse(object));
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
