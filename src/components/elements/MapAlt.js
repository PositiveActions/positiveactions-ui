import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';
import _ from 'lodash';
// import config from '../../config/config.json';
import MapMarkers from "./MapMarkers.js";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + config.googlMapsKey,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 25.05, lng: 121.5
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new window.google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.props.handlePositionChange({lat: nextCenter.lat(places[0].formatted_address), lng:nextCenter.lng(places[0].formatted_address)});

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) => {

    const handleMarkerClick = (event) => {
        props.onMarkerClick(event);
    }

    return <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={10}
    center={props.userLocation}
    >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
        <input className="searchbox-input" type="text" placeholder="Search Location"/>
    </SearchBox>
    <MapMarkers events={props.events} onMarkerClick={handleMarkerClick}></MapMarkers>
  </GoogleMap>
}
);

export default class MyFancyComponent extends React.PureComponent {

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = (event) => {
    this.props.onMarkerClick(event);
  }

  handlePositionChange = (center) => {
    this.props.handlePositionChange(center);
  }

  render() {
    return (
      <MyMapComponent
        onMarkerClick={this.handleMarkerClick}
        events={this.props.events}
        userLocation={this.props.userLocation}
        handlePositionChange={this.handlePositionChange}
      />
    )
  }
}