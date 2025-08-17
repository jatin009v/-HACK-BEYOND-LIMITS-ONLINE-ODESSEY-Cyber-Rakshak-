import React from 'react';
import { Link } from 'react-router-dom';
import './Help.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faUserShield,
  faCreditCard,
  faExclamationTriangle,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const HelpSection = () => {
  return (
    <section className="help-section">
      <div className="help-header">
        <FontAwesomeIcon icon={faShieldAlt} className="shield-icon" />
        <h2>Cyber Emergency Response</h2>
        <p className="help-subtitle">Immediate assistance for cybercrime victims</p>
      </div>

      <div className="help-cards">
        <div className="help-card">
          <div className="card-icon">
            <FontAwesomeIcon icon={faUserShield} />
          </div>
          <h3>For Women & Children</h3>
          <p>Report online harassment, cyberbullying, or child exploitation</p>
          <Link 
            to="https://cybercrime.gov.in/Webform/Accept.aspx" 
            className="help-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report Now <FontAwesomeIcon icon={faExclamationTriangle} />
          </Link>
        </div>

        <div className="help-card">
          <div className="card-icon">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <h3>Financial Fraud</h3>
          <p>Report UPI scams, online payment frauds, or banking scams</p>
          <Link 
            to="https://cybercrime.gov.in/Webform/Accept.aspx" 
            className="help-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Secure Your Funds <FontAwesomeIcon icon={faShieldAlt} />
          </Link>
        </div>

        <div className="help-card">
          <div className="card-icon">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <h3>Other Cybercrimes</h3>
          <p>Report phishing, identity theft, or any suspicious online activity</p>
          <Link 
            to="https://cybercrime.gov.in/Webform/Accept.aspx" 
            className="help-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Help <FontAwesomeIcon icon={faUserShield} />
          </Link>
        </div>
      </div>

      <div className="prevention-tip">
        <FontAwesomeIcon icon={faLightbulb} className="tip-icon" />
        <p>
          Remember what you learned in <strong>Cyber Rakshak</strong> quizzes! 
          Never share OTPs, verify payment requests, and think before you click.
        </p>
      </div>
    </section>
  );
};

export default HelpSection;