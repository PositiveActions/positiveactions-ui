import React, { Component } from 'react';
import Header from '../elements/Header';
import Map from '../elements/Map';
import MapFooter from '../elements/MapFooter';
import Filters from '../elements/Filters';
import Events from '../elements/Events';
import Footer from '../elements/Footer';
import MapAlt from '../elements/MapAlt';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Header></Header>
                <div className="map-container">
                    {/* <Map></Map> */}
                    <MapAlt></MapAlt>
                </div>
                <MapFooter></MapFooter>
                <Filters></Filters>
                <Events></Events>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;