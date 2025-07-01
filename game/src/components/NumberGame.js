import React, { useState, useEffect } from 'react';
import './NumberGame.css';
import { speakText, playSuccessSound, playClickSound, initializeAudio } from '../utils/audioUtils';
import { numberData } from '../data/numberData';

const NumberGame = ({ onBackToMenu, language }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [gameMode, setGameMode] = useState('learn');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizOptions, setQuizOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [numberRange, setNumberRange] = useState('0-10'); // 0-10, 11-20, 21-30, 31-50

  const currentData = numberData[language] || numberData.english;
  
  // Filter numbers based on selected range
  const getFilteredNumbers = () => {
    switch (numberRange) {
      case '0-10':
        return currentData.slice(0, 11); // 0-10
      case '11-20':
        return currentData.slice(11, 21); // 11-20
      case '21-30':
        return currentData.slice(21, 31); // 21-30
      case '31-50':
        return currentData.slice(31, 51); // 31-50
      default:
        return currentData.slice(0, 11);
    }
  };

  const filteredData = getFilteredNumbers();

  // Generate quiz options
  const generateQuizOptions = () => {
    const correctAnswer = filteredData[currentNumber];
    const wrongAnswers = filteredData
      .filter((_, index) => index !== currentNumber)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    
    const options = [correctAnswer, ...wrongAnswers]
      .sort(() => Math.random() - 0.5);
    
    setQuizOptions(options);
  };

  useEffect(() => {
    setCurrentNumber(0);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [numberRange]);

  useEffect(() => {
    if (gameMode === 'quiz') {
      generateQuizOptions();
    }
    setShowAnswer(false);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [currentNumber, gameMode]);

  const handleNext = () => {
    if (currentNumber < filteredData.length - 1) {
      setCurrentNumber(currentNumber + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentNumber > 0) {
      setCurrentNumber(currentNumber - 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleNumberClick = () => {
    initializeAudio();
    setShowAnswer(true);
    playClickSound();
    
    const numberInfo = filteredData[currentNumber];
    speakText(`${numberInfo.number}. ${numberInfo.word}`, language);
    playSuccessSound();
  };

  const handleQuizAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    setShowResult(true);
    
    if (selectedOption.number === filteredData[currentNumber].number) {
      setScore(score + 1);
      playSuccessSound();
      speakText(`Correct! ${selectedOption.number} ${selectedOption.word}`, language);
    } else {
      speakText(`Try again! This is ${selectedOption.number} ${selectedOption.word}`, language);
    }
  };

  const currentNumberData = filteredData[currentNumber];

  return (
    <div className="number-game">
      <div className="game-header">
        <button className="back-btn" onClick={onBackToMenu}>
          ← Back
        </button>
        <h2>Learn Numbers</h2>
        <div className="score">Score: {score}</div>
      </div>

      <div className="number-range-selector">
        <button 
          className={`range-btn ${numberRange === '0-10' ? 'active' : ''}`}
          onClick={() => setNumberRange('0-10')}
        >
          0-10
        </button>
        <button 
          className={`range-btn ${numberRange === '11-20' ? 'active' : ''}`}
          onClick={() => setNumberRange('11-20')}
        >
          11-20
        </button>
        <button 
          className={`range-btn ${numberRange === '21-30' ? 'active' : ''}`}
          onClick={() => setNumberRange('21-30')}
        >
          21-30
        </button>
        <button 
          className={`range-btn ${numberRange === '31-50' ? 'active' : ''}`}
          onClick={() => setNumberRange('31-50')}
        >
          31-50
        </button>
      </div>

      <div className="game-modes">
        <button 
          className={`mode-btn ${gameMode === 'learn' ? 'active' : ''}`}
          onClick={() => setGameMode('learn')}
        >
          Learn Mode
        </button>
        <button 
          className={`mode-btn ${gameMode === 'quiz' ? 'active' : ''}`}
          onClick={() => setGameMode('quiz')}
        >
          Quiz Mode
        </button>
      </div>

      {gameMode === 'learn' ? (
        <div className="learn-mode">
          <div className="number-card" onClick={handleNumberClick}>
            <div 
              className="number-display"
              style={{ 
                backgroundColor: currentNumberData.color,
                fontSize: '120px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
              }}
            >
              {currentNumberData.number}
            </div>
            <div className="number-emoji" style={{ fontSize: '80px' }}>
              {currentNumberData.emoji}
            </div>
            {showAnswer && (
              <div className="number-info">
                <div className="number-word" style={{ color: currentNumberData.color }}>
                  {currentNumberData.word}
                </div>
                <div className="number-story">{currentNumberData.story}</div>
                <div className="number-shape" style={{ fontSize: '40px', color: currentNumberData.color }}>
                  Shape: {currentNumberData.shape}
                </div>
                <div className="number-visual">{currentNumberData.visual}</div>
                {currentNumberData.items && (
                  <div className="number-items" style={{ fontSize: '20px' }}>
                    {currentNumberData.items.slice(0, Math.min(currentNumberData.number, 20))}
                    {currentNumberData.number > 20 && '...'}
                  </div>
                )}
              </div>
            )}
            {!showAnswer && (
              <div className="tap-hint">👆 Tap to learn more!</div>
            )}
          </div>
        </div>
      ) : (
        <div className="quiz-mode">
          <div className="quiz-question">
            <h3>What number is this?</h3>
            <div 
              className="quiz-number"
              style={{ 
                backgroundColor: currentNumberData.color,
                fontSize: '100px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
                padding: '20px',
                borderRadius: '20px',
                margin: '20px 0'
              }}
            >
              {currentNumberData.emoji}
            </div>
            <div className="quiz-word-hint">
              Word: {currentNumberData.word}
            </div>
          </div>

          <div className="quiz-options">
            {quizOptions.map((option, index) => (
              <button
                key={index}
                className={`quiz-option ${
                  selectedAnswer === option
                    ? option.number === currentNumberData.number
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
                onClick={() => handleQuizAnswer(option)}
                disabled={showResult}
                style={{
                  backgroundColor: selectedAnswer === option 
                    ? option.number === currentNumberData.number 
                      ? '#4CAF50' 
                      : '#f44336'
                    : option.color,
                  color: 'white',
                  fontSize: '60px',
                  fontWeight: 'bold'
                }}
              >
                {option.number}
              </button>
            ))}
          </div>

          {showResult && (
            <div className="quiz-result">
              {selectedAnswer.number === currentNumberData.number ? (
                <div className="correct-answer">
                  🎉 Excellent! {currentNumberData.number} {currentNumberData.word}
                </div>
              ) : (
                <div className="wrong-answer">
                  💪 Keep trying! The correct answer is {currentNumberData.number}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="navigation">
        <button 
          className="nav-btn prev-btn" 
          onClick={handlePrevious}
          disabled={currentNumber === 0}
        >
          ← Previous
        </button>
        <div className="progress">
          {currentNumber + 1} / {filteredData.length}
        </div>
        <button 
          className="nav-btn next-btn" 
          onClick={handleNext}
          disabled={currentNumber === filteredData.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default NumberGame;

