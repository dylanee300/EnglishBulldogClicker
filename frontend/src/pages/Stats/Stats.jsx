import React from "react";
import './Stats.css';
import Doggie from '../../assets/EnglishBullDog.png';


let user = "dylanee" // for now til i add acounts and stuff then wel use user data..
let doggiesUnlocked = 3;
let doggies = 4000;
let doggiesBought = 3;
let dpc = 100;

function Stats() {
    return (
        <div>
            <h1 id="mainStats">Stats</h1>

            <div className="pfp">
                <img src={Doggie} alt="" draggable="false" id="pfpdoggie"/>
            </div>

            <div className="user">
                <div>{user}</div>
            </div>

            <div className="userStats">

                <div className="doggiesUnlock">{/* for later */}</div>

                <div className="doggies">Doggies: {doggies}</div>

                <div className="doggiesBought">{/* for later */}</div>

                <div className="dpc">DPC: {dpc}</div>
            </div>

        </div>
    )
}

export default Stats;