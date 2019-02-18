import { observable, action } from "mobx";
import * as moment from 'moment-timezone';

class UserStore {
    @observable userTimezone = '';

    @action setUserTimezone = () => {
        this.userTimezone = moment.tz.guess();
    }

    @action getFormatedDateFromTimestamp = (timestamp) => {
        return moment.unix(timestamp).tz(this.userTimezone).format('L');
    }
}

const singleton = new UserStore();
export default singleton;