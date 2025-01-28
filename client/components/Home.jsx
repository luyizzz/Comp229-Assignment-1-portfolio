/* 
* File Name: Home.jsx
* Student Name: Louis| LU-HSIANG WANG
* Student ID: 301476880 
* Date: January 29, 2025 
*/

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    // html
    <div>
      <h2>Welcome to Louis's Portfolio</h2>
      <p>Click on the links above to learn more about me</p>
      <div>
        <Link to="/project">
          <button>See My Projects</button>
        </Link>
        <Link to="/about">
          <button>Know More About Me</button>
        </Link>
      </div>
    </div>
    // html
  );
}