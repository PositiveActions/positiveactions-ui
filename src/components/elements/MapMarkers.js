import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import { inject, observer } from "mobx-react";

@inject('EventsStore')
@observer

class MapMarkers extends Component {
    render() {

        const { EventsStore } = this.props;
        const events = EventsStore.events;

        const eventsMarkers = events.length > 0 ? events.map((event) => <Marker key={event.event_id} position={{ lat: event.location.lat, lng: event.location.lon }}/>) : null;

        return (
            <div className="markers-container">
                {eventsMarkers}
            </div>
        );
    }
}

export default MapMarkers;