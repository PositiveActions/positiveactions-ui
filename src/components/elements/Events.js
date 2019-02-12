import React, { Component } from 'react';
import Event from './Event';
import { inject, observer } from "mobx-react";

@inject('EventsStore')
@observer
class Events extends Component {
    render() {

        const { EventsStore } = this.props;
        const events = EventsStore.events;

        const eventsElm = events.map(eventElm => <Event event={eventElm} key={eventElm.id}></Event>)

        return (
            <div className="events-container">
                {eventsElm}
            </div>
        );
    }
}

export default Events;