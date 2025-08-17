import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faQuestionCircle, 
  faNewspaper, 
  faTrophy, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Cyber Rakshak</h2>
          <p>
            An interactive cybercrime awareness & prevention guide developed for the Hack Beyond Limits hackathon. 
            Features age-specific content, gamified learning, and real-time scam alerts to make cyber safety education engaging.
          </p>
          <div className="hackathon-info">
            <p>
              <FontAwesomeIcon icon={faTrophy} /> <strong>Hack Beyond Limits Online Odyssey</strong><br />
              Team: Digital Defenders<br />
              Track: Cybersecurity/Social Impact
            </p>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
            <li><a href="#quiz"><FontAwesomeIcon icon={faQuestionCircle} /> Interactive Quiz</a></li>
            <li><a href="#articles"><FontAwesomeIcon icon={faNewspaper} /> Scam Articles</a></li>
            <li><a href="#team"><FontAwesomeIcon icon={faUsers} /> Our Team</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Team Contact</h2>
          <p>
            <strong>Project Lead:</strong> Jatin Gupta<br />
            <a href="https://www.linkedin.com/in/jatingupta09/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a><br />
            <a href="https://github.com/Jatin009v" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </p>
          <p className="institution">
            C5JM University, Kanpur
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Digital Defenders | Cyber Rakshak | Hack Beyond Limits Submission
      </div>
    </footer>
  );
}

export default Footer;