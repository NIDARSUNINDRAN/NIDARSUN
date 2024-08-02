import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import '../styling/RegisterForm.css';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <>
            <NavBar />
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input 
                            type="text" 
                            name="username" 
                            placeholder='Username' 
                            value={formData.username}
                            onChange={handleChange}
                            required 
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Email' 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder='Password' 
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            placeholder='Confirm Password' 
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required 
                        />
                        <FaLock className='icon' />
                    </div>
                    <button type="submit">Register</button>
                    <div className="login-link">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegisterForm;