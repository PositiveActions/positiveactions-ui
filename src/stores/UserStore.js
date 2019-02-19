import { observable, action } from "mobx";
import * as moment from 'moment-timezone';

class UserStore {
    @observable userTimezone = '';

    @action setUserTimezone = () => {
        this.userTimezone = moment.tz.guess();
    }

    @action getFormatedDateFromTimestamp = (timestamp, format) => {
        return moment.unix(timestamp).tz(this.userTimezone).format(format);
    }
}

const singleton = new UserStore();
export default singleton;