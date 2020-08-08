import React from 'react';
import Card from '../card/card.component';

function HomeCardSection() {
  return (
    <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
      <div class="container">
        <div class="row">
          <Card
            cardClassName="dashboard-card-1"
            heading="New Applicants"
            icon="icofont-envelope"
            subtitle="20 applications"
          />
          <Card
            cardClassName="dashboard-card-2"
            heading="Total Clients"
            icon="icofont-ui-user-group"
            subtitle="3087 clients"
          />
          <Card
            cardClassName="dashboard-card-3"
            heading="Overdue Loans"
            icon="icofont-exclamation-circle"
            subtitle="13 clients"
          />
          <Card
            cardClassName="dashboard-card-4"
            heading="License Expiry"
            icon="icofont-pay"
            subtitle="20 days"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCardSection;
