// Audio utility functions for the kids learning game

// Text-to-speech functionality
export const speakText = (text, language = 'en-US') => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language based on the game language
    switch (language) {
      case 'hindi':
        utterance.lang = 'hi-IN';
        break;
      case 'marathi':
        utterance.lang = 'mr-IN';
        break;
      default:
        utterance.lang = 'en-US';
    }
    
    // Set voice properties for kids
    utterance.rate = 0.8; // Slower speech for kids
    utterance.pitch = 1.2; // Higher pitch for friendliness
    utterance.volume = 0.8;
    
    // Try to find a female voice if available (often more appealing to kids)
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith(utterance.lang.split('-')[0]) && 
      voice.name.toLowerCase().includes('female')
    ) || voices.find(voice => 
      voice.lang.startsWith(utterance.lang.split('-')[0])
    );
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    window.speechSynthesis.speak(utterance);
    
    return utterance;
  } else {
    console.log('Speech synthesis not supported');
    return null;
  }
};

// Play success sound effect
export const playSuccessSound = () => {
  // Create a simple success sound using Web Audio API
  if ('AudioContext' in window || 'webkitAudioContext' in window) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    
    // Create a simple melody for success
    const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
    let startTime = audioContext.currentTime;
    
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(freq, startTime + index * 0.15);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, startTime + index * 0.15);
      gainNode.gain.linearRampToValueAtTime(0.3, startTime + index * 0.15 + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + index * 0.15 + 0.3);
      
      oscillator.start(startTime + index * 0.15);
      oscillator.stop(startTime + index * 0.15 + 0.3);
    });
  }
};

// Play click sound effect
export const playClickSound = () => {
  if ('AudioContext' in window || 'webkitAudioContext' in window) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }
};

// Play error sound effect
export const playErrorSound = () => {
  if ('AudioContext' in window || 'webkitAudioContext' in window) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
  }
};

// Initialize audio context on user interaction (required by browsers)
export const initializeAudio = () => {
  if ('AudioContext' in window || 'webkitAudioContext' in window) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }
  
  // Load voices for speech synthesis
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
  }
};

