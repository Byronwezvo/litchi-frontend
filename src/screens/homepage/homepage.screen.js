import React from 'react';

import Header from '../../components/header/header.component';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container page-wrapper">
          <h1>Homepage</h1>
        </div>
      </div>
    );
  }
}

export default Homepage;
