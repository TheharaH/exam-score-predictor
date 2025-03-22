import React, { useState } from "react";
import './App.css'; // Importing the updated CSS file

function ExamPredictor() {
  const [G1, setG1] = useState("");
  const [G2, setG2] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ G1: parseFloat(G1), G2: parseFloat(G2) }),
    });

    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <div>
      <header>
        Exam Score Predictor
      </header>
      <main>
        {/* Removed Image */}
        <form onSubmit={handleSubmit}>
          <label>
            Enter your exam 1 marks:
            <input
              type="number"
              value={G1}
              onChange={(e) => setG1(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Enter your exam 2 marks:
            <input
              type="number"
              value={G2}
              onChange={(e) => setG2(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Predict Final Grade</button>
        </form>
        {prediction !== null && (
          <h3 className="fade-in">Predicted Final Grade: {prediction.toFixed(1)}</h3>
        )}
      </main>
      <footer>
        © 2025 Exam Predictor. All Rights Reserved.
      </footer>
    </div>
  );
}

export default ExamPredictor;
