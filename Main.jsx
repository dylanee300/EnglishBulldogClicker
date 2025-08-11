import React from 'react';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Dashboard() {

    let name = "EnglishBulldogClicker"

  return (

    <div className="dashboard">
      <h1>{name}</h1>
      <ul className="dashboard-menu">
        <li id="stats"><i className="fas fa-chart-line"></i> Stats</li>
        <li id="click"><i className="fas fa-hand-pointer"></i> Click</li>
        <li id="upgrades"><i className="fas fa-arrow-up"></i> Upgrades</li>
        <li id="market"><i className="fas fa-store"></i> Market</li>
        <li id="inventory"><i className="fas fa-box-open"></i> Inventory</li>
        <li id="shop"><i className="fas fa-shopping-cart"></i> Shop</li>
        <br />
        <br />
        <br /> {/*TODO: put this at the bottom with css instead of like a billion br tags since the code looks ass with them */}
        <li id="logout"><i className="fas fa-sign-out-alt"></i> Logout</li>
      </ul>
    </div>
  );
}

export default Dashboard;