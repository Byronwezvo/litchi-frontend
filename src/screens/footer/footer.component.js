import React from 'react';
import './footer.css';

var d = new Date();

function Footer() {
  return (
    <div className="footer">
      <div className="container text-center">
        <div className="h6">
          Copyright - {d.getFullYear()} Litchi, Made with ❤ by Byron Wezvo
        </div>
      </div>
    </div>
  );
}

export default Footer;
