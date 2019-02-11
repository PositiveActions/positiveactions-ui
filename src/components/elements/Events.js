import React, { Component } from 'react';
import Event from './Event';

class Events extends Component {
    render() {
        return (
            <div className="events-container">
                <Event></Event>
            </div>
        );
    }
}

export default Events;