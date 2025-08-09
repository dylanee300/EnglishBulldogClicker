import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div>
      <h1 id="main">EnglishBulldogClicker</h1>
      <button id="login">Login</button>
      <button id="discord">
        <FontAwesomeIcon icon={faDiscord} /> Discord
      </button>
    </div>
  );
}

export default Home;