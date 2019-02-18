import { observable, action } from "mobx";
import config from '../config/config.json';

class EventsStore {
    @observable events = [];
    @observable eventsLoading = false;

    //  The active event is the event selected when the user clicks on a marker. This event is shown as the first one in the events list.
    @observable activeEvent = {};

    @observable userLocation = {lat: 40.7127, lng: -74.0059};
    @observable userLocationInitiated = false;

    @action getEvents = () => {
        this.eventsLoading = true;
        fetch('https://cors-anywhere.herokuapp.com/https://zpui5msqkg.execute-api.us-east-1.amazonaws.com/dev/events?category=veganism&lat=' + this.userLocation.lat + '&lon=' + this.userLocation.lng + '&sdate=1449000000&edate=1649290750', {
            headers: {'x-api-key': config.apiKey},
        }
        ).then(res => {
            return res.json();
        }).then(response => {
            this.events = response;
            this.eventsLoading = false;
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

    @action setUserLocation = (location) => {
        this.userLocation = location;
        this.userLocationInitiated = true;
    }
  }
  
const singleton = new EventsStore();
export default singleton;