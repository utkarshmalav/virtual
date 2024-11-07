// src/Theory.js
import React from 'react';
import './Aim.css'; // Import CSS specific to Theory component

const Theory = () => {
  return (
    <div className="theory-container">
      <h2 className="theory-heading">Theory of Node.js File System Module</h2>
      <p>
        The Node.js File System (`fs`) module allows interaction with the file system on your machine. It offers 
        both **synchronous** and **asynchronous** methods for working with files, such as reading, writing, and deleting.
      </p>
      <ol className="theory-list">
        <li>
          <strong>Reading Files:</strong> Use the `fs.readFile()` method to asynchronously read a file’s content.
        </li>
        <li>
          <strong>Writing to Files:</strong> Use `fs.writeFile()` to write or overwrite content in a file.
        </li>
        <li>
          <strong>Appending to Files:</strong> With `fs.appendFile()`, you can add new content to an existing file.
        </li>
        <li>
          <strong>Deleting Files:</strong> Remove unwanted files using `fs.unlink()`.
        </li>
        <li>
          <strong>Handling Paths:</strong> Use the `path` module to create cross-platform file paths.
        </li>
      </ol>
      <p>
        These operations are essential for backend developers as they help in managing files efficiently in 
        server-side applications. Understanding the `fs` module will also enable developers to work on features 
        like logging, file-based storage, and configuration management.
      </p>
    </div>
  );
};

export default Theory;
