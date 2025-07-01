import React, { useState, useEffect } from 'react';
import './ObjectGame.css';
import { speakText, playSuccessSound, playClickSound, initializeAudio } from '../utils/audioUtils';

const ObjectGame = ({ onBackToMenu, language }) => {
  const [currentObject, setCurrentObject] = useState(0);
  const [gameMode, setGameMode] = useState('learn');
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [matchedItems, setMatchedItems] = useState([]);

  const objectData = {
    english: [
      { id: 1, name: 'Apple', emoji: '🍎', category: 'Fruit', color: 'red' },
      { id: 2, name: 'Ball', emoji: '⚽', category: 'Toy', color: 'black' },
      { id: 3, name: 'Cat', emoji: '🐱', category: 'Animal', color: 'orange' },
      { id: 4, name: 'Dog', emoji: '🐶', category: 'Animal', color: 'brown' },
      { id: 5, name: 'Elephant', emoji: '🐘', category: 'Animal', color: 'gray' },
      { id: 6, name: 'Fish', emoji: '🐟', category: 'Animal', color: 'blue' },
      { id: 7, name: 'Grapes', emoji: '🍇', category: 'Fruit', color: 'purple' },
      { id: 8, name: 'House', emoji: '🏠', category: 'Building', color: 'red' },
      { id: 9, name: 'Ice cream', emoji: '🍦', category: 'Food', color: 'white' },
      { id: 10, name: 'Juice', emoji: '🧃', category: 'Drink', color: 'orange' }
    ],
    hindi: [
      { id: 1, name: 'सेब', emoji: '🍎', category: 'फल', color: 'लाल' },
      { id: 2, name: 'गेंद', emoji: '⚽', category: 'खिलौना', color: 'काला' },
      { id: 3, name: 'बिल्ली', emoji: '🐱', category: 'जानवर', color: 'नारंगी' },
      { id: 4, name: 'कुत्ता', emoji: '🐶', category: 'जानवर', color: 'भूरा' },
      { id: 5, name: 'हाथी', emoji: '🐘', category: 'जानवर', color: 'स्लेटी' },
      { id: 6, name: 'मछली', emoji: '🐟', category: 'जानवर', color: 'नीला' },
      { id: 7, name: 'अंगूर', emoji: '🍇', category: 'फल', color: 'बैंगनी' },
      { id: 8, name: 'घर', emoji: '🏠', category: 'इमारत', color: 'लाल' },
      { id: 9, name: 'आइसक्रीम', emoji: '🍦', category: 'खाना', color: 'सफेद' },
      { id: 10, name: 'जूस', emoji: '🧃', category: 'पेय', color: 'नारंगी' }
    ],
    marathi: [
      { id: 1, name: 'सफरचंद', emoji: '🍎', category: 'फळ', color: 'लाल' },
      { id: 2, name: 'चेंडू', emoji: '⚽', category: 'खेळणी', color: 'काळा' },
      { id: 3, name: 'मांजर', emoji: '🐱', category: 'प्राणी', color: 'नारिंगी' },
      { id: 4, name: 'कुत्रा', emoji: '🐶', category: 'प्राणी', color: 'तपकिरी' },
      { id: 5, name: 'हत्ती', emoji: '🐘', category: 'प्राणी', color: 'राखाडी' },
      { id: 6, name: 'मासा', emoji: '🐟', category: 'प्राणी', color: 'निळा' },
      { id: 7, name: 'द्राक्षे', emoji: '🍇', category: 'फळ', color: 'जांभळा' },
      { id: 8, name: 'घर', emoji: '🏠', category: 'इमारत', color: 'लाल' },
      { id: 9, name: 'आईस्क्रीम', emoji: '🍦', category: 'अन्न', color: 'पांढरा' },
      { id: 10, name: 'रस', emoji: '🧃', category: 'पेय', color: 'नारिंगी' }
    ]
  };

  const currentData = objectData[language] || objectData.english;

  const handleNext = () => {
    if (currentObject < currentData.length - 1) {
      setCurrentObject(currentObject + 1);
      setShowAnswer(false);
    } else {
      setCurrentObject(0);
    }
  };

  const handlePrevious = () => {
    if (currentObject > 0) {
      setCurrentObject(currentObject - 1);
      setShowAnswer(false);
    }
  };

  const handleObjectClick = () => {
    initializeAudio();
    setShowAnswer(true);
    playClickSound();
    
    // Speak the object name and details
    const objectInfo = currentData[currentObject];
    speakText(`${objectInfo.name}. Category: ${objectInfo.category}. Color: ${objectInfo.color}`, language);
    playSuccessSound();
  };

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetCategory) => {
    e.preventDefault();
    if (draggedItem && draggedItem.category === targetCategory) {
      setMatchedItems([...matchedItems, draggedItem.id]);
      setScore(score + 1);
    }
    setDraggedItem(null);
  };

  const getRandomObjects = () => {
    const shuffled = [...currentData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  };

  const [matchingObjects, setMatchingObjects] = useState([]);

  useEffect(() => {
    if (gameMode === 'matching') {
      setMatchingObjects(getRandomObjects());
      setMatchedItems([]);
    }
  }, [gameMode]);

  const categories = [...new Set(currentData.map(item => item.category))];

  return (
    <div className="object-game fade-in">
      <div className="game-header">
        <button className="back-btn cartoon-button" onClick={onBackToMenu}>
          ← Back
        </button>
        <h2 className="game-title">
          {language === 'hindi' ? 'वस्तुएं सीखें' : 
           language === 'marathi' ? 'वस्तू शिका' : 'Learn Objects'}
        </h2>
        <div className="score">Score: {score}</div>
      </div>

      <div className="game-modes">
        <button 
          className={`mode-btn cartoon-button ${gameMode === 'learn' ? 'active' : ''}`}
          onClick={() => setGameMode('learn')}
        >
          Learn Mode
        </button>
        <button 
          className={`mode-btn cartoon-button blue ${gameMode === 'matching' ? 'active' : ''}`}
          onClick={() => setGameMode('matching')}
        >
          Matching Game
        </button>
      </div>

      {gameMode === 'learn' ? (
        <div className="object-display">
          <div className="object-card" onClick={handleObjectClick}>
            <div className="object-emoji">
              {currentData[currentObject].emoji}
            </div>
            <div className="object-name">
              {currentData[currentObject].name}
            </div>
            {showAnswer && (
              <div className="object-details fade-in">
                <div className="object-category">
                  Category: {currentData[currentObject].category}
                </div>
                <div className="object-color">
                  Color: {currentData[currentObject].color}
                </div>
              </div>
            )}
            <div className="tap-hint">
              {showAnswer ? '🌟 Well done!' : '👆 Tap to learn more!'}
            </div>
          </div>
        </div>
      ) : (
        <div className="matching-game">
          <div className="matching-instructions">
            <h3>Drag objects to their correct categories!</h3>
          </div>
          
          <div className="matching-area">
            <div className="objects-to-match">
              {matchingObjects.map((obj) => (
                !matchedItems.includes(obj.id) && (
                  <div
                    key={obj.id}
                    className="draggable-object"
                    draggable
                    onDragStart={(e) => handleDragStart(e, obj)}
                  >
                    <div className="object-emoji">{obj.emoji}</div>
                    <div className="object-name">{obj.name}</div>
                  </div>
                )
              ))}
            </div>
            
            <div className="category-zones">
              {categories.slice(0, 3).map((category) => (
                <div
                  key={category}
                  className="category-zone"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, category)}
                >
                  <h4>{category}</h4>
                  <div className="matched-objects">
                    {matchingObjects
                      .filter(obj => obj.category === category && matchedItems.includes(obj.id))
                      .map(obj => (
                        <div key={obj.id} className="matched-object">
                          {obj.emoji}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {matchedItems.length === matchingObjects.length && matchingObjects.length > 0 && (
            <div className="completion-message fade-in">
              <h2>🎉 Congratulations! You matched all objects! 🎉</h2>
              <button 
                className="cartoon-button green"
                onClick={() => {
                  setMatchingObjects(getRandomObjects());
                  setMatchedItems([]);
                }}
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      )}

      {gameMode === 'learn' && (
        <div className="navigation">
          <button 
            className="nav-btn cartoon-button blue" 
            onClick={handlePrevious}
            disabled={currentObject === 0}
          >
            ← Previous
          </button>
          <div className="progress">
            {currentObject + 1} / {currentData.length}
          </div>
          <button 
            className="nav-btn cartoon-button green" 
            onClick={handleNext}
          >
            Next →
          </button>
        </div>
      )}

      {gameMode === 'learn' && (
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentObject + 1) / currentData.length) * 100}%` }}
          ></div>
        </div>
      )}

      <div className="floating-objects">
        <div className="floating-object">🎯</div>
        <div className="floating-object">🔍</div>
        <div className="floating-object">🎨</div>
        <div className="floating-object">🧩</div>
      </div>
    </div>
  );
};

export default ObjectGame;

