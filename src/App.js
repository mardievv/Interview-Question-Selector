import React, { useState } from 'react';
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  function handleAddQuestion(event) {
    event.preventDefault();
    const inputString = event.target.elements.question.value;
    const newQuestions = inputString.split(",");
    setQuestions(prevQuestions => [...prevQuestions, ...newQuestions]);
    event.target.reset();
  }

  function handleSelectQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setSelectedQuestion(randomQuestion);
  }

  return (
    <div className="App">
      <h1>Interview Question Selector</h1>
      <form onSubmit={handleAddQuestion}>
        <label htmlFor="question">Add questions (separated by commas):</label>
        <textarea id="question" name="question" required></textarea>
        <button type="submit">Add</button>
      </form>
      {questions.length > 0 &&
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      }
      <button onClick={handleSelectQuestion} disabled={questions.length === 0}>
        Select a Question
      </button>
      {selectedQuestion && <h2>{selectedQuestion}</h2>}
    </div>
  );
}

export default App;
