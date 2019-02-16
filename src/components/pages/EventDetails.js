import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import DetailMap from '../elements/DetailMap';
import MoreInfo from '../elements/MoreInfo';
// import Comments from '../elements/Comments';
import Footer from '../elements/Footer';
import { inject, observer } from "mobx-react";
import Loader from '../elements/Loader';

@inject('EventsStore')
@inject('CommentsStore')
@observer
class EventDetails extends Component {


    componentDidMount() {
        //  Set the current event to this one in the store
        const { EventsStore } = this.props;
        EventsStore.getEvent(this.props.match.params.id);
    }

    render() {
        const { EventsStore } = this.props;
        const event = EventsStore.currentEvent;

        return (
            <div className="event-details-container">
                <HeaderAlt></HeaderAlt>
                {EventsStore.eventLoading ? <div className="loader"><Loader></Loader></div> : event.event_id ? 
                <React.Fragment>
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
                                <DetailMap event={event}></DetailMap>
                            </div>
                        </div>
                    </div>
                {/* <Comments comments={comments}></Comments> */}
                </React.Fragment>
                : <div className="no-event">Event not found.</div>}
                <Footer></Footer>
            </div>
        );
    }
}

export default EventDetails;