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
        //  fetch data from api
    }
  }
  
const singleton = new EventsStore();
export default singleton;