import React, { Component } from 'react';
import Header from '../elements/Header';
// import Map from '../elements/Map';
import MapFooter from '../elements/MapFooter';
import Filters from '../elements/Filters';
import Events from '../elements/Events';
import Footer from '../elements/Footer';
import MapAlt from '../elements/MapAlt';

import { inject, observer } from "mobx-react";
// import Loader from './Loader';

@inject('EventsStore')
@observer
class Home extends Component {

    componentDidMount() {
        this.props.EventsStore.getEvents();
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
                    <MapAlt events={events}></MapAlt>
                </div>
                <MapFooter></MapFooter>
                <Filters></Filters>
                <Events events={events} eventsLoading={eventsLoading}></Events>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;