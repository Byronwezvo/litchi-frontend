import React from 'react';

class Dashboard extends React.Component {
  componentDidMount() {
    console.log('User is not Authenticated');
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
