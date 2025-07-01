import React, { useState } from 'react';
import './App.css';
import GameMenu from './components/GameMenu';
import LetterGame from './components/LetterGame';
import NumberGame from './components/NumberGame';
import ObjectGame from './components/ObjectGame';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [currentGame, setCurrentGame] = useState('menu');
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const handleGameSelect = (game) => {
    setCurrentGame(game);
  };

  const handleBackToMenu = () => {
    setCurrentGame('menu');
  };

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        {currentGame === 'menu' && (
          <GameMenu 
            onGameSelect={handleGameSelect} 
            language={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        )}
        {currentGame === 'letters' && (
          <LetterGame 
            onBackToMenu={handleBackToMenu} 
            language={currentLanguage}
          />
        )}
        {currentGame === 'numbers' && (
          <NumberGame 
            onBackToMenu={handleBackToMenu} 
            language={currentLanguage}
          />
        )}
        {currentGame === 'objects' && (
          <ObjectGame 
            onBackToMenu={handleBackToMenu} 
            language={currentLanguage}
          />
        )}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

