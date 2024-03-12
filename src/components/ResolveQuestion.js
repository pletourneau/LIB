import React, { useState } from "react";
import axios from "axios";

const ResolveQuestion = () => {
  const [questionId, setQuestionId] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("/api/questions/resolve", {
        questionId,
        correctAnswer,
      })
      .then((response) => {
        console.log(response.data);
        // Optionally, add code to update UI or provide feedback
      })
      .catch((error) =>
        console.error("There was an error resolving the question:", error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Resolve Question</h2>
      <label>
        Question ID:
        <input
          type="text"
          value={questionId}
          onChange={(e) => setQuestionId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Correct Answer:
        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Resolve Question</button>
    </form>
  );
};

export default ResolveQuestion;
