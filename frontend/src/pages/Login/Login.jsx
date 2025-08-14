import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1 id="login2">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" required />
                    <br />
                    <input type="password" placeholder="Password" required />
                    <br />
                    <button type="submit" className="button">Login</button>
                    <p id="reg">
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
