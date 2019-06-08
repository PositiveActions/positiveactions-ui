import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from "react-router-dom";

class HeaderAlt extends Component {
    render() {

        const { userLoggedIn, userObject, userId } = this.props;

        return (
            <div className="header-alt-container">
                <div className="arrow-container">
                    <svg width="40" height="40">
                        <circle className="outer" cx="20" cy="20" r="15"/>
                    </svg>
                    <Link to="/"><div className="search-location"><KeyboardBackspaceIcon className="search-icon"></KeyboardBackspaceIcon></div></Link>
                </div>
                <Link to="/"><div className="logo">POSITIVE ACTIONS</div></Link>
                <div className={"user-profile-container " + (userLoggedIn ? "visible-flex" : "invisible")}>
                    <Link to={"/profile/" + userId} ><div className="user-profile">{userLoggedIn ? userObject.username.substr(0, 1).toUpperCase() : '?'}</div></Link>
                </div>
            </div>
        );
    }
}

export default HeaderAlt;