import { observable, action, computed } from "mobx";
import config from '../config/config.json';
import * as moment from 'moment-timezone';

class EventsStore {
    @observable events = [];
    @observable eventsLoading = false;

    //  The active event is the event selected when the user clicks on a marker. This event is shown as the first one in the events list.
    @observable activeEvent = {};

    @observable userLocation = {lat: 40.7127, lng: -74.0059};
    @observable userLocationInitiated = false;

    @observable addEventTitle = '';
    @observable addEventDescription = '';
    @observable addEventDate = '';
    @observable addEventCategory = '';
    @observable addEventLocationName = '';
    @observable addEventCoordinates = {};
    @observable addEventEmail = '';
    @observable addEventImage = '';

    @observable submittingEvent = false;

    @observable categoryFilters = [{name: 'Veganism', checked: true, id: 'veganism'}, {name: 'Recycling', checked: true, id: 'recycling'}, {name: 'Energy', checked: true, id: 'energy'}];


    @action getEvents = () => {
        this.eventsLoading = true;
        fetch('https://cors-anywhere.herokuapp.com/https://zpui5msqkg.execute-api.us-east-1.amazonaws.com/dev/events?category=all&lat=' + this.userLocation.lat + '&lon=' + this.userLocation.lng + '&sdate=1449000000&edate=1649290750', {
            headers: {'x-api-key': config.apiKey},
        }
        ).then(res => {
            return res.json();
        }).then(response => {
            this.events = response;
            // this.filteredEvents = response;
            this.eventsLoading = false;
        });
    }

    @action submitEvents = () => {
        this.submittingEvent = true;
        fetch('https://cors-anywhere.herokuapp.com/https://zpui5msqkg.execute-api.us-east-1.amazonaws.com/dev/events', {
            headers: { 'x-api-key': config.apiKey },
            method: 'POST',
            body: JSON.stringify(
                {
                    title: this.addEventTitle, 
                    description: this.addEventDescription,
                    category: this.addEventCategory,
                    location_name: this.addEventLocationName,
                    contact: {email: this.addEventEmail},
                    lat: this.addEventCoordinates.lat,
                    lng: this.addEventCoordinates.lng,
                    sdate: moment(this.addEventDate, 'YYYY-MM-DD').format('X')
                })
        },
        ).then(res => {
            return res.json();
        }).then(response => {
            this.submittingEvent = false;
            this.addEventTitle = '';
            this.addEventDescription = '';
            this.addEventCategory = '';
            this.addEventCoordinates = {};
            this.addEventDate = '';
            this.addEventLocationName = '';
            this.addEventEmail = '';
            this.events.unshift(response);
            this.events = JSON.parse(JSON.stringify(this.events));

            // this.filteredEvents.unshift(response);
            // this.filteredEvents = JSON.parse(JSON.stringify(this.filteredEvents));
        });
    }

    @action handleFilterChange = (eventName) => {
        this.categoryFilters.map(filter => filter.name === eventName ? filter.checked = !filter.checked : null);
        this.categoryFilters = JSON.parse(JSON.stringify(this.categoryFilters));
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

    @action filterEvents = (filters) => {
        console.log(filters);
    }

    @action setUserLocation = (location) => {
        this.userLocation = location;
        this.userLocationInitiated = true;
    }

    @action onAddEventChange = (type, event) => {
        switch (type) {
            case 'title':
                this.addEventTitle = event.target.value;
            break;
            case 'description':
                this.addEventDescription = event.target.value;
            break;
            case 'date':
                this.addEventDate = event.target.value;
            break;
            case 'location-name':
                this.addEventLocationName = event.target.value;
            break;
            case 'category':
                this.addEventCategory = event.target.value;
            break;
            case 'coordinates':
                this.addEventCoordinates = event.target.value;
            break;
            case 'email':
                this.addEventEmail = event.target.value;
            break;
            case 'image':
            console.log('set image to', event.target.value)
                this.addEventImage = event.target.value;
            break;
            default: console.log('event not found');
        }
    }

    @computed get addEventDescriptionLength() {
        console.log((this.addEventDescription.match(/\n/g)||[]).length);
        return this.addEventDescription.length;
    }

    @computed get filteredEvents() {
        let fEvents = this.events.filter(event => {
            let eventCat = event.category;
            let selected = true;
            this.categoryFilters.forEach(filter => {
                if (filter.id === eventCat) {
                    selected = filter.checked;
                }
            });
            return selected;
        });

        return fEvents;
    }
  }
  
const singleton = new EventsStore();
export default singleton;