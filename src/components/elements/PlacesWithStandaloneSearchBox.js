import React from 'react';
import config from '../../config/config.json';

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
} = require("react-google-maps");
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=" + process.env.GOOGLEMAPS_APIKEY,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          this.props.onAddEventChange('location-name', {target: {value: places[0].formatted_address}});
          this.props.onAddEventChange('coordinates', {target: {value: {lat: places[0].geometry.location.lat(), lng: places[0].geometry.location.lng()}}});

          this.setState({
            places,
          });
        },
      })
    },
  }),
  withScriptjs  
)(props =>
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Location"
        className="standalone-map-input"
        value={props.addEventLocationName}
        onChange={props.onAddEventChange.bind(this, 'location-name')}
      />
    </StandaloneSearchBox>
  </div>
);

export default PlacesWithStandaloneSearchBox;