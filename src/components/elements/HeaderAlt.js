import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from "react-router-dom";

class HeaderAlt extends Component {
    render() {
        return (
            <div className="header-alt-container">
                <div className="arrow-container">
                    <svg width="40" height="40">
                        <circle className="outer" cx="20" cy="20" r="15"/>
                    </svg>
                    <Link to="/"><div className="search-location"><KeyboardBackspaceIcon className="search-icon"></KeyboardBackspaceIcon></div></Link>
                </div>
                <Link to="/"><div className="logo">POSITIVE ACTIONS</div></Link>
                <Link to="/profile/1"><div className="user-profile">GM</div></Link>
            </div>
        );
    }
}

export default HeaderAlt;