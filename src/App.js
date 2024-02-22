import React, { useState } from 'react';
import './index'; // Import your CSS file for styling

const questions = [
  {
    questionText: 'If you were a color, which one would you be?',
    answerOptions: [
      { answerText: 'Vibrant Red', result: 'UX Researcher', resultDesc: 'Your bold and dynamic personality aligns with the inquisitive nature of a UX researcher.' },
      { answerText: 'Mysterious Purple', result: 'UX Strategist', resultDesc: 'Your strategic and visionary approach resonates with the enigmatic allure of a UX strategist.' },
      { answerText: 'Harmonious Blue', result: 'UX Designer', resultDesc: 'Your creativity and empathy reflect the soothing and harmonious qualities of a UX designer.' },
      { answerText: 'Eccentric Yellow', result: 'UX Storyteller', resultDesc: 'Your imaginative and expressive nature matches the vibrant and eccentric storytelling style of a UX storyteller.' },
    ],
  },
  {
    questionText: 'If you could live in any era, which one would you choose?',
    answerOptions: [
      { answerText: 'Ancient Rome', result: 'UX Researcher', resultDesc: 'Your curiosity about human behavior and societies makes ancient Rome an intriguing era for exploration.' },
      { answerText: 'Roaring Twenties', result: 'UX Strategist', resultDesc: 'Your fascination with innovation and societal change aligns with the dynamic energy of the Roaring Twenties.' },
      { answerText: 'Swinging Sixties', result: 'UX Designer', resultDesc: 'Your appreciation for creativity and design flourishes in the free-spirited and colorful atmosphere of the Swinging Sixties.' },
      { answerText: 'Cyberpunk Future', result: 'UX Storyteller', resultDesc: 'Your love for futuristic narratives and technological advancements draws you to the gritty and immersive world of a cyberpunk future.' },
    ],
  },
  {
    questionText: 'If you were a mythical creature, which one would you be?',
    answerOptions: [
      { answerText: 'Wise Dragon', result: 'UX Researcher', resultDesc: 'Your analytical mind and thirst for knowledge embody the wisdom and intellect of a wise dragon.' },
      { answerText: 'Strategic Phoenix', result: 'UX Strategist', resultDesc: 'Your ability to rise from challenges and reinvent strategies reflects the resilience and strategic prowess of a phoenix.' },
      { answerText: 'Creative Unicorn', result: 'UX Designer', resultDesc: 'Your boundless imagination and innovative spirit mirror the rarity and magic of a creative unicorn.' },
      { answerText: 'Storytelling Sphinx', result: 'UX Storyteller', resultDesc: 'Your enigmatic charm and captivating storytelling skills resonate with the mysterious and wise nature of a storytelling sphinx.' },
    ],
  },
  {
    questionText: 'What is your communication style?',
    answerOptions: [
      { answerText: 'Precise and analytical', result: 'UX Researcher', resultDesc: 'You communicate in a precise and analytical manner, presenting findings and insights backed by data.' },
      { answerText: 'Strategic and persuasive', result: 'UX Strategist', resultDesc: 'Your communication style is strategic and persuasive, as you articulate ideas and strategies to stakeholders effectively.' },
      { answerText: 'Creative and visually engaging', result: 'UX Designer', resultDesc: 'You express yourself in a creative and visually engaging way, using design elements to communicate ideas and concepts.' },
      { answerText: 'Emotive and narrative-driven', result: 'UX Storyteller', resultDesc: 'You communicate in an emotive and narrative-driven manner, captivating audiences with compelling stories and narratives.' },
    ],
  },
  {
    questionText: 'What motivates you in your work?',
    answerOptions: [
      { answerText: 'Discovering user insights', result: 'UX Researcher', resultDesc: 'You are driven by the opportunity to uncover user insights and contribute to meaningful product improvements.' },
      { answerText: 'Developing innovative solutions', result: 'UX Strategist', resultDesc: 'You are motivated by the challenge of developing innovative solutions to complex problems.' },
      { answerText: 'Creating delightful user experiences', result: 'UX Designer', resultDesc: 'You are passionate about creating delightful user experiences through intuitive design.' },
      { answerText: 'Telling compelling stories', result: 'UX Storyteller', resultDesc: 'You find motivation in the power of storytelling to connect with users and communicate ideas effectively.' },
    ],
  },
  {
    questionText: 'How do you stay updated on current trends?',
    answerOptions: [
      { answerText: 'Read research papers and articles', result: 'UX Researcher', resultDesc: 'You stay updated on UX trends by reading research papers and articles on user behavior and UX methodologies.' },
      { answerText: 'Attend industry conferences and webinars', result: 'UX Strategist', resultDesc: 'You attend industry conferences and webinars to stay informed about emerging trends and best practices in UX strategy.' },
      { answerText: 'Follow design blogs and forums', result: 'UX Designer', resultDesc: 'You follow design blogs and forums to stay inspired and informed about the latest design trends and techniques.' },
      { answerText: 'Engage with storytelling communities', result: 'UX Storyteller', resultDesc: 'You engage with storytelling communities to explore new narrative techniques and storytelling approaches.' },
    ],
  },
  {
    questionText: 'How do you approach collaboration with others?',
    answerOptions: [
      { answerText: 'I enjoy collaborating and value diverse perspectives', result: 'UX Researcher', resultDesc: 'You enjoy collaborating with other team members and value diverse perspectives, which enrich the research process and lead to better outcomes.' },
      { answerText: 'I focus on aligning strategies and goals with team members', result: 'UX Strategist', resultDesc: 'You focus on aligning strategies and goals with other team members, ensuring that everyone is working towards a common vision.' },
      { answerText: 'I collaborate closely with designers to bring ideas to life', result: 'UX Designer', resultDesc: 'You collaborate closely with designers to bring ideas to life, leveraging your design skills and creativity to achieve desired outcomes.' },
      { answerText: 'I work with storytellers to craft narratives that resonate with users', result: 'UX Storyteller', resultDesc: 'You work with storytellers to craft narratives that resonate with users, integrating storytelling elements into the design process to create engaging experiences.' },
    ],
  },
];

function PersonalityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedResult) => {
    console.log('Selected Result:', selectedResult); // Log the selected result
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
    setResult(selectedResult);
  };

  return (
    <div className='app'>
      {showResult ? (
        <div className='result-section'>
          <h2>You are a {result}!</h2>
          <p>{questions.find(q => q.answerOptions.find(a => a.result === result)).answerOptions.find(a => a.result === result).resultDesc}</p>
          <button onClick={() => window.location.reload(false)}>Restart Quiz</button>
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
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.result)}>
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
