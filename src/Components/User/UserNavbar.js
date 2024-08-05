import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { FaClipboardList, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import '../../css/User/UserNavbar.css';

const Navbar = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src='/images/BIT logo org.png' alt='Logo' className='logo-image' />
                <h1 className='logo-text'>Compile-Run</h1>
            </div>
            <nav className='navigation'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/User/Dashboard" className='nav-link'>
                            <RxDashboard className='nav-icon' /> Dashboard
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/User/Assesment" className='nav-link'>
                            <FaClipboardList className='nav-icon' /> Assesment
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/User/Problems" className='nav-link'>
                            <FaQuestionCircle className='nav-icon' /> Problems
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <span className='nav-link logout-link' onClick={handleLogout}>
                            <FaSignOutAlt className='nav-icon' /> Logout
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
