import React, { useState } from 'react';
import './Pretest.css'; // Link your CSS here

const Pretest = () => {
  const questions = [
    {
      question: "Which module is used in Node.js to work with the file system?",
      options: ["http", "path", "fs", "express"],
      correctAnswer: 2, // 'fs' is at index 2
    },
    {
      question: "Which method is used to read a file asynchronously in Node.js?",
      options: ["fs.readFileSync()", "fs.readFile()", "fs.read()", "fs.readAsync()"],
      correctAnswer: 1, // 'fs.readFile()' is at index 1
    },
    {
      question: "What does the fs.writeFile() method do in Node.js?",
      options: [
        "It reads the contents of a file.",
        "It appends data to a file.",
        "It deletes a file.",
        "It writes data to a file, replacing any existing content.",
      ],
      correctAnswer: 3, // 'It writes data...' is at index 3
    },
    {
      question: "Which method would you use to check if a file exists in Node.js?",
      options: ["fs.fileExists()", "fs.existsSync()", "fs.readFileSync()", "fs.exists()"],
      correctAnswer: 1, // 'fs.existsSync()' is at index 1
    },
    {
      question: "Which of the following methods is used to create a directory in Node.js?",
      options: ["fs.mkdir()", "fs.createDir()", "fs.writeDir()", "fs.newDir()"],
      correctAnswer: 0, // 'fs.mkdir()' is at index 0
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: optionIndex });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const score = Object.keys(userAnswers).filter(
    (questionIndex) =>
      userAnswers[questionIndex] === questions[questionIndex].correctAnswer
  ).length;

  return (
    <div className="quiz-container">
      <h2 className="heading">Node.js File System Pre-Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h3 className="question-text">{question.question}</h3>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-block">
                <label
                  className={`option-label ${
                    submitted &&
                    userAnswers[questionIndex] === optionIndex &&
                    optionIndex !== question.correctAnswer
                      ? 'incorrect-option'
                      : submitted && optionIndex === question.correctAnswer
                      ? 'correct-option'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                    disabled={submitted}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {!submitted ? (
          <button type="submit" className="submit-button">
            Submit Quiz
          </button>
        ) : (
          <div className="score-block">
            <h4>
              Your score: {score} out of {questions.length}
            </h4>
          </div>
        )}
      </form>
    </div>
  );
};

export default Pretest;
