import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { TextField } from '@material-ui/core';
import { inject, observer } from "mobx-react";
import Loader from '../elements/Loader';
import { Link } from "react-router-dom";

@inject('UserStore')
@observer
class Login extends Component {
    render() {

        const { UserStore } = this.props;
        const { userEmail, userPassword, changeInput, userLogin, userLoggingIn, errorMessage } = UserStore;

        return (
            <div className="connect-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn}></HeaderAlt>
                <div className="connect-content">
                    <div className="login-text">SIGN IN</div>
                    <form className="connection-form" noValidate onSubmit={userLogin.bind(this, this.props.history)}>
                        <TextField
                            label="Username"
                            type="text"
                            value={userEmail}
                            onChange={changeInput.bind(this, 'email signin')}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={userPassword}
                            onChange={changeInput.bind(this, 'password signin')}
                        />
                        <button className="connect-button-container" type="submit">
                            <div className="connect-button-background"></div>
                            <div className="connect-button">
                                sign in
                            </div>
                        </button>
                        <div className="login-error-message">{errorMessage}</div>
                        <Link to="/forgotpassword" className="forgot-password-link">Forgot your password ?</Link>
                        <Link to="/signup" className="sign-up-link">You don't have an account yet ?</Link>
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