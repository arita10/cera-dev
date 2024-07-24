import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">

        {/* Contact Us Section */}
        <div className="section">
          <h3 className="section-title">Contact Us</h3>
          <p>
            123 Main Street<br />
            Anytown, CA 12345
          </p>
          <p className="mt-2">
            Email: info@example.com<br />
            Phone: (555) 555-5555
          </p>
        </div>

        {/* Additional Sections (Optional) */}
        <div className="sections">
          <div className="section">
            <h4 className="section-title">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          {/* Add more sections as needed */}
        </div>

      </div>

      {/* Copyright */}
      <div className="copyright">
        &copy; 2023 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}