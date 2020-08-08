import React from 'react';

import './homeview.css';
import HomeCardSection from '../../components/home_card-section/homecard_section.component';

class Home extends React.Component {
  render() {
    return (
      <div className="col-sm-10 overflow-auto">
        {/* TODO : move this code to a component */}
        <HomeCardSection />
      </div>
    );
  }
}

export default Home;
