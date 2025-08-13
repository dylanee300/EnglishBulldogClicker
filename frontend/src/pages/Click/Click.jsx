import React from 'react';
import './Click.css';
import Doggie from '../../assets/EnglishBullDog.png';

const doggie = <img src={Doggie} alt="" />;


let count = 0;


function click() {
    return (
        <div>
            <img src={Doggie} id="clickerDoggie"></img>
        </div>

    )
}

export default click;