import { observable, action, computed } from "mobx";
import axios from 'axios';

class EventsStore {
    @observable events = [];

    @action
    getEvent = (id) => {
        const event = this.events.filter((eventTmp) => {
            return eventTmp.id === id;
        });

        return event[0] ? event[0] : null;
    }

    @action
    getEvents = () => {
        axios.get('https://cors-anywhere.herokuapp.com/' + 'https://zpui5msqkg.execute-api.us-east-1.amazonaws.com/dev/events?category=veganism&lat=25&lon=121&sdate=1449000000&edate=1649290750', {
            headers: {
                'x-api-key': 'RV1LqrOcWg3dbZSmkPaNR1z4ZJDWKKMDwU5fmJ38'
            }
        })
        .then(response => console.log(response.data))
        .catch(err => console.log('err', err));
    }
  }
  
const singleton = new EventsStore();
export default singleton;