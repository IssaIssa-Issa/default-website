import React, { useState } from 'react';
import './navbar.css';
import profilePicture from './images/profile.png';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <nav>
            <div className={`sidebar ${isActive ? 'active' : ''}`}>
                <i className='bx bx-menu' id='btn' onClick={toggleSidebar}></i>
                <ul className='nav_list'>
                    <li>
                        <i className="bx bx-search" onClick={toggleSidebar}></i>
                        <input type="text" placeholder="Search..." />
                    </li>
                    <li>
                        <a href="#home">
                            <i className="bx bxs-home"></i>
                            <span className='links_name'>Home</span>
                        </a>
                        <span className='tooltip'>Home</span>
                    </li>
                    <li>
                        <a href="#about">
                            <i className="bx bxs-user"></i>
                            <span className='links_name'>About</span>
                        </a>
                        <span className='tooltip'>About</span>
                    </li>
                    <li>
                        <a href="#services">
                            <i className="bx bxs-help-circle"></i>
                            <span className='links_name'>Help</span>
                        </a>
                        <span className='tooltip'>Help</span>
                    </li>
                    <li>
                        <a href="#contact">
                            <i className="bx bxs-contact"></i>
                            <span className='links_name'>Contact</span>
                        </a>
                        <span className='tooltip'>Contact</span>
                    </li>
                </ul>
                <div className='profile_content'>
                    <div className='profile'>
                        <div className='profile_details'>
                            <img src={profilePicture} alt='Profile picture of user' />
                            <div className='name_job'>
                                <div className='name'>
                                    Issa Issa
                                </div>
                                <div className='user_level'>
                                    Admin
                                </div>
                            </div>
                        </div>
                        <i className='bx bx-log-out' id='log_out'></i>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;