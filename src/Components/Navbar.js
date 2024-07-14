// src/components/Navbar.js
import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { FaClipboardList, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src='./images/BIT logo org.png' alt='Logo' className='logo-image' />
                <h1 className='logo-text'>Compile-Run</h1>
            </div>
            <nav className='navigation'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/dashboard" className='nav-link'>
                            <RxDashboard className='nav-icon' /> Dashboard
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/assessment" className='nav-link'>
                            <FaClipboardList className='nav-icon' /> Assessment
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/problems" className='nav-link'>
                            <FaQuestionCircle className='nav-icon' /> Problems
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <span className='nav-link logout-link'>
                            <FaSignOutAlt className='nav-icon' /> Logout
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
