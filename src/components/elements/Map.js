import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import config from '../../config/config.json';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 25.05,
            lng: 121.50
        },
        zoom: 12
    };

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;