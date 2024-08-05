import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/User/LoginPage.css';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if (email === 'user@gmail.com' && password === 'user1234') {
            onLogin(false); // Regular user
            navigate('/User/Dashboard');
        } else if (email === 'admin@gmail.com' && password === 'admin1234') {
            onLogin(true); // Admin user
            navigate('/Admin/Dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default LoginPage;
