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
            subtitle="20"
          />
          <Card
            cardClassName="dashboard-card-2"
            heading="Total Clients"
            icon="icofont-envelope"
            subtitle="20"
          />
          <Card
            cardClassName="dashboard-card-3"
            heading="Overdue Loans"
            icon="icofont-envelope"
            subtitle="20"
          />
          <Card
            cardClassName="dashboard-card-4"
            heading="Expiry Date"
            icon="icofont-envelope"
            subtitle="20"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCardSection;
