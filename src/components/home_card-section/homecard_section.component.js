import React from 'react';
import Card from '../card/card.component';

function HomeCardSection() {
  return (
    <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
      <div class="container">
        <div class="row">
          {/* TODO : move this code to a component */}
          <Card />
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardSection;
