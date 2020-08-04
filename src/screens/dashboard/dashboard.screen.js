import React from 'react';

class Dashboard extends React.Component {
  componentDidMount() {
    // -> Try find data stored in Session storage
    const payload = sessionStorage.getItem('payload');

    // -> If null which means user in not authenticated do this
    if (payload === null) {
      // -> route user to login screen
      this.routeToLogin();
    } else {
      console.log('Yey');
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
      <div className="container page-wrapper">
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
