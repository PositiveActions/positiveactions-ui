import React, { Component } from 'react';
import eventImage from '../../assets/event-pic1.jpg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from "react-router-dom";

class Event extends Component {

    render() {

        const { event, getFormatedDateFromTimestamp } = this.props;

        return (
            <div className="event-container" id={'event-id-' + event.event_id}>
                <div className="background-square"></div>

                <div className="event-content">
                    <div className="event-meta-info">
                        <div className="event-date">
                            {getFormatedDateFromTimestamp(event.sdate, 'MM/DD')}
                        </div>
                        <div className="event-location">
                            {event.location_name}
                        </div>
                    </div>
                    <div className="event-detail-info">
                        <div className="event-detail-content">
                            <div className="event-title">
                                {event.title}
                            </div>
                            <div className="event-description">
                                {/* We need to cut the text if it exceeds 200 */}
                                {event.description.length > 200 ? event.description.substr(0, 200) + '...' : event.description}
                            </div>
                            <Link to={"/events/" + event.event_id} className="event-button-container">
                                <div className="event-button-background"></div>
                                <div className="event-button">
                                    <ArrowRightAltIcon></ArrowRightAltIcon> &nbsp; more details
                                </div>
                            </Link>
                        </div>
                        <div className="event-image">
                            <img src={eventImage} alt="event pic" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;