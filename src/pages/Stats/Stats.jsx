import React from "react";
import './Stats.css';
import Doggie from '../../assets/EnglishBullDog.png';

function Stats() {
    return (
        <div>
            <h1 id="mainStats">Stats</h1>

            <div className="pfp">
                <img src={Doggie} alt="" draggable="false" id="pfpdoggie"/>
            </div>
        </div>
    )
}

export default Stats;