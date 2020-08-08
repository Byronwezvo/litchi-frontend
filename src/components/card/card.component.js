import React from 'react';
import './card.css';

function Card({ cardClassName, heading, subtitle, icon }) {
  return (
    <div class="col-sm">
      <div className={cardClassName}>
        <div className="dashboard-card-heading text-center">
          <span className="dashboard-card-icon">
            <i class={icon}></i>
          </span>
          {heading}
        </div>
        <div className="dashboard-card-subtitle text-center">{subtitle}</div>
      </div>
    </div>
  );
}

export default Card;
