import { observable, action } from "mobx";
import config from '../config/config.json';

class EventsStore {
    @observable events = [];
    @observable eventsLoading = false;

    //  The current event is the event the user selected when he clicks on the "more details" button. The details page shows details about the current event.
    @observable currentEvent = {};
    @observable eventLoading = false;

    //  The active event is the event selected when the user clicks on a marker. This event is shown as the first one in the events list.
    @observable activeEvent = {};

    @action
    getEvent = (id) => {
        const event = this.events.filter((eventTmp) => {
            return eventTmp.id === id;
        });

        return event[0] ? event[0] : null;
    }

    @action getEvents = () => {
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

    @action setActiveEvent = (event_id) => {
        let eventIndex = -1;
        const event = this.events.filter((eventTmp, index) => {
            if (eventTmp.event_id === event_id) {
                eventIndex = index;
                return true;
            } else {
                return false;
            }
        });

        //  Put the active event in first position in the events list
        if (event.length > 0 && eventIndex !== -1) {
            this.activeEvent = event[0];
            let firstEventTmp = JSON.parse(JSON.stringify(this.events[0]));
            this.events[0] = this.activeEvent;
            this.events[eventIndex] = firstEventTmp;

            //  To detect the changes in the children we force update the array
            this.events = JSON.parse(JSON.stringify(this.events));
        }
    }
  }
  
const singleton = new EventsStore();
export default singleton;