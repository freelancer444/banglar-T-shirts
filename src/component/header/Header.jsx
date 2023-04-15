import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'></Link>
            <Link to='/review'>review</Link>
            <Link to='/contact'>contact us</Link>
            <Link to='/about'>about</Link>
        </nav>
    );
};

export default Header;