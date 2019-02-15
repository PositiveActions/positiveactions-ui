import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import SearchIcon from '@material-ui/icons/Search';
// import TextField from '@material-ui/core/TextField';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Link to='/'><div className="logo">POSITIVE ACTIONS</div></Link>
                <div className="header-right">
                    {/* <div className="search-location">
                        <SearchIcon className="search-icon"></SearchIcon>
                        <TextField className="location-input" label="Search Location" type="text"/>
                    </div> */}
                    <Link to="/profile/1"><div className="user-profile">GM</div></Link>
                </div>
            </div>
        );
    }
}

export default Header;