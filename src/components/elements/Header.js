import React, { Component } from 'react';
// import SearchIcon from '@material-ui/icons/Search';
// import TextField from '@material-ui/core/TextField';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <a href='/'><div className="logo">POSITIVE ACTIONS</div></a>
                <div className="header-right">
                    {/* <div className="search-location">
                        <SearchIcon className="search-icon"></SearchIcon>
                        <TextField className="location-input" label="Search Location" type="text"/>
                    </div> */}
                    <a href="/profile/1"><div className="user-profile">GM</div></a>
                </div>
            </div>
        );
    }
}

export default Header;