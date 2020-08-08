import React from 'react';

function Card() {
  return (
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
  );
}

export default Card;
