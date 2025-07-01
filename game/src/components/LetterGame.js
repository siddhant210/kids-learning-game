import React, { useState, useEffect } from 'react';
import './LetterGame.css';
import { speakText, playSuccessSound, playClickSound, initializeAudio } from '../utils/audioUtils';
import { alphabetData } from '../data/alphabetData';

const LetterGame = ({ onBackToMenu, language }) => {
  const [currentLetter, setCurrentLetter] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameMode, setGameMode] = useState('learn');
  const [score, setScore] = useState(0);
  const [quizOptions, setQuizOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const currentData = alphabetData[language] || alphabetData.english;

  // Generate quiz options
  const generateQuizOptions = () => {
    const correctAnswer = currentData[currentLetter];
    const wrongAnswers = currentData
      .filter((_, index) => index !== currentLetter)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    
    const options = [correctAnswer, ...wrongAnswers]
      .sort(() => Math.random() - 0.5);
    
    setQuizOptions(options);
  };

  useEffect(() => {
    if (gameMode === 'quiz') {
      generateQuizOptions();
    }
    setShowAnswer(false);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [currentLetter, gameMode]);

  const playSound = () => {
    playClickSound();
    const letterInfo = currentData[currentLetter];
    speakText(`${letterInfo.letter}. ${letterInfo.word}`, language);
  };

  const handleNext = () => {
    if (currentLetter < currentData.length - 1) {
      setCurrentLetter(currentLetter + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentLetter > 0) {
      setCurrentLetter(currentLetter - 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleLetterClick = () => {
    initializeAudio();
    setShowAnswer(true);
    playSound();
    playSuccessSound();
  };

  const handleQuizAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    setShowResult(true);
    
    if (selectedOption.letter === currentData[currentLetter].letter) {
      setScore(score + 1);
      playSuccessSound();
      speakText(`Correct! ${selectedOption.letter} for ${selectedOption.word}`, language);
    } else {
      speakText(`Try again! This is ${selectedOption.letter} for ${selectedOption.word}`, language);
    }
  };

  const currentLetterData = currentData[currentLetter];

  return (
    <div className="letter-game">
      <div className="game-header">
        <button className="back-btn" onClick={onBackToMenu}>
          ← Back
        </button>
        <h2>Learn Letters</h2>
        <div className="score">Score: {score}</div>
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
          <div className="letter-card" onClick={handleLetterClick}>
            <div 
              className="letter-display"
              style={{ 
                backgroundColor: currentLetterData.color,
                fontSize: '120px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
              }}
            >
              {currentLetterData.letter}
            </div>
            <div className="letter-image" style={{ fontSize: '80px' }}>
              {currentLetterData.image}
            </div>
            {showAnswer && (
              <div className="letter-info">
                <div className="letter-word" style={{ color: currentLetterData.color }}>
                  {currentLetterData.word}
                </div>
                <div className="letter-story">{currentLetterData.story}</div>
                <div className="letter-shape" style={{ fontSize: '40px', color: currentLetterData.color }}>
                  Shape: {currentLetterData.shape}
                </div>
              </div>
            )}
            {!showAnswer && (
              <div className="tap-hint">👆 Tap to hear!</div>
            )}
          </div>
        </div>
      ) : (
        <div className="quiz-mode">
          <div className="quiz-question">
            <h3>Which letter makes this sound?</h3>
            <div 
              className="quiz-letter"
              style={{ 
                backgroundColor: currentLetterData.color,
                fontSize: '100px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
                padding: '20px',
                borderRadius: '20px',
                margin: '20px 0'
              }}
            >
              {currentLetterData.image}
            </div>
            <div className="quiz-word-hint">
              Word: {currentLetterData.word}
            </div>
          </div>

          <div className="quiz-options">
            {quizOptions.map((option, index) => (
              <button
                key={index}
                className={`quiz-option ${
                  selectedAnswer === option
                    ? option.letter === currentLetterData.letter
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
                onClick={() => handleQuizAnswer(option)}
                disabled={showResult}
                style={{
                  backgroundColor: selectedAnswer === option 
                    ? option.letter === currentLetterData.letter 
                      ? '#4CAF50' 
                      : '#f44336'
                    : option.color,
                  color: 'white',
                  fontSize: '60px',
                  fontWeight: 'bold'
                }}
              >
                {option.letter}
              </button>
            ))}
          </div>

          {showResult && (
            <div className="quiz-result">
              {selectedAnswer.letter === currentLetterData.letter ? (
                <div className="correct-answer">
                  🎉 Excellent! {currentLetterData.letter} for {currentLetterData.word}
                </div>
              ) : (
                <div className="wrong-answer">
                  💪 Keep trying! The correct answer is {currentLetterData.letter}
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
          disabled={currentLetter === 0}
        >
          ← Previous
        </button>
        <div className="progress">
          {currentLetter + 1} / {currentData.length}
        </div>
        <button 
          className="nav-btn next-btn" 
          onClick={handleNext}
          disabled={currentLetter === currentData.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default LetterGame;

