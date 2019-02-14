import React, { Component } from 'react';
import Event from './Event';
import { inject, observer } from "mobx-react";

@inject('EventsStore')
@observer
class Events extends Component {
    render() {

        const { EventsStore } = this.props;
        const events = EventsStore.events;
        EventsStore.getEvents();
        const eventsElm = (events.length > 0) ? events.map(eventElm => <Event event={eventElm} key={eventElm.id}></Event>) : <div className="no-events">No events to display.</div>

        return (
            <div className="events-container">
                {eventsElm}
            </div>
        );
    }
}

export default Events;