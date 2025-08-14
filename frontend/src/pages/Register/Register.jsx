import React from 'react';
import './Register.css';

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h1 id="register">Register</h1>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <input type="text" id="username" placeholder="Username" required />
                    <br />
                    <input type="password" id="password" placeholder="Password" required />
                    <br />
                    <input type="text" id="discord" placeholder="Discord (Optional)" />
                    <br />
                    <button type="submit" id="registerButton">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
