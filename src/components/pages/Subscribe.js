import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { TextField } from '@material-ui/core';
import { inject, observer } from "mobx-react";
import Loader from '../elements/Loader';
import { Link } from "react-router-dom";

@inject('UserStore')
@observer
class Subscribe extends Component {
    render() {

        const { 
            userLoggedIn, 
            changeInput, 
            userSignUpUsername, 
            userSignUpEmail, 
            userSignUpPassword, 
            userSignUp, 
            userSignUpVerificationPending, 
            userSignUpVerifyCode, 
            userSignUpVerificationCode, 
            errorMessageVerification, 
            userSigningUp,
            userVerifyingCode,
            errorMessageSignUp
        } = this.props.UserStore;

        return (
            <div className="subscribe-container">
                <HeaderAlt userLoggedIn={userLoggedIn} userObject={this.props.UserStore.userObject} userId={this.props.UserStore.userId}></HeaderAlt>
                    <div className="subscribe-content">
                    <div className="signup-text">SIGN UP</div>
                    <form className={"subscribe-form " + (userSignUpVerificationPending ? 'invisible' : 'visible-flex')} noValidate onSubmit={userSignUp.bind(this, this.props.history)}>
                        <TextField
                            label="Username"
                            value={userSignUpUsername}
                            onChange={changeInput.bind(this, 'username signup')}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            value={userSignUpEmail}
                            onChange={changeInput.bind(this, 'email signup')}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={userSignUpPassword}
                            onChange={changeInput.bind(this, 'password signup')}
                        />
                        <button className="subscribe-button-container" type="submit">
                            <div className="subscribe-button-background"></div>
                            <div className="subscribe-button">
                                sign up
                            </div>
                        </button>
                        <div className="signup-error-message">{errorMessageSignUp}</div>
                        <Link to="/signin" className="sign-in-link">Already have an account ?</Link>
                    </form>
                    <form className={"subscribe-form " + (!userSignUpVerificationPending ? 'invisible' : 'visible-flex')} noValidate onSubmit={userSignUpVerifyCode.bind(this, this.props.history)}>
                        <TextField
                            label="Verification Code"
                            value={userSignUpVerificationCode}
                            onChange={changeInput.bind(this, 'verification signup')}
                        />
                        <button className="subscribe-button-container" type="submit">
                            <div className="subscribe-button-background"></div>
                            <div className="subscribe-button">
                                verify code
                            </div>
                        </button>
                        <div className="verify-error-message">{errorMessageVerification}</div>
                    </form>
                </div>
                <div className={"signup-content-loading " + ((userSigningUp || userVerifyingCode) ? 'visible-flex' : 'invisible')}>
                    <Loader></Loader>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Subscribe;