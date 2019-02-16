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
@observer
class Home extends Component {

    componentDidMount() {
        this.props.EventsStore.getEvents();

        //  Display the back to top fixed arrow if scroll > 100vh
        document.addEventListener('scroll', function(e) {
            if (document.getElementsByClassName('back-to-map-component')[0]) {
                document.getElementsByClassName('back-to-map-component')[0].style.display = (window.scrollY > window.innerHeight) ? 'initial' : 'none';
            }
        });
    }

    render() {
        const { EventsStore } = this.props;
        const events = EventsStore.events;
        const eventsLoading = EventsStore.eventsLoading;

        return (
            <div className="home-container">
                <Header></Header>
                <div className="map-container">
                    {/* <Map></Map> */}
                    <MapAlt events={events} onMarkerClick={this.handleMarkerClick}></MapAlt>
                </div>
                <MapFooter></MapFooter>
                <Filters></Filters>
                <Events events={events} eventsLoading={eventsLoading}></Events>
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
}

export default Home;