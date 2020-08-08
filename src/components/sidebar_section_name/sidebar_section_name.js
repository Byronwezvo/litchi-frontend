import React from 'react';
import './sidebar_section_name.css';

function SidebarSectionName({ name }) {
  return (
    <div className="text-center">
      <div className="section-name">{name}</div>;
    </div>
  );
}

export default SidebarSectionName;
