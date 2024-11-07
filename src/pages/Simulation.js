import React, { useState } from 'react';
import './Simulation.css'; // Importing CSS for styling

function Simulation() {
  const [fileName, setFileName] = useState('');
  const [content, setContent] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = async (e) => {
    e.preventDefault();
    if (!fileName || !operation) {
      setResult('Please enter a file name and select an operation.');
      return;
    }

    const requestBody = { fileName, content };
    let apiUrl = `http://localhost:5000/${operation}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });
      const data = await response.json();
      setResult(data.message);
    } catch (error) {
      setResult('Error occurred while performing the operation.');
    }
  };

  return (
    <div className="simulation-container">
      {/* Input Section */}
      <div className="input-section">
        <h2>Input</h2>
        <form onSubmit={handleOperation}>
          <div className="form-group">
            <label>File Name:</label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter file name"
              required
            />
          </div>

          <div className="form-group">
            <label>Content (for write operation):</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              placeholder="Leave blank for other operations"
            />
          </div>

          <div className="form-group">
            <label>Select Operation:</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              required
            >
              <option value="">-- Select Operation --</option>
              <option value="create">Create File</option>
              <option value="read">Read File</option>
              <option value="write">Write to File</option>
              <option value="delete">Delete File</option>
            </select>
          </div>

          <button type="submit" className="execute-button">Execute</button>
        </form>
      </div>

      {/* Steps to Execution Section */}
      <div className="steps-section">
        <h2>Steps to Execution</h2>
        <p>1. Enter the file name in the input field.</p>
        <p>2. Optionally, provide content if you are writing to a file.</p>
        <p>3. Choose the operation (Create, Read, Write, or Delete).</p>
        <p>4. Click the "Execute" button to perform the operation.</p>
        <p>5. The result of the operation will be displayed on the output section.</p>
      </div>

      {/* Output Section */}
      <div className="output-section">
        <h2>Output</h2>
        <div className="result-box">
          {result ? <p>{result}</p> : <p>No operation performed yet.</p>}
        </div>
      </div>
    </div>
  );
}

export default Simulation;
