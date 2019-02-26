import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { TextField } from '@material-ui/core';
import { inject, observer } from "mobx-react";
import Loader from '../elements/Loader';

@inject('UserStore')
@observer
class Login extends Component {
    render() {

        const { UserStore } = this.props;
        const { userEmail, userPassword, changeInput, userLogin, userLoggingIn } = UserStore;

        return (
            <div className="connect-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn}></HeaderAlt>
                <div className="connect-content">
                    <form className="connection-form" noValidate autoComplete="off">
                        <TextField
                            label="Email"
                            type="email"
                            value={userEmail}
                            onChange={changeInput.bind(this, 'email')}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={userPassword}
                            onChange={changeInput.bind(this, 'password')}
                        />
                        <div className="connect-button-container" onClick={userLogin}>
                            <div className="connect-button-background"></div>
                            <div className="connect-button">
                                log in
                            </div>
                        </div>
                    </form>
                </div>
                <div className={"connect-content-loading " + (userLoggingIn ? 'visible-flex' : 'invisible')}>
                    <Loader></Loader>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Login;