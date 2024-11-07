// Procedure.js
import React from 'react';
import './Procedure.css'; // Import CSS specific to the procedure page

const Procedure = () => {
  return (
    <div className="procedure-content">
      <h3>Procedure</h3>
      <p>Follow these steps to complete the experiment:</p>
      <ol>
        <li>
          <strong>Read Simulator Details:</strong> Understand the purpose and operations available.
        </li>
        <li>
          <strong>Enter Values:</strong> Input the required values in the correct format.
        </li>
        <li>
          <strong>Select Operation:</strong> Choose the desired operation from the list.
        </li>
        <li>
          <strong>Press CALCULATE:</strong> Initiate the calculation with your inputs.
        </li>
        <li>
          <strong>Press NEXT:</strong> View the execution of the code for your operation.
        </li>
        <li>
          <strong>Observe Code Highlighting:</strong> Relevant lines will be highlighted during execution.
        </li>
        <li>
          <strong>Check Output Panel:</strong> View local variables and their values as the code runs.
        </li>
      </ol>
    </div>
  );
};

export default Procedure;
