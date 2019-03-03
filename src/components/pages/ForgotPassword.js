import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { inject, observer } from "mobx-react";
import { TextField } from '@material-ui/core';

@inject('UserStore')
@observer

class ForgotPassword extends Component {
    render() {

        const { userLoggedIn, userForgotPassword, userEmail, changeInput, errorMessageForgotPassword } = this.props.UserStore;

        return (
            <div className="forgot-password-container">
                <HeaderAlt userLoggedIn={userLoggedIn}></HeaderAlt>
                <div className="forgot-password-content">
                    <div className="forgot-password-text">FORGOT PASSWORD</div>
                    <form className="confirmation-form" noValidate autoComplete="off" onSubmit={userForgotPassword.bind(this, this.props.history)}>
                        <TextField
                            label="Email or Username"
                            type="text"
                            value={userEmail}
                            onChange={changeInput.bind(this, 'email')}
                        />
                        <button className="confirmation-button-container" type="submit">
                            <div className="confirmation-button-background"></div>
                            <div className="confirmation-button">
                                send confirmation code
                            </div>
                        </button>
                        <div className="forgot-password-error-message">{errorMessageForgotPassword}</div>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default ForgotPassword;