import React, {Component} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';

class MapView extends React.Component {
  render(){
      return (
        <MapContainer style={{ height: "100%" }} center={[45.4359, 12.3355]} zoom={13.5} id='map'>
        <TileLayer
          attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      );
  }
}
export default MapView;