// Feedback.js
import React, { useState } from 'react';
import './Feedback.css'; // Importing the custom CSS

const Feedback = () => {
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted.");
    setSubmittedFeedback(true); // Set feedback as submitted
  };

  return (
    <div className="feedback-form">
      <h3>Feedback</h3>
      {submittedFeedback ? (
        <div className="thank-you-message">
          <h1>Thank You!</h1>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleFeedbackSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />

          <label htmlFor="rating">Rate us (1 to 5):</label>
          <select id="rating" name="rating" required>
            <option value="" disabled selected>
              Select rating
            </option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>

          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            required
            placeholder="Share your feedback"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
