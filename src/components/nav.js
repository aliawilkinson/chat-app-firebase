import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/app.css';
import { connect } from 'react-redux';
import { signOutUser } from '../actions';

const Nav = props => {
    const { auth, username } = props.user;
    const navStyle = {
        padding: '0 10px',
        fontFamily: "'Oleo Script Swash Caps', cursive",
        fontSize: '5vmin'
    };

    const renderLinks = () => {
        if (auth) {
            return (
                <Fragment>
                    <li>
                        <Link to="/chat-rooms"><span className="nav-link">Chat Rooms</span></Link>
                    </li>
                    <li>
                        <Link to="/create-room"><span className="nav-link">Create Chat Room</span></Link>
                    </li>
                    <li>
                        <button onClick={props.signOutUser} className="btn">Sign Out</button>
                    </li>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        )
    }

    return (
        <nav className="teal" style={navStyle}>
            <div className="nav-wrapper">
                <Link to="/">Chatter Box</Link>
                <ul className="right">
                    <li>
                        {username ? `Hello${username}` : ''}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {renderLinks()}
                </ul>
            </div>
        </nav>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { signOutUser })(Nav);