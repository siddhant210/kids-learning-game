import React from 'react';
import { useTheme } from './ThemeProvider';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="theme-toggle-inner">
        <span className="theme-icon sun">☀️</span>
        <span className="theme-icon moon">🌙</span>
        <div className={`theme-slider ${theme}`}></div>
      </div>
    </button>
  );
};

export default ThemeToggle;

