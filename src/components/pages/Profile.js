import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { inject, observer } from "mobx-react";
import Loader from '../elements/Loader';

@inject('UserStore')
@observer
class Profile extends Component {
    render() {

        const { UserStore } = this.props;

        return (
            <div className="profile-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn}></HeaderAlt>
                <div className="profile-content">
                    <div className="logout-button-container" onClick={UserStore.userLogout.bind(this, this.props.history)}>
                        <div className="logout-button-background"></div>
                        <div className="logout-button">
                            log out
                        </div>
                    </div>
                </div>
                <div className={"logout-content-loading " + (UserStore.userLoggingOut ? 'visible-flex' : 'invisible')}>
                    <Loader></Loader>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Profile;