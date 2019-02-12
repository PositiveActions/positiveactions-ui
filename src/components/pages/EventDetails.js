import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Map from '../elements/Map';
import MoreInfo from '../elements/MoreInfo';
import Comments from '../elements/Comments';
import Footer from '../elements/Footer';
import { inject, observer } from "mobx-react";

@inject('EventsStore')
@observer
class EventDetails extends Component {
    render() {
        const eventId = this.props.match.params.id;
        const { EventsStore } = this.props;
        const event = EventsStore.getEvent(eventId);

        return (
            <div className="event-details-container">
                <HeaderAlt></HeaderAlt>

                <div className="event-details-content">
                    <div className="event-meta-info">
                        <div className="event-date">
                            21/02
                        </div>
                        <div className="event-title">
                            {event.title}
                        </div>
                    </div>
                    <div className="event-description">
                        <p>
                            {event.description}
                        </p>
                    </div>
                    <div className="event-diverse-info">
                        <div className="event-other-info">
                            <MoreInfo event={event}></MoreInfo>
                        </div>
                        <div className="event-map">
                            <Map></Map>
                        </div>
                    </div>
                </div>
                <Comments></Comments>
                <Footer></Footer>
            </div>
        );
    }
}

export default EventDetails;