import React from 'react';
import './Register.css';

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div>
            <h1 id="register">Register</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" required />
                    <br />
                    <input type="password" placeholder="Password" required />
                    <br />
                    <input type="text" placeholder="Discord (Optional)" />
                    <br />
                    <button type="submit" className="button">Register</button>
                    <br />

                </form>
            </div>
        </div>
    );
}

export default Register;