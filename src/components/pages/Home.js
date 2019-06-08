import React, { Component } from 'react';
import Header from '../elements/Header';
// import Map from '../elements/Map';
import MapFooter from '../elements/MapFooter';
import Filters from '../elements/Filters';
import Events from '../elements/Events';
import Footer from '../elements/Footer';
import MapAlt from '../elements/MapAlt';

import { inject, observer } from "mobx-react";
import BackToMap from '../elements/BackToMap';
// import Loader from './Loader';

@inject('EventsStore')
@inject('UserStore')
@observer
class Home extends Component {

    componentDidMount() {
        const showPosition = (position) => {
            //  If position access given, set current position if first time on home this session
            if (!this.props.EventsStore.userLocationInitiated) {
                this.props.EventsStore.setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
            }
            this.props.EventsStore.getEvents();
        }
        //  Ask for position permission
        navigator.geolocation.getCurrentPosition(showPosition);

        this.props.EventsStore.getEvents();

        //  Display the back to top fixed arrow if scroll > 100vh
        document.addEventListener('scroll', function (e) {
            if (document.getElementsByClassName('back-to-map-component')[0]) {
                document.getElementsByClassName('back-to-map-component')[0].style.display = (window.scrollY > window.innerHeight) ? 'initial' : 'none';
            }
        });

        //  Initiate the user timezone
        this.props.UserStore.setUserTimezone();

    }

    render() {
        const { EventsStore, UserStore } = this.props;
        const events = EventsStore.filteredEvents;
        const eventsLoading = EventsStore.eventsLoading;

        //  Get location from store. If no location access given, it takes the default location in store.
        const userLocation = EventsStore.userLocation;

        return (
            <div className="home-container">
                <Header userLoggedIn={UserStore.userLoggedIn} userObject={this.props.UserStore.userObject}></Header>
                <div className="map-container">
                    {/* <Map></Map> */}
                    <MapAlt events={events} onMarkerClick={this.handleMarkerClick} userLocation={userLocation} handlePositionChange={this.handlePositionChange}></MapAlt>
                </div>
                <MapFooter></MapFooter>
                <Filters events={events} filterEvents={EventsStore.filterEvents}></Filters>
                <Events events={events} eventsLoading={eventsLoading} getFormatedDateFromTimestamp={UserStore.getFormatedDateFromTimestamp}></Events>
                <Footer></Footer>
                <div className="back-to-map-component">
                    <BackToMap ></BackToMap>
                </div>
            </div>
        );
    }

    handleMarkerClick = (event) => {
        const { EventsStore } = this.props;
        EventsStore.setActiveEvent(event.event_id);
        window.scrollTo({ top: document.getElementById('event-id-' + event.event_id).offsetTop, behavior: 'smooth' });
    }

    handlePositionChange = (center) => {
        this.props.EventsStore.setUserLocation(center);
        this.props.EventsStore.getEvents();
    }
}

export default Home;