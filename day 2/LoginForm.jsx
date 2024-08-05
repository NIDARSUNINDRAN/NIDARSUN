import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar'; 
import '../styling/LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

   
        if (username === 'nidarsun' && password === '123456') {
         
            navigate('/landing');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <>
            <NavBar />
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder='Username' 
                            required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder='Password' 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
