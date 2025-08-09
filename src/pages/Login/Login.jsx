import React from 'react';
import '../../components/Buttons.css';

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="text" placeholder="Username" required />
                <br />
                <input type="password" placeholder="Password" required />
                <br />
                <button type="submit" className="custom-button">Login</button>
            </form>
        </div>
    );
}

export default Login;