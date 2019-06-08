import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { inject, observer } from "mobx-react";
import { TextField } from '@material-ui/core';
import Loader from '../elements/Loader';

@inject('UserStore')
@observer

class ForgotPassword extends Component {
    render() {

        const { userLoggedIn, userForgotPassword, userEmail, changeInput, errorMessageForgotPassword, userForgotPasswordVerificationCode, userForgotPasswordVerificationError, userForgotPasswordVerificationPending, userForgotPasswordVerifyCode, userNewPassword, userGettingNewPassword, userVerifyingNewPasswordCode } = this.props.UserStore;

        return (
            <div className="forgot-password-container">
                <HeaderAlt userLoggedIn={userLoggedIn} userObject={this.props.UserStore.userObject} userId={this.props.UserStore.userId}></HeaderAlt>
                <div className="forgot-password-content">
                    <div className="forgot-password-text">FORGOT PASSWORD</div>
                    <form className={"confirmation-form " + (userForgotPasswordVerificationPending ? 'invisible' : 'visible-flex')} noValidate onSubmit={userForgotPassword.bind(this, this.props.history)}>
                        <TextField
                            label="Email or Username"
                            type="text"
                            value={userEmail}
                            onChange={changeInput.bind(this, 'email signin')}
                        />
                        <button className="confirmation-button-container" type="submit">
                            <div className="confirmation-button-background"></div>
                            <div className="confirmation-button">
                                send confirmation code
                            </div>
                        </button>
                        <div className="forgot-password-error-message">{errorMessageForgotPassword}</div>
                    </form>
                    <form className={"confirmation-form " + (!userForgotPasswordVerificationPending ? 'invisible' : 'visible-flex')} noValidate onSubmit={userForgotPasswordVerifyCode.bind(this, this.props.history)}>
                        <TextField
                            label="Username"
                            value={userEmail}
                            onChange={changeInput.bind(this, 'verification forgot password username')}
                        />
                        <TextField
                            label="New Password"
                            type="password"
                            value={userNewPassword}
                            onChange={changeInput.bind(this, 'verification forgot password new password')}
                        />
                        <TextField
                            label="Verification Code"
                            value={userForgotPasswordVerificationCode}
                            onChange={changeInput.bind(this, 'verification forgot password code')}
                        />
                        <button className="confirmation-button-container" type="submit">
                            <div className="confirmation-button-background"></div>
                            <div className="confirmation-button">
                                change password
                            </div>
                        </button>
                        <div className="forgot-password-error-message">{userForgotPasswordVerificationError}</div>
                    </form>
                </div>
                <div className={"forgot-password-content-loading " + ((userGettingNewPassword || userVerifyingNewPasswordCode) ? 'visible-flex' : 'invisible')}>
                    <Loader></Loader>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default ForgotPassword;