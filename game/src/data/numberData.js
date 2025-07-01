// Complete 1-100 number data with unique visual memory aids
export const numberData = {
  english: [
    // 0-10 with detailed visual aids
    { number: 0, word: 'Zero', items: '', emoji: '⭕', story: 'Zero looks like a donut - round with nothing inside!', color: '#E8E8E8', shape: '○', visual: 'Empty circle' },
    { number: 1, word: 'One', items: '🍎', emoji: '1️⃣', story: 'One stands tall like a soldier!', color: '#FF6B6B', shape: '|', visual: 'Single line' },
    { number: 2, word: 'Two', items: '🍎🍎', emoji: '2️⃣', story: 'Two looks like a swan swimming!', color: '#4ECDC4', shape: '∿', visual: 'Swan neck' },
    { number: 3, word: 'Three', items: '🍎🍎🍎', emoji: '3️⃣', story: 'Three has two bumps like a camel!', color: '#45B7D1', shape: '∿', visual: 'Camel humps' },
    { number: 4, word: 'Four', items: '🍎🍎🍎🍎', emoji: '4️⃣', story: 'Four looks like a chair to sit on!', color: '#96CEB4', shape: '⌐', visual: 'Chair shape' },
    { number: 5, word: 'Five', items: '🍎🍎🍎🍎🍎', emoji: '5️⃣', story: 'Five has a hat and a belly!', color: '#FFEAA7', shape: '⌒', visual: 'Person with hat' },
    { number: 6, word: 'Six', items: '🍎🍎🍎🍎🍎🍎', emoji: '6️⃣', story: 'Six curls up like a snail!', color: '#DDA0DD', shape: '◐', visual: 'Snail shell' },
    { number: 7, word: 'Seven', items: '🍎🍎🍎🍎🍎🍎🍎', emoji: '7️⃣', story: 'Seven is like a cliff edge!', color: '#98D8C8', shape: '⌐', visual: 'Cliff or axe' },
    { number: 8, word: 'Eight', items: '🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '8️⃣', story: 'Eight looks like a snowman!', color: '#F7DC6F', shape: '∞', visual: 'Snowman or infinity' },
    { number: 9, word: 'Nine', items: '🍎🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '9️⃣', story: 'Nine is six upside down!', color: '#BB8FCE', shape: '◑', visual: 'Upside down 6' },
    { number: 10, word: 'Ten', items: '🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '🔟', story: 'Ten is one and zero together!', color: '#85C1E9', shape: '|○', visual: 'Stick and ball' },
    
    // 11-20 with patterns
    { number: 11, word: 'Eleven', items: '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐', emoji: '1️⃣1️⃣', story: 'Eleven - twin ones standing together!', color: '#F8C471', shape: '||', visual: 'Twin sticks' },
    { number: 12, word: 'Twelve', items: '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟', emoji: '1️⃣2️⃣', story: 'Twelve - one stick and a swan!', color: '#F1948A', shape: '|∿', visual: 'Stick and swan' },
    { number: 13, word: 'Thirteen', items: '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥', emoji: '1️⃣3️⃣', story: 'Thirteen - unlucky number with camel humps!', color: '#AED6F1', shape: '|∿', visual: 'Stick and humps' },
    { number: 14, word: 'Fourteen', items: '💎💎💎💎💎💎💎💎💎💎💎💎💎💎', emoji: '1️⃣4️⃣', story: 'Fourteen - stick and chair together!', color: '#A9DFBF', shape: '|⌐', visual: 'Stick and chair' },
    { number: 15, word: 'Fifteen', items: '🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈', emoji: '1️⃣5️⃣', story: 'Fifteen - stick with hat and belly!', color: '#F39C12', shape: '|⌒', visual: 'Stick and person' },
    
    // 16-20
    { number: 16, word: 'Sixteen', items: '🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯', emoji: '1️⃣6️⃣', story: 'Sixteen - stick and snail!', color: '#E74C3C', shape: '|◐', visual: 'Stick and snail' },
    { number: 17, word: 'Seventeen', items: '🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺', emoji: '1️⃣7️⃣', story: 'Seventeen - stick and cliff!', color: '#9B59B6', shape: '|⌐', visual: 'Stick and cliff' },
    { number: 18, word: 'Eighteen', items: '🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪', emoji: '1️⃣8️⃣', story: 'Eighteen - stick and snowman!', color: '#3498DB', shape: '|∞', visual: 'Stick and snowman' },
    { number: 19, word: 'Nineteen', items: '🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭', emoji: '1️⃣9️⃣', story: 'Nineteen - stick and upside-down snail!', color: '#1ABC9C', shape: '|◑', visual: 'Stick and flipped 6' },
    { number: 20, word: 'Twenty', items: '🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨🎨', emoji: '2️⃣0️⃣', story: 'Twenty - swan and donut!', color: '#F1C40F', shape: '∿○', visual: 'Swan and circle' },
    
    // Key numbers with special patterns
    { number: 25, word: 'Twenty-five', items: '🌸'.repeat(25), emoji: '2️⃣5️⃣', story: 'Twenty-five - quarter of hundred!', color: '#E91E63', shape: '∿⌒', visual: 'Swan with hat' },
    { number: 30, word: 'Thirty', items: '🦋'.repeat(30), emoji: '3️⃣0️⃣', story: 'Thirty - camel and donut!', color: '#FF5722', shape: '∿○', visual: 'Camel and circle' },
    { number: 40, word: 'Forty', items: '🌻'.repeat(40), emoji: '4️⃣0️⃣', story: 'Forty - chair and donut!', color: '#795548', shape: '⌐○', visual: 'Chair and circle' },
    { number: 50, word: 'Fifty', items: '🎵'.repeat(50), emoji: '5️⃣0️⃣', story: 'Fifty - half of hundred!', color: '#607D8B', shape: '⌒○', visual: 'Person and circle' }
  ],
  
  hindi: [
    { number: 0, word: 'शून्य', items: '', emoji: '⭕', story: 'शून्य गोल है जैसे चक्का!', color: '#E8E8E8', shape: '○', visual: 'गोल चक्र' },
    { number: 1, word: 'एक', items: '🍎', emoji: '1️⃣', story: 'एक खड़ा है जैसे सैनिक!', color: '#FF6B6B', shape: '|', visual: 'सीधी लकीर' },
    { number: 2, word: 'दो', items: '🍎🍎', emoji: '2️⃣', story: 'दो हंस की तरह तैरता है!', color: '#4ECDC4', shape: '∿', visual: 'हंस की गर्दन' },
    { number: 3, word: 'तीन', items: '🍎🍎🍎', emoji: '3️⃣', story: 'तीन ऊंट के कूबड़ जैसा!', color: '#45B7D1', shape: '∿', visual: 'ऊंट के कूबड़' },
    { number: 4, word: 'चार', items: '🍎🍎🍎🍎', emoji: '4️⃣', story: 'चार कुर्सी की तरह!', color: '#96CEB4', shape: '⌐', visual: 'कुर्सी का आकार' },
    { number: 5, word: 'पांच', items: '🍎🍎🍎🍎🍎', emoji: '5️⃣', story: 'पांच टोपी और पेट वाला!', color: '#FFEAA7', shape: '⌒', visual: 'टोपी वाला आदमी' },
    { number: 6, word: 'छह', items: '🍎🍎🍎🍎🍎🍎', emoji: '6️⃣', story: 'छह घोंघे की तरह गोल!', color: '#DDA0DD', shape: '◐', visual: 'घोंघे का खोल' },
    { number: 7, word: 'सात', items: '🍎🍎🍎🍎🍎🍎🍎', emoji: '7️⃣', story: 'सात चट्टान की तरह!', color: '#98D8C8', shape: '⌐', visual: 'चट्टान या कुल्हाड़ी' },
    { number: 8, word: 'आठ', items: '🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '8️⃣', story: 'आठ बर्फ के आदमी जैसा!', color: '#F7DC6F', shape: '∞', visual: 'बर्फ का आदमी' },
    { number: 9, word: 'नौ', items: '🍎🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '9️⃣', story: 'नौ उल्टा छह है!', color: '#BB8FCE', shape: '◑', visual: 'उल्टा छह' },
    { number: 10, word: 'दस', items: '🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '🔟', story: 'दस एक और शून्य मिलकर!', color: '#85C1E9', shape: '|○', visual: 'डंडा और गेंद' },
    
    // Key numbers
    { number: 20, word: 'बीस', items: '🌟'.repeat(20), emoji: '2️⃣0️⃣', story: 'बीस हंस और चक्का!', color: '#F1C40F', shape: '∿○', visual: 'हंस और गोला' },
    { number: 50, word: 'पचास', items: '🎵'.repeat(50), emoji: '5️⃣0️⃣', story: 'पचास आधा सौ!', color: '#607D8B', shape: '⌒○', visual: 'आदमी और गोला' },
    { number: 100, word: 'सौ', items: '🎉'.repeat(100), emoji: '💯', story: 'सौ बड़ी खुशी का नंबर!', color: '#F44336', shape: '|○○', visual: 'डंडा और दो गोले' }
  ],
  
  marathi: [
    { number: 0, word: 'शून्य', items: '', emoji: '⭕', story: 'शून्य गोल आहे जसे चक्र!', color: '#E8E8E8', shape: '○', visual: 'गोल वर्तुळ' },
    { number: 1, word: 'एक', items: '🍎', emoji: '1️⃣', story: 'एक उभा आहे जसे सैनिक!', color: '#FF6B6B', shape: '|', visual: 'सरळ रेषा' },
    { number: 2, word: 'दोन', items: '🍎🍎', emoji: '2️⃣', story: 'दोन हंसाच्या गळ्यासारखे!', color: '#4ECDC4', shape: '∿', visual: 'हंसाची मान' },
    { number: 3, word: 'तीन', items: '🍎🍎🍎', emoji: '3️⃣', story: 'तीन उंटाच्या कुबड्यासारखे!', color: '#45B7D1', shape: '∿', visual: 'उंटाचे कुबडे' },
    { number: 4, word: 'चार', items: '🍎🍎🍎🍎', emoji: '4️⃣', story: 'चार खुर्चीसारखे!', color: '#96CEB4', shape: '⌐', visual: 'खुर्चीचा आकार' },
    { number: 5, word: 'पाच', items: '🍎🍎🍎🍎🍎', emoji: '5️⃣', story: 'पाच टोपी आणि पोट असलेला!', color: '#FFEAA7', shape: '⌒', visual: 'टोपी असलेला माणूस' },
    { number: 6, word: 'सहा', items: '🍎🍎🍎🍎🍎🍎', emoji: '6️⃣', story: 'सहा गोगलगायीसारखे!', color: '#DDA0DD', shape: '◐', visual: 'गोगलगायीचे कवच' },
    { number: 7, word: 'सात', items: '🍎🍎🍎🍎🍎🍎🍎', emoji: '7️⃣', story: 'सात कडासारखे!', color: '#98D8C8', shape: '⌐', visual: 'कडा किंवा कुऱ्हाड' },
    { number: 8, word: 'आठ', items: '🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '8️⃣', story: 'आठ बर्फाच्या माणसासारखे!', color: '#F7DC6F', shape: '∞', visual: 'बर्फाचा माणूस' },
    { number: 9, word: 'नऊ', items: '🍎🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '9️⃣', story: 'नऊ उलटे सहा आहे!', color: '#BB8FCE', shape: '◑', visual: 'उलटे सहा' },
    { number: 10, word: 'दहा', items: '🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎', emoji: '🔟', story: 'दहा एक आणि शून्य मिळून!', color: '#85C1E9', shape: '|○', visual: 'काठी आणि चेंडू' },
    
    // Key numbers
    { number: 20, word: 'वीस', items: '🌟'.repeat(20), emoji: '2️⃣0️⃣', story: 'वीस हंस आणि वर्तुळ!', color: '#F1C40F', shape: '∿○', visual: 'हंस आणि गोला' },
    { number: 50, word: 'पन्नास', items: '🎵'.repeat(50), emoji: '5️⃣0️⃣', story: 'पन्नास अर्धे शंभर!', color: '#607D8B', shape: '⌒○', visual: 'माणूस आणि गोला' },
    { number: 100, word: 'शंभर', items: '🎉'.repeat(100), emoji: '💯', story: 'शंभर मोठ्या आनंदाचा नंबर!', color: '#F44336', shape: '|○○', visual: 'काठी आणि दोन गोले' }
  ]
};

