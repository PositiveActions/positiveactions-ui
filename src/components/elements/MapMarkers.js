import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class MapMarkers extends Component {
    render() {

        const { events, onMarkerClick } = this.props;

        const eventsMarkers = events.length > 0 ? events.map((event) => <Marker key={event.event_id} position={{ lat: event.location.lat, lng: event.location.lon }} onClick={onMarkerClick.bind(this, event)}/>) : null;

        return (
            <div className="markers-container">
                {eventsMarkers}
            </div>
        );
    }
}

export default MapMarkers;