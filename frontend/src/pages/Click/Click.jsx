import React, { useEffect } from 'react';
import './Click.css';
import Doggie from '../../assets/EnglishBullDog.png';

function click() {

    let count = parseInt(localStorage.getItem('clickCount')) || 0;

    useEffect(() => {
        const doggie = document.getElementById('clickerDoggie');
        const display = document.getElementById('display');

        const handleClick = () => {
            count++;
            localStorage.setItem('clickCount', count);
            if (display) {
                display.innerText = count;
            }
        };

        if (display) {
            display.innerText = count;
        }

        if (doggie) {
            doggie.addEventListener('click', handleClick);
        }

        return () => {
            if (doggie) {
                doggie.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return(
        <div>
            <h1 id="display">0</h1>

            <img src={Doggie} alt="Doggie" id="clickerDoggie"/>
        </div>
    )
}

export default click;