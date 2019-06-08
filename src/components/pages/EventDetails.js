import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import DetailMap from '../elements/DetailMap';
import MoreInfo from '../elements/MoreInfo';
// import Comments from '../elements/Comments';
import Footer from '../elements/Footer';
import { inject, observer } from "mobx-react";
import Loader from '../elements/Loader';
import Comments from '../elements/Comments';

@inject('EventDetailsStore')
@inject('UserStore')
@observer
class EventDetails extends Component {


    componentDidMount() {
        //  Set the current event to this one in the store
        const { EventDetailsStore, UserStore } = this.props;
        EventDetailsStore.getEvent(this.props.match.params.id);

        //  Initiate the user timezone
        UserStore.setUserTimezone();
    }

    render() {
        const { EventDetailsStore, UserStore } = this.props;
        const event = EventDetailsStore.currentEvent;
        const participantsCount = EventDetailsStore.participantsCount;
        const submitParticipant = EventDetailsStore.submitParticipant;
        // const comments = EventDetailsStore.comments;

        return (
            <div className="event-details-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn} userObject={this.props.UserStore.userObject}></HeaderAlt>
                {EventDetailsStore.eventLoading ? <div className="loader"><Loader></Loader></div> : event.event_id ?
                    <React.Fragment>
                        <div className="event-details-content">
                            <div className="event-meta-info">
                                <div className="event-date">
                                    {UserStore.getFormatedDateFromTimestamp(event.sdate, 'MM/DD')}
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
                                    <MoreInfo event={event} participantsCount={participantsCount} submitParticipant={submitParticipant}></MoreInfo>
                                </div>
                                <div className="event-map">
                                    <DetailMap event={event}></DetailMap>
                                </div>
                            </div>
                        </div>
                        <Comments comments={EventDetailsStore.comments} formatTimestamp={UserStore.getFormatedDateFromTimestamp} addCommentInput={EventDetailsStore.addCommentInput} changeCommentInput={EventDetailsStore.updateCommentInput} submitCommentInput={EventDetailsStore.submitCommentInput} commentLength={EventDetailsStore.commentLength} userId = {UserStore.userId} getUser={UserStore.getUser} userLoggedIn={UserStore.userLoggedIn}></Comments>
                    </React.Fragment>
                    : <div className="no-event">Event not found.</div>}
                <Footer></Footer>
            </div>
        );
    }
}

export default EventDetails;