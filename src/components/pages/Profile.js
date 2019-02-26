import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';

class Profile extends Component {
    render() {

        const { UserStore } = this.props;

        return (
            <div className="profile-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn}></HeaderAlt>
                <div className="profile-content">
                    This is the profile.
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Profile;