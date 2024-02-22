import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling

const questions = [
  {
    questionText: 'You find yourself in a forest. Which path do you take?',
    answerOptions: [
      { answerText: 'The path bathed in moonlight', result: 'UX Researcher', resultDesc: 'You choose to explore the unknown and seek answers even in the darkest of places.' },
      { answerText: 'The path shrouded in mist', result: 'UX Strategist', resultDesc: 'You navigate the fog of uncertainty with confidence, ready to uncover hidden opportunities.' },
      { answerText: 'The path lined with ancient ruins', result: 'UX Designer', resultDesc: 'You are drawn to the remnants of the past, inspired to create something new from the old.' },
      { answerText: 'The path guarded by mythical creatures', result: 'UX Storyteller', resultDesc: 'You embrace the fantastical and weave tales of adventure and wonder.' },
    ],
  },
  {
    questionText: 'In a room full of mirrors, what do you see?',
    answerOptions: [
      { answerText: 'Reflections of past selves', result: 'UX Researcher', resultDesc: 'You reflect on past experiences and learn from them to shape your future.' },
      { answerText: 'Infinite possibilities', result: 'UX Strategist', resultDesc: 'You see endless potential and devise strategies to turn possibilities into reality.' },
      { answerText: 'Visions of alternate realities', result: 'UX Designer', resultDesc: 'You imagine different worlds and bring them to life through design and creativity.' },
      { answerText: 'Echoes of untold stories', result: 'UX Storyteller', resultDesc: 'You hear whispers of tales waiting to be told, each mirror reflecting a different narrative.' },
    ],
  },
  {
    questionText: 'If you could speak any language, what would it be?',
    answerOptions: [
      { answerText: 'The language of the stars', result: 'UX Researcher', resultDesc: 'You seek to understand the cosmos and unravel the mysteries of the universe.' },
      { answerText: 'The language of symbols', result: 'UX Strategist', resultDesc: 'You decipher hidden meanings and use symbols to communicate complex ideas.' },
      { answerText: 'The language of nature', result: 'UX Designer', resultDesc: 'You find inspiration in the world around you, using nature\'s language to design meaningful experiences.' },
      { answerText: 'The language of dreams', result: 'UX Storyteller', resultDesc: 'You explore the subconscious and give voice to the subconscious through storytelling.' },
    ],
  },
  {
    questionText: 'What lies at the end of the rainbow?',
    answerOptions: [
      { answerText: 'A pot of gold', result: 'UX Researcher', resultDesc: 'You chase after knowledge and seek to uncover the treasures of the mind.' },
      { answerText: 'A gateway to another realm', result: 'UX Strategist', resultDesc: 'You embark on journeys of discovery, crossing boundaries to explore new territories.' },
      { answerText: 'A canvas waiting to be painted', result: 'UX Designer', resultDesc: 'You see endless possibilities and use color to create vibrant experiences.' },
      { answerText: 'A story yet to be told', result: 'UX Storyteller', resultDesc: 'You find magic in the mundane and turn everyday moments into epic tales.' },
    ],
  },
  {
    questionText: 'If you could possess any superpower, what would it be?',
    answerOptions: [
      { answerText: 'Telepathy', result: 'UX Researcher', resultDesc: 'You delve into the minds of others, seeking insights and understanding.' },
      { answerText: 'Teleportation', result: 'UX Strategist', resultDesc: 'You navigate the world with ease, moving swiftly to seize opportunities.' },
      { answerText: 'Shape-shifting', result: 'UX Designer', resultDesc: 'You transform ideas into reality, adapting to meet the needs of the user.' },
      { answerText: 'Time manipulation', result: 'UX Storyteller', resultDesc: 'You manipulate time and space, weaving tales that transcend reality.' },
    ],
  },
  {
    questionText: 'What do you see in the clouds?',
    answerOptions: [
      { answerText: 'Figures of mythical creatures', result: 'UX Researcher', resultDesc: 'You find inspiration in the fantastical, drawing insights from the imagination.' },
      { answerText: 'Patterns and shapes', result: 'UX Strategist', resultDesc: 'You discern hidden patterns and connections, piecing together the bigger picture.' },
      { answerText: 'Dreams waiting to be realized', result: 'UX Designer', resultDesc: 'You envision new possibilities and bring them to life through design.' },
      { answerText: 'Stories waiting to be told', result: 'UX Storyteller', resultDesc: 'You hear whispers of tales drifting through the sky, each cloud a canvas for storytelling.' },
    ],
  },
  {
    questionText: 'If you were a constellation, which one would you be?',
    answerOptions: [
      { answerText: 'Orion', result: 'UX Researcher', resultDesc: 'You blaze a trail through the darkness, guiding others with your insight and wisdom.' },
      { answerText: 'Ursa Major', result: 'UX Strategist', resultDesc: 'You navigate the night sky with confidence, charting a course for success.' },
      { answerText: 'Cassiopeia', result: 'UX Designer', resultDesc: 'You shine bright and bold, illuminating the path ahead with your creativity.' },
      { answerText: 'Cygnus', result: 'UX Storyteller', resultDesc: 'You soar through the heavens, weaving tales that capture the imagination.' },
    ],
  },
];

function PersonalityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState('');
  const [resultDesc, setResultDesc] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedResult, selectedResultDesc) => {
    setResult(selectedResult);
    setResultDesc(selectedResultDesc);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setResult('');
    setResultDesc('');
    setShowResult(false);
  };

  return (
    <div className='app'>
      {showResult ? (
        <div className='result-section'>
          <h2>You are a {result}!</h2>
          <p>{resultDesc}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.result, answerOption.resultDesc)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PersonalityQuiz;
