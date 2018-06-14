import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/app.css';

const Nav = props => {
    const navStyle = {
        padding: '0 10px',
        fontFamily: "'Oleo Script Swash Caps', cursive",
        fontSize: '5vmin'
    }
    return (
        <nav className="teal" style={navStyle}>
            <div className="nav-wrapper">
                <Link to="/">Chatter Box</Link>
                <ul className="right">
                    <li>
                        <Link to="/"><span className="nav-link">Home</span></Link>
                    </li>
                    <li>
                        <Link to="/chat-rooms"><span className="nav-link">Chat Rooms</span></Link>
                    </li>
                    <li>
                        <Link to="/create-room"><span className="nav-link">Create Room</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;