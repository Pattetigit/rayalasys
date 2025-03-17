import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/ourvision">Our Vision</Link></li>
                <li><Link to="/employee">Employee</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/registration">Registration</Link></li>
                <li><Link to="/searchemployee">Search Employee</Link></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;