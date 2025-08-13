import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import doggie from '../../assets/EnglishBullDog.png';
import doggie2 from '../../assets/alttdoggie.png';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-wrapper">
      <h1 id="main">EnglishBulldogClicker</h1>
      <button id="Discord" onClick={() => window.open('https://discord.com/channels/1401646351942549605/1401646352777089148')}>
        <FontAwesomeIcon icon={faDiscord} /> Discord
      </button>
      <button id="Login" onClick={() => navigate('/login')}>
        Login
      </button>

      <div className="doggie-wrapper">
        <img src={doggie} alt="doggie" id="doggie" draggable="false" />
        <img src={doggie2} alt="doggie" id="doggie2" draggable="false" />
      </div>

      <h3 id="info">EnglishBulldogClicker is the first ever English Bulldog clicker game!<br /> 
      Completely open sourced, written in ReactJs, made by Dylan.
      </h3>

      <footer>
        <p id="footerC">© 2025 EnglishBulldogClicker</p>
      </footer>

    </div>
  );
}

// TODO: Come back to this later since it looks kinda ass, just wanna get it all done then polish later.


export default Home;
