import React, { useState } from "react";

const questions = [
  {
    question: "A person who is open and warm is?",
    options: ["clever", "funny", "friendly", "generous", "kind", "lazy", "shy", "talkative"],
    answer: "friendly",
  },
  {
    question: "A person who talks a lot is ?",
    options: ["clever", "funny", "friendly", "generous", "kind", "lazy", "shy", "talkative"],
    answer: "talkative",
  },
  {
    question: "A person who likes giving people thing is ?",
    options: ["clever", "funny", "friendly", "generous", "kind", "lazy", "shy", "talkative"],
    answer: "generous",
  },
  {
    question: "A person who is friendly and good to other people is ?",
    options: ["clever", "funny", "friendly", "generous", "kind", "lazy", "shy", "talkative"],
    answer: "kind",
  },
  {
    question: "A person who doesn´t want to work is?",
    options: ["clever", "funny", "friendly", "generous", "kind", "lazy", "shy", "talkative"],
    answer: "lazy",
  },
  {
    question: "A person who makes people laugh is?",
    options: ["clever", "funny", "friendly", "generous", "kind", "lazy", "shy", "talkative"],
    answer: "funny",
  },
  {
    question: "A person who is quick at learning and understanding things is ?",
    options: ["clever", "funny", "friendly", "generous", "kind", "lazy", "shy", "talkative"],
    answer: "clever",
  },
  {
    question: "A person who can´t talk easily to people he / she doesn´t know is ?",
    options: ["clever", "funny", "friendly", "generous", "kind", "lazy", "shy", "talkative"],
    answer: "shy",
  },
];

const English = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      speak("Correct answer!");
    } else {
      speak("Incorrect answer, try again.");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      setQuizFinished(true);
      speak(`Quiz finished! Your score is ${score} out of ${questions.length}.`);
    }
  };

  return (
    
    <div className="quiz-container">
        <h1>ENGLISH TEST</h1>
        <img src="niños.jpg" alt="niños.jpg"/>
      <h2>PERSONALITY What´s he / she like?</h2>
      <p> Match the adjectives to the definitions.</p>
      {quizFinished ? (
        <div>
          <h2>Quiz Complete!👌</h2>
          <p>Your final score: {score}</p>
          <button onClick={() => window.location.reload()}>Start New Quiz</button>
        </div>
      ) : (
        <div>
          <h3 >{questions[currentQuestionIndex].question}</h3>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                aria-pressed={selectedAnswer === option ? "true" : "false"}
                style={{
                  backgroundColor: selectedAnswer === option ? "green" : "",
                  color: selectedAnswer === option ? "white" : "",
                }}
                tabIndex="0"
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            tabIndex="0"
          >
            Next Question
          </button>
        </div>
      )}
      {
    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '67e6d263a64cae9480b974a1' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: "https://runtime-api.voiceflow.com"
            }
          });
        }
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script')
 }
    </div>
    
  );
};

export default English;
