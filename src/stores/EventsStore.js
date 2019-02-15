import { observable, action, computed } from "mobx";
import config from '../config/config.json';

class EventsStore {
    @observable events = [];
    @observable eventsLoading = false;

    @observable currentEvent = {};
    @observable eventLoading = false;

    @action
    getEvent = (id) => {
        const event = this.events.filter((eventTmp) => {
            return eventTmp.id === id;
        });

        return event[0] ? event[0] : null;
    }

    @action
    getEvents = () => {
        this.eventsLoading = true;
        fetch('https://cors-anywhere.herokuapp.com/https://zpui5msqkg.execute-api.us-east-1.amazonaws.com/dev/events?category=veganism&lat=25.1234&lon=121.4312&sdate=1449000000&edate=1649290750', {
            headers: {'x-api-key': config.apiKey},
        }
        ).then(res => {
            return res.json();
        }).then(response => {
            this.events = response;
            this.eventsLoading = false;
        });
    }

    @action getEvent = (event_id) => {
        this.eventLoading = true;
        fetch('https://cors-anywhere.herokuapp.com/https://zpui5msqkg.execute-api.us-east-1.amazonaws.com/dev/events?category=veganism&lat=25.1234&lon=121.4312&sdate=1449000000&edate=1649290750', {
            headers: {'x-api-key': config.apiKey},
        }
        ).then(res => {
            return res.json();
        }).then(response => {
            this.events = response;
            this.currentEvent = (this.events.length > 0) ? this.events.filter(eventTmp => eventTmp.event_id === event_id)[0] : {};
            this.eventLoading = false;
        });
    }
  }
  
const singleton = new EventsStore();
export default singleton;