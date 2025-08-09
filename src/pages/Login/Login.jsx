import React from 'react';
import './Login.css';

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div>
            <h1 id="login2">Login</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" required />
                    <br />
                    <input type="password" placeholder="Password" required />
                    <br />
                    <button type="submit" className="button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;