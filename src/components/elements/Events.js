import React, { Component } from 'react';
import Event from './Event';
import { inject, observer } from "mobx-react";
import Loader from './Loader';

@inject('EventsStore')
@observer
class Events extends Component {

    componentDidMount() {
        this.props.EventsStore.getEvents();
    }

    render() {
        const { EventsStore } = this.props;
        const events = EventsStore.events;

        //  If events empty show no-events div
        let eventsElm = (events.length > 0) ? events.map(eventElm => <Event event={eventElm} key={eventElm.event_id}></Event>) : <div className="no-events">No events to display.</div>

        //  If events loading show loader
        eventsElm = EventsStore.eventsLoading ? <div className="loader"><Loader></Loader></div> : eventsElm;

        return (
            <div className="events-container">
                {eventsElm}
            </div>
        );
    }
}

export default Events;