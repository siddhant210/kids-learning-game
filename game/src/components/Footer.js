import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="game-footer">
      <div className="footer-content">
        <div className="footer-attribution">
          <p className="built-by">
            <span className="heart">💖</span>
            Built by <strong>Siddhant Jadhav</strong>
            <span className="heart">💖</span>
          </p>
        </div>
        <div className="footer-quote">
          <p className="quote">
            "Learning is a treasure that will follow its owner everywhere."
          </p>
          <p className="quote-author">- Chinese Proverb</p>
        </div>
        <div className="footer-decorations">
          <span className="decoration">🌟</span>
          <span className="decoration">📚</span>
          <span className="decoration">🎨</span>
          <span className="decoration">🚀</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

