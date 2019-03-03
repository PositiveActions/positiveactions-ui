import { observable, action } from "mobx";
import * as moment from 'moment-timezone';
import { Auth } from 'aws-amplify';


class UserStore {
    @observable userTimezone = '';
    @observable userLoggedIn = false;
    @observable userEmail = '';
    @observable userPassword = '';
    @observable userLoggingIn = false;
    @observable userLoggingOut = false;

    @observable errorMessage = '';
    @observable errorMessageForgotPassword = '';

    @observable userSignInUsername = '';
    @observable userSignInEmail = '';
    @observable userSignInPassword = '';

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

            this.userLoggingIn = false;
            this.userLoggedIn = true;
            this.userEmail = '';
            this.userPassword = '';
            this.errorMessage = '';
            history.push('/');
        } catch (err) {
            if (err.code === 'UserNotConfirmedException') {
                // The error happens if the user didn't finish the confirmation step when signing up
                // In this case you need to resend the code and confirm the user
                // About how to resend the code and confirm the user, please check the signUp part
            } else if (err.code === 'PasswordResetRequiredException') {
                // The error happens when the password is reset in the Cognito console
                // In this case you need to call forgotPassword to reset the password
                // Please check the Forgot Password part.
            } else {
                this.errorMessage = err.message;
                console.log('err', err);
            }
            this.userLoggingIn = false;
            this.userEmail = '';
            this.userPassword = '';
        }
    }

    @action userForgotPassword = async (history, event) => {
        event.preventDefault();
        try {
            const code = await Auth.forgotPassword(this.userEmail);
            console.log('code', code);

            //  A finir quand il y aura des utilisateurs pas créés pas les admins aws

            this.errorMessageForgotPassword = '';
        } catch (err) {
            this.errorMessageForgotPassword = err.message;
            console.log('err', err);
        }
        this.userEmail = '';
    }

    @action userSignUp = async (history, event) => {
        event.preventDefault();
        try {
            const code = await Auth.signUp(this.userEmail);
            console.log('code', code);

            //  A finir quand il y aura des utilisateurs pas créés pas les admins aws

            this.errorMessageForgotPassword = '';
        } catch (err) {
            this.errorMessageForgotPassword = err.message;
            console.log('err', err);
        }
        this.userEmail = '';
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
            case 'email':
                this.userEmail = event.target.value;
                break;
            case 'password':
                this.userPassword = event.target.value;
                break;
            default: console.log('input type not found');
        }
    }
}

const singleton = new UserStore();
export default singleton;