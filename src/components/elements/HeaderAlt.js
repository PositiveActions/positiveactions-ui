import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class HeaderAlt extends Component {
    render() {
        return (
            <div className="header-alt-container">
                <a href="/"><div className="search-location"><KeyboardBackspaceIcon className="search-icon"></KeyboardBackspaceIcon></div></a>
                <a href="/"><div className="logo">POSITIVE ACTIONS</div></a>
            </div>
        );
    }
}

export default HeaderAlt;