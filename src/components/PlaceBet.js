import React, { useState, useEffect } from "react";
import axios from "axios";

const PlaceBet = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [userId] = useState("user_id_here"); // Replace 'user_id_here' with actual user ID or fetch from context

  useEffect(() => {
    axios
      .get("/api/questions") // Adjust if your endpoint differs
      .then((response) => setQuestions(response.data))
      .catch((error) =>
        console.error("There was an error retrieving the question data:", error)
      );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/bets/place", {
        userId,
        questionId: selectedQuestion,
        amount,
        selectedOption,
      })
      .then((response) => {
        console.log(response.data);
        // Optionally, add code to update UI or redirect
      })
      .catch((error) =>
        console.error("There was an error placing the bet:", error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Place Bet</h2>
      <label>
        Question:
        <select
          value={selectedQuestion}
          onChange={(e) => setSelectedQuestion(e.target.value)}
        >
          <option value="">Select a Question</option>
          {questions.map((question) => (
            <option key={question._id} value={question._id}>
              {question.content}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Bet Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Your Answer:
        <input
          type="text"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Place Bet</button>
    </form>
  );
};

export default PlaceBet;
