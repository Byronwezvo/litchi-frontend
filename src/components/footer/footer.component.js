import React from 'react';
import './footer.css';

const date = new Date();

function Footer() {
  return (
    <div className="footer">
      <div className="container text-center">
        <div className="footer-text">
          Copyright - {date.getFullYear()} Litchi, Made with ❤ by Byron Wezvo
        </div>
      </div>
    </div>
  );
}

export default Footer;
