import React, { Component } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from "react-router-dom";

class Event extends Component {

    state = {
        imageUrl: ''
    }

    render() {

        const { event, getFormatedDateFromTimestamp, getEventImage } = this.props;

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
                            {this.state.imageUrl === 'https://positiveactions-img.s3.amazonaws.com/default.png' ?
                                <div className="no-image">No picture for this event yet.</div> : 
                                <img src={this.state.imageUrl} alt="event pic" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const { event, getEventImage } = this.props;

        if (event.img) {
            getEventImage(event.img).then(res => {
                this.setState({imageUrl: res.url})
            });
        }

    }
}

export default Event;