import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = 'AIzaSyApQQO6ihykW1keVt597KueN-Qsxxg7hwo';
const lat = 43.706530;
const lng = -79.392020;

export class MapContainer extends React.Component {

  render() {

    return (
      <div className={this.props.className}>
        <Map
          google={this.props.google}
          initialCenter={{
            lat,
            lng
          }}
          zoom={14}>
          <Marker
            name={'Current location'}
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer)
