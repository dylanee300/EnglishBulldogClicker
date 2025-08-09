import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handlePlayClick = () => setShowLogin(true);


  return (
    <div>
      {showLogin ? (
        <Login />
      ) : (
        <Home onLogin={handleLoginClick} onPlay={handlePlayClick} />
      )}
    </div>
  );
}

export default App;