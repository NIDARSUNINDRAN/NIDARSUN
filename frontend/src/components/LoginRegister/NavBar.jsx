import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/NavBar.css';
import { FaHome, FaSignInAlt, FaUserPlus, FaSearch, FaUserShield } from 'react-icons/fa';

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="/home"><FaHome className='nav-icon' /> Home</Link></li>
                <li><Link to="/"><FaSignInAlt className='nav-icon' /> Login</Link></li>
                <li><Link to="/register"><FaUserPlus className='nav-icon' /> Register</Link></li>
                <li><Link to="/admin"><FaUserShield className='nav-icon' /> Admin</Link></li> {/* New Admin button */}
            </ul>
            <form className='search-form' onSubmit={handleSearch}>
                <input 
                    type='text' 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder='Search...'
                    className='search-input'
                />
                <button type='submit' className='search-button'><FaSearch /></button>
            </form>
        </nav>
    );
};

export default NavBar;
