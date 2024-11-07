import React from 'react';
import { Typography, Link } from '@mui/material';

const References = () => (
  <div>
    <Typography variant="h4">References</Typography>
    
    <Typography paragraph>
      Here are some useful resources to learn more about the Node.js File System:
    </Typography>
    <ul>
      <li>
        <Link href="https://www.geeksforgeeks.org/node-js-file-system/" target="_blank" rel="noopener noreferrer">
          GeeksforGeeks: Node.js fs Module
        </Link>
      </li>
      <li>
        <Link href="https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm" target="_blank" rel="noopener noreferrer">
          TutorialsPoint: Node.js File System
        </Link>
      </li>
      <li>
        <Link href="https://nodejs.org/api/fs.html" target="_blank" rel="noopener noreferrer">
          Official Node.js Documentation: File System
        </Link>
      </li>
      <li>
        <Link href="https://www.w3schools.com/nodejs/nodejs_filesystem.asp" target="_blank" rel="noopener noreferrer">
          W3Schools: Node.js File System
        </Link>
      </li>
    </ul>
  </div>
);

export default References;
