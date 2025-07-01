import React, { useState } from 'react';
import './GameMenu.css';

const GameMenu = ({ onGameSelect, currentLanguage, onLanguageChange }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const languages = [
    { code: 'english', name: 'English', flag: '🇺🇸' },
    { code: 'hindi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'marathi', name: 'मराठी', flag: '🇮🇳' }
  ];

  const games = [
    {
      id: 'letters',
      title: 'Learn Letters',
      titleHindi: 'अक्षर सीखें',
      titleMarathi: 'अक्षरे शिका',
      icon: '🔤',
      color: 'red',
      description: 'Learn alphabets and sounds'
    },
    {
      id: 'numbers',
      title: 'Learn Numbers',
      titleHindi: 'संख्या सीखें',
      titleMarathi: 'संख्या शिका',
      icon: '🔢',
      color: 'blue',
      description: 'Count and learn numbers'
    },
    {
      id: 'objects',
      title: 'Learn Objects',
      titleHindi: 'वस्तुएं सीखें',
      titleMarathi: 'वस्तू शिका',
      icon: '🎯',
      color: 'green',
      description: 'Identify everyday objects'
    }
  ];

  const handleCardClick = (gameId) => {
    setSelectedCard(gameId);
    setTimeout(() => {
      onGameSelect(gameId);
    }, 300);
  };

  const getGameTitle = (game) => {
    switch (currentLanguage) {
      case 'hindi':
        return game.titleHindi;
      case 'marathi':
        return game.titleMarathi;
      default:
        return game.title;
    }
  };

  return (
    <div className="game-menu fade-in">
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      
      <div className="menu-header">
        <h1 className="game-title">
          <span className="title-icon">🌟</span>
          Learn with Fun
          <span className="title-icon">🌟</span>
        </h1>
        <p className="game-subtitle">Choose your adventure!</p>
      </div>

      <div className="language-selector">
        <h3>Choose Language / भाषा चुनें / भाषा निवडा</h3>
        <div className="language-buttons">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-btn ${currentLanguage === lang.code ? 'active' : ''}`}
              onClick={() => onLanguageChange(lang.code)}
            >
              <span className="flag">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className={`game-card ${game.color} ${selectedCard === game.id ? 'selected' : ''}`}
            onClick={() => handleCardClick(game.id)}
          >
            <div className="card-icon">{game.icon}</div>
            <h3 className="card-title">{getGameTitle(game)}</h3>
            <p className="card-description">{game.description}</p>
            <div className="card-shine"></div>
          </div>
        ))}
      </div>

      <div className="floating-elements">
        <div className="floating-shape circle"></div>
        <div className="floating-shape triangle"></div>
        <div className="floating-shape square"></div>
      </div>
    </div>
  );
};

export default GameMenu;

