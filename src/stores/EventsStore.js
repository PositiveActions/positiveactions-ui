import { observable, action, computed } from "mobx";

class EventsStore {
    @observable events = [
        {
            description: 'Duis nec turpis pellentesque, sagittis lacus quis, commodo elit. Phasellus volutpat maximus neque vehicula bibendum. Curabitur id augue vel est tincidunt condimentum, sagittis lacus quis, commodo elit sed non sem aliquam, venenatis quam vel, euismod tortor. Cras condimentum dui eget justo finibus volutpat. Donec posuere leo erat, quis tristique ex mollis id. Pellentesque rhoncus, justo vel sodales tempor, nibh dui volutpat elit, vel congue magna lectus sit amet erat. Donec neque sapien.',
            title: 'Lorem ipsum dolor sit amet consectetur',
            location_name: 'Taipei, Zongzheng District',
            lat: 25.043770,
            lon: 121.495761,
            author: 'Marc Sirisak Le Boss',
            categories: 'All',
            email: 'info@eventwebsite.com',
            website: 'http://www.eventwebsite.com',
            id: '1'
        },
        {
            description: 'Curabitur id augue vel est tincidunt condimentum, sagittis lacus quis.',
            title: 'Lorem ipsum dolor sit amet consectetur',
            location_name: 'Paris, 11e Arrondissement',
            lat: 48.8566,
            lon: 2.3522,
            author: 'Guillaume Meigniez',
            categories: 'All',
            email: 'info@eventwebsite.com',
            website: 'http://www.eventwebsite.com',
            id: '2'
        }
    ];

    @action
    getEvent = (id) => {
        const event = this.events.filter((eventTmp) => {
            return eventTmp.id === id;
        });

        return event[0] ? event[0] : null;
    }
  }
  
const singleton = new EventsStore();
export default singleton;