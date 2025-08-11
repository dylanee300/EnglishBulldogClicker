import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Stats from '../Stats/Stats';
import Click from '../Click/Click';
import Upgrades from '../Upgrades/Upgrades';
import Market from '../Market/Market';
import Inventory from '../Inventory/Inventory';
import Shop from '../Shop/Shop';

function Dashboard() {
  const [activePage, setActivePage] = useState('stats');
  const navigate = useNavigate();
  let name = "EnglishBulldogClicker";

  const renderPage = () => {
    switch (activePage) {
      case 'stats': return <Stats />;
      case 'click': return <Click />;
      case 'upgrades': return <Upgrades />;
      case 'market': return <Market />;
      case 'inventory': return <Inventory />;
      case 'shop': return <Shop />;
      default: return <Stats />;
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h1 id="name">{name}</h1>
        <ul className="dashboard-menu">
          <li onClick={() => setActivePage('stats')}><i className="fas fa-chart-line"></i> Stats</li>
          <li onClick={() => setActivePage('click')}><i className="fas fa-hand-pointer"></i> Click</li>
          <li onClick={() => setActivePage('upgrades')}><i className="fas fa-arrow-up"></i> Upgrades</li>
          <li onClick={() => setActivePage('market')}><i className="fas fa-store"></i> Market</li>
          <li onClick={() => setActivePage('inventory')}><i className="fas fa-box-open"></i> Inventory</li>
          <li onClick={() => setActivePage('shop')}><i className="fas fa-shopping-cart"></i> Shop</li>
          <li className="logout" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </li>
        </ul>
      </div>

      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default Dashboard;
