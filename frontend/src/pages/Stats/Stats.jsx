import React from "react";
import './Stats.css';
import Doggie from '../../assets/EnglishBullDog.png';


let user = "Dylanee" // for now til i add acounts and stuff then wel use user data..
let doggiesUnlocked = user.doggiesUnlocked;
let doggies = user.doggies;
let doggiesBought = user.doggiesBought;
let dpc = user.dpc;

function Stats() {
    return (
        <div>
            <h1 id="mainStats"></h1>

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