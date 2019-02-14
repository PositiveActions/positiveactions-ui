import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class HeaderAlt extends Component {
    render() {
        return (
            <div className="header-alt-container">
                <div className="arrow-container">
                    <svg width="40" height="40">
                        <circle className="outer" cx="20" cy="20" r="15"/>
                    </svg>
                    <a href="/"><div className="search-location"><KeyboardBackspaceIcon className="search-icon"></KeyboardBackspaceIcon></div></a>
                </div>
                <a href="/"><div className="logo">POSITIVE ACTIONS</div></a>
                <a href="/profile/1"><div className="user-profile">GM</div></a>
            </div>
        );
    }
}

export default HeaderAlt;