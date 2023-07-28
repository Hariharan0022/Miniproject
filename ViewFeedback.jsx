import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewFeedback.css"; // Import the CSS file for styling

const ViewFeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetch feedback data using axios.get
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/g");
        setFeedbackData(response.data);
      } catch (error) {
        console.error("Failed to fetch feedback data", error);
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <div className="feedback-display-container">
      <h1>Feedback Received</h1>
      {feedbackData.length === 0 ? (
        <p>No feedback received yet.</p>
      ) : (
        <ul>
          {feedbackData.map((feedback, index) => (
            <li key={index} className="feedback-item">
              <strong>Name:</strong> {feedback.username}<br />
              <strong>Email:</strong> {feedback.email}<br />
              <strong>Feedback :</strong> {feedback.feedback}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewFeedback;