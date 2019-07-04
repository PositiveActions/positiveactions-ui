import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { inject, observer } from "mobx-react";
import Loader from '../elements/Loader';

@inject('UserStore')
@observer
class Profile extends Component {

    state = {
        profileUser: {}
    }

    render() {

        const { UserStore } = this.props;
        let urlUserId = window.location.href.split('profile/')[1];


        return (
            <div className="profile-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn} userObject={this.props.UserStore.userObject} userId={this.props.UserStore.userId}></HeaderAlt>
                <div className="profile-content">
                    <div to="/profile/1" className="profile">
                        <div className="profile-image">{this.state.profileUser.username ? this.state.profileUser.username[0].toUpperCase() : 'A'}</div>
                        <div className="profile-name">{this.state.profileUser.username ? this.state.profileUser.username : 'Anonymous'}</div>
                    </div>
                    { UserStore.userId === urlUserId ?
                    <div className="logout-button-container" onClick={UserStore.userLogout.bind(this, this.props.history)}>
                        <div className="logout-button-background"></div>
                        <div className="logout-button">
                            log out
                        </div>
                    </div> : null }
                </div>
                <div className={"logout-content-loading " + ((UserStore.userLoggingOut || UserStore.gettingUser) ? 'visible-flex' : 'invisible')}>
                    <Loader></Loader>
                </div>
                <Footer></Footer>
            </div>
        );
    }

    componentDidMount() {
        const { UserStore } = this.props;
        let urlUserId = window.location.href.split('profile/')[1];

        UserStore.getUser(urlUserId).then(res => {
            if (res) {
                this.setState({ profileUser: res });
                console.log(res)
            }
        });
    }
}

export default Profile;