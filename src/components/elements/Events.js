import React, { Component } from 'react';
import Event from './Event';
import Loader from './Loader';

class Events extends Component {

    render() {
        const { events, eventsLoading, getFormatedDateFromTimestamp } = this.props;

        //  If events empty show no-events div
        let eventsElm = (events.length > 0) ? events.map(eventElm => <Event event={eventElm} key={eventElm.event_id} getFormatedDateFromTimestamp={getFormatedDateFromTimestamp}></Event>) : <div className="no-events">No events to display.</div>

        //  If events loading show loader
        eventsElm = eventsLoading ? <div className="loader"><Loader></Loader></div> : eventsElm;

        return (
            <div className="events-container">
                {eventsElm}
            </div>
        );
    }
}

export default Events;