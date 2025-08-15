import React from 'react';
import doggie1 from '../../assets/alttdoggie.png';
import doggie2 from '../../assets/EnglishBullDog.png';
import './Market.css'; 


// for now I'm just going to import all the doggies then we can deal with the rest later..
function Market() {
    return <div>
        <h1 id="title">Market</h1>
        <div className="shopDoggies">
            <img src={doggie1} id="doggie1" />
            <img src={doggie2} id="doggie2" />
        </div>
    </div>;
}

export default Market;
