import React from 'react';
import './Home.css';
import doggie from '../../assets/EnglishBullDog.png';
import doggie2 from '../../assets/alttdoggie.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


function Home({ onLogin, onPlay }) {
  return (
    <div className="home-wrapper">
      <h1 id="main">EnglishBulldogClicker</h1>
      <button id="login" onClick={onLogin}>Login</button>

      <button 
        id="discord"
        onClick={() => window.location.href = "https://discord.com/channels/1401646351942549605/1401646352777089148"}
      >
        <FontAwesomeIcon icon={faDiscord} /> Discord
      </button>

      <img src={doggie} alt="doggie" id="doggie" draggable="false" />
      <img src={doggie2} alt="doggie" id="doggie2" draggable="false" />
      
      <button id="play" onClick={onPlay}>Play!</button>
      <p>
        EnglishBulldogClicker is the first ever English Bulldog Clicker game out there.<br /> 
        Written in ReactJS, made by Dylan.
      </p>
    </div>
  );
}

// TODO: Come back to this later since it looks kinda ass, just wanna get it all done then polish later.

export default Home;
