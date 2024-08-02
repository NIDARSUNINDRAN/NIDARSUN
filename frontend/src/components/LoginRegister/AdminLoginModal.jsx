// src/components/AdminLoginModal.jsx
import React, { useState } from 'react';
import '../styling/AdminLoginModal.css';

const AdminLoginModal = ({ onClose, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(username, password);
    };

    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>&times;</span>
                <h2>Admin Login</h2>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default AdminLoginModal;
