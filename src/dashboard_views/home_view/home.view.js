import React from 'react';

import './homeview.css';

class Home extends React.Component {
  render() {
    return (
      <div className="col-sm-10 overflow-auto">
        {/* TODO : move this code to a component */}
        <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
          <div class="container">
            <div class="row">
              {/* TODO : move this code to a component */}
              <div class="col-sm">
                <div className="dashboard-card">
                  <div className="dashboard-card-heading text-center">
                    <span className="dashboard-card-icon">
                      <i class="icofont-envelope"></i>
                    </span>
                    New Applications
                  </div>
                  <div className="text-center">28</div>
                </div>
              </div>
              <div class="col-sm">One of three columns</div>
              <div class="col-sm">One of three columns</div>
              <div class="col-sm">One of three columns</div>
              <div class="col-sm">One of three columns</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
