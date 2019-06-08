import { observable, action } from "mobx";
import * as moment from 'moment-timezone';
import { Auth } from 'aws-amplify';


class UserStore {
    @observable userObject = {};

    @observable userTimezone = '';
    @observable userLoggedIn = false;
    @observable userEmail = '';
    @observable userPassword = '';
    @observable userLoggingIn = false;
    @observable userLoggingOut = false;
    @observable userSigningUp = false;
    @observable userId = '';

    @observable errorMessage = '';
    @observable errorMessageForgotPassword = '';
    @observable errorMessageVerification = '';
    @observable errorMessageSignUp = '';
    @observable userForgotPasswordVerificationError = '';

    @observable userSignUpUsername = '';
    @observable userSignUpEmail = '';
    @observable userSignUpPassword = '';
    @observable userSignUpVerificationCode = '';
    @observable userSignUpVerificationPending = false;
    @observable userVerifyingCode = false;

    @observable userForgotPasswordVerificationPending = false;
    @observable userForgotPasswordVerificationCode = '';
    @observable userNewPassword = '';
    @observable userGettingNewPassword = false;
    @observable userVerifyingNewPasswordCode = false;

    @action setUserTimezone = () => {
        this.userTimezone = moment.tz.guess();
    }

    @action getFormatedDateFromTimestamp = (timestamp, format) => {
        return moment.unix(timestamp).tz(this.userTimezone).format(format);
    }

    @action userLogin = async (history, event) => {
        event.preventDefault();
        this.userLoggingIn = true;
        try {
            const user = await Auth.signIn(this.userEmail, this.userPassword);
            
            // The user directly signs in
            console.log('user', user);
            this.userObject = user;
            this.userId = user.signInUserSession.idToken.payload.sub;

            this.userLoggingIn = false;
            this.userLoggedIn = true;
            this.userEmail = '';
            this.userPassword = '';
            this.errorMessage = '';
            history.push('/');
        } catch (err) {
            this.errorMessage = err.message;
            console.log('err', err);
        }
        this.userLoggingIn = false;
        this.userEmail = '';
        this.userPassword = '';
    }

    @action userForgotPassword = async (history, event) => {
        event.preventDefault();
        this.userGettingNewPassword = true;
        try {
            await Auth.forgotPassword(this.userEmail);

            //  A finir quand il y aura des utilisateurs pas créés pas les admins aws
            this.userForgotPasswordVerificationPending = true;
            this.errorMessageForgotPassword = '';
            this.userGettingNewPassword = false;
        } catch (err) {
            this.errorMessageForgotPassword = err.message;
            console.log('err', err);
            this.userGettingNewPassword = false;
        }
    }

    @action userForgotPasswordVerifyCode = async (history, event) => {
        event.preventDefault();
        this.userVerifyingNewPasswordCode = true;
        try {
            await Auth.forgotPasswordSubmit(this.userEmail, this.userForgotPasswordVerificationCode, this.userNewPassword);

            this.userForgotPasswordVerificationError = '';
            this.userEmail = '';
            history.push('/signin');
            this.userForgotPasswordVerificationPending = true;
            this.userVerifyingNewPasswordCode = false;
        } catch (err) {
            this.userForgotPasswordVerificationError = err.message;
            console.log('err', err);
            this.userVerifyingNewPasswordCode = false;
        }
        this.userForgotPasswordVerificationCode = '';
    }

    @action userSignUp = async (history, event) => {
        event.preventDefault();
        this.userSigningUp = true;
        try {
            const user = await Auth.signUp({
                username: this.userSignUpUsername,
                password: this.userSignUpPassword,
                attributes: {
                    email: this.userSignUpEmail,
                    preferred_username: this.userSignUpUsername,
                }
            });
            console.log('user', user);
            this.userSignUpPassword = '';
            this.userSignUpEmail = '';
            this.userSignUpVerificationPending = true;
            this.userSigningUp = false;

            //  A finir quand il y aura des utilisateurs pas créés pas les admins aws

            this.errorMessageSignUp = '';
        } catch (err) {
            this.userSigningUp = false;
            this.errorMessageSignUp = err.message;
            console.log('err', err);
        }
        this.userEmail = '';
    }

    @action userSignUpVerifyCode = async (history, event) => {
        event.preventDefault();
        this.userVerifyingCode = true;
        try {
            const verify = await Auth.confirmSignUp(this.userSignUpUsername, this.userSignUpVerificationCode);
            console.log('verify', verify);
            this.userSignUpUsername = '';
            history.push('/signin');
            this.errorMessageVerification = '';
            this.userSignUpVerificationPending = false;
            this.userVerifyingCode = false;
        } catch (err) {
            this.errorMessageVerification = err.message;
            this.userVerifyingCode = false;
            console.log('err', err);
        }
        this.userSignUpVerificationCode = '';
    }

    @action userLogout = (history, event) => {
        this.userLoggingOut = true;
        setTimeout(() => {
            this.userLoggedIn = false;
            this.userLoggingOut = false;
            history.push('/signin');
        }, 1000);
    }

    @action changeInput = (type, event) => {
        switch(type) {
            case 'email signin':
                this.userEmail = event.target.value;
                break;
            case 'password signin':
                this.userPassword = event.target.value;
                break;
            case 'email signup':
                this.userSignUpEmail = event.target.value;
                break;
            case 'password signup':
                this.userSignUpPassword = event.target.value;
                break;
            case 'username signup':
                this.userSignUpUsername = event.target.value;
                break;
            case 'verification signup':
                this.userSignUpVerificationCode = event.target.value;
                break;
            case 'verification forgot password username':
                this.userEmail = event.target.value;
                break;
            case 'verification forgot password new password':
                this.userNewPassword = event.target.value;
                break;
            case 'verification forgot password code':
                this.userForgotPasswordVerificationCode = event.target.value;
                break;
            default: console.log('input type not found');
        }
    }
}

const singleton = new UserStore();
export default singleton;