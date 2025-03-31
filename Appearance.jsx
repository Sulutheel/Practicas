import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from '../components/English.module.css';

import calvo from '../photos/calvo.png';
import blonde from '../photos/blonde.png';
import bajo from '../photos/bajo.png';
import bigote from '../photos/bigote.png';
import delgadamediana from '../photos/delgadamediana.png';
import delgadocorpulento from '../photos/delgadocorpulento.png';
import mujerliso from '../photos/mujerliso.png';
import ojosazules from '../photos/ojosazules.png';
import peliroja from '../photos/peliroja.png';

const questions = [
  {
    question: "She has curly red hair.",
    options: [
      { src: calvo, alt: "calvo", id: 0 },
      { src: blonde, alt: "blonde", id: 0 },
      { src: bajo, alt: "bajo", id: 0 },
      { src: bigote, alt: "bigote", id: 0 },
      { src: delgadamediana, alt: "delgadamediana", id: 0 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 0 },
      { src: mujerliso, alt: "mujerliso", id: 0 },
      { src: ojosazules, alt: "ojosazules", id: 0 },
      { src: peliroja, alt: "peliroja", id: 1 }, 
    ],
    answerId: 1, 
  },
  {
    question: "She has long straight hair.",
    options: [
      { src: calvo, alt: "calvo", id: 0 },
      { src: blonde, alt: "blonde", id: 0 },
      { src: bajo, alt: "bajo", id: 0 },
      { src: bigote, alt: "bigote", id: 0 },
      { src: delgadamediana, alt: "delgadamediana", id: 0 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 0 },
      { src: mujerliso, alt: "mujerliso", id: 1 },
      { src: ojosazules, alt: "ojosazules", id: 0 },
      { src: peliroja, alt: "peliroja", id: 0 }, 
    ],
    answerId: 1, 
  },
  {
    question: "She has big blue eyes.",
    options: [
      { src: calvo, alt: "calvo", id: 0 },
      { src: blonde, alt: "blonde", id: 0 },
      { src: bajo, alt: "bajo", id: 0 },
      { src: bigote, alt: "bigote", id: 0 },
      { src: delgadamediana, alt: "delgadamediana", id: 0 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 0 },
      { src: mujerliso, alt: "mujerliso", id: 0 },
      { src: ojosazules, alt: "ojosazules", id: 1 },
      { src: peliroja, alt: "peliroja", id: 0 }, 
    ],
    answerId: 1, 
  },
  {
    question: "She has short blonde hair.",
    options: [
      { src: calvo, alt: "calvo", id: 0 },
      { src: blonde, alt: "blonde", id: 1 },
      { src: bajo, alt: "bajo", id: 0 },
      { src: bigote, alt: "bigote", id: 0 },
      { src: delgadamediana, alt: "delgadamediana", id: 0 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 0 },
      { src: mujerliso, alt: "mujerliso", id: 0 },
      { src: ojosazules, alt: "ojosazules", id: 0 },
      { src: peliroja, alt: "peliroja", id: 0}, 
    ],
    answerId: 1, 
  },
  {
    question: "He has a beard and a moustache",
    options: [
      { src: calvo, alt: "calvo", id: 0 },
      { src: blonde, alt: "blonde", id: 0 },
      { src: bajo, alt: "bajo", id: 0 },
      { src: bigote, alt: "bigote", id: 1 },
      { src: delgadamediana, alt: "delgadamediana", id: 0 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 0 },
      { src: mujerliso, alt: "mujerliso", id: 0 },
      { src: ojosazules, alt: "ojosazules", id: 0 },
      { src: peliroja, alt: "peliroja", id: 0}, 
    ],
    answerId: 1, 
  },
  {
    question: "He´s bald",
    options: [
      { src: calvo, alt: "calvo", id: 1 },
      { src: blonde, alt: "blonde", id: 0 },
      { src: bajo, alt: "bajo", id: 0 },
      { src: bigote, alt: "bigote", id: 0 },
      { src: delgadamediana, alt: "delgadamediana", id: 0 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 0 },
      { src: mujerliso, alt: "mujerliso", id: 0 },
      { src: ojosazules, alt: "ojosazules", id: 0 },
      { src: peliroja, alt: "peliroja", id: 0 }, 
    ],
    answerId: 1, 
  },
  {
    question: "He´s very tall and thin",
    options: [
      { src: calvo, alt: "calvo", id: 0 },
      { src: blonde, alt: "blonde", id: 0 },
      { src: bajo, alt: "bajo", id: 0 },
      { src: bigote, alt: "bigote", id: 0 },
      { src: delgadamediana, alt: "delgadamediana", id: 1 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 0 },
      { src: mujerliso, alt: "mujerliso", id: 0 },
      { src: ojosazules, alt: "ojosazules", id: 0 },
      { src: peliroja, alt: "peliroja", id: 0 }, 
    ],
    answerId: 1, 
  },
  {
    question: "He´s medium height and very slim.",
    options: [
      { src: calvo, alt: "calvo", id: 0 },
      { src: blonde, alt: "blonde", id: 0 },
      { src: bajo, alt: "bajo", id: 0 },
      { src: bigote, alt: "bigote", id: 0 },
      { src: delgadamediana, alt: "delgadamediana", id: 0 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 1 },
      { src: mujerliso, alt: "mujerliso", id: 0 },
      { src: ojosazules, alt: "ojosazules", id: 0 },
      { src: peliroja, alt: "peliroja", id: 0 }, 
    ],
    answerId: 1, 
  },
  {
    question: "He´s quite short and a bit overweight",
    options: [
      { src: calvo, alt: "calvo", id: 0 },
      { src: blonde, alt: "blonde", id: 0 },
      { src: bajo, alt: "bajo", id: 1 },
      { src: bigote, alt: "bigote", id: 0 },
      { src: delgadamediana, alt: "delgadamediana", id: 0 },
      { src: delgadocorpulento, alt: "delgadocorpulento", id: 0 },
      { src: mujerliso, alt: "mujerliso", id: 0 },
      { src: ojosazules, alt: "ojosazules", id: 0 },
      { src: peliroja, alt: "peliroja", id: 0 }, 
    ],
    answerId: 1, 
  },
];

const Appearance = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);

    if (option.id === questions[currentQuestionIndex].answerId) {
      setScore(score + 1);
      speak("Correct answer!");
    } else {
      speak("Incorrect answer, try again.");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
      speak(`Quiz finished! Your score is ${score} out of ${questions.length}.`);
    }
  };

  return (
    <div className="quiz-container">
      <h1>APPEARANCE</h1>
      <h2>What does he/she look like?</h2>
      <p> Match the sentences and photos.</p>
      {quizFinished ? (
        <div>
          <h2>Quiz Complete!👌</h2>
          <p>Your final score: {score}</p>
          <button onClick={() => window.location.reload()}>Start New Quiz</button>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
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
                <img src={option.src} alt={option.alt} />
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
    </div>
  );
};

export default Appearance;


