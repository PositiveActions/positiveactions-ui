import { observable, action } from "mobx";
import * as moment from 'moment-timezone';

class UserStore {
    @observable userTimezone = '';
    @observable userLoggedIn = false;
    @observable userEmail = '';
    @observable userPassword = '';
    @observable userLoggingIn = false;

    @action setUserTimezone = () => {
        this.userTimezone = moment.tz.guess();
    }

    @action getFormatedDateFromTimestamp = (timestamp, format) => {
        return moment.unix(timestamp).tz(this.userTimezone).format(format);
    }

    @action userLogin = () => {
        this.userLoggingIn = true;
        setTimeout(() => {
            this.userLoggedIn = true;
            this.userEmail = '';
            this.userPassword = '';
            this.userLoggingIn = false;
        }, 1000);
    }

    @action userLogout = () => {
        setTimeout(() => {
            this.userLoggedIn = false;
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