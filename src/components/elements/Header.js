import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import SearchIcon from '@material-ui/icons/Search';
// import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

class Header extends Component {
    render() {

        const { userLoggedIn, userObject } = this.props;

        return (
            <div className="header-container">
                <Link to='/'><div className="logo">POSITIVE ACTIONS</div></Link>
                <div className={"header-right " + (userLoggedIn ? "visible-flex" : "invisible")}>
                    {/* <div className="search-location">
                        <SearchIcon className="search-icon"></SearchIcon>
                        <TextField className="location-input" label="Search Location" type="text"/>
                    </div> */}
                    <Link to='/addevent' className="add-event-component">

                        {/* <div className="add-event-text">
                            Add event
                        </div>
                        <div className="add-event-icon">
                            <svg width="40" height="40" className="circle-svg">
                                <circle className="outer" cx="20" cy="20" r="15"/>
                            </svg>
                            <AddIcon></AddIcon>
                        </div> */}
                        <div className="add-event-button-container">
                            <div className="add-event-button-background"></div>
                            <div className="add-event-button">
                                Add event
                            </div>
                        </div>
                    </Link>
                    <Link to="/profile/1"><div className="user-profile">{userLoggedIn ? userObject.username.substr(0, 1).toUpperCase() : '?'}</div></Link>
                </div>

                <div className={"header-right " + (!userLoggedIn ? "visible-flex" : "invisible")}>
                    <Link to="/signin" className="login-button-container">
                        <div className="login-button-background"></div>
                        <div className="login-button">
                            Sign In
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;