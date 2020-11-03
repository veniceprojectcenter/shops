import React, {Component} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';

class MapView extends Component{

render() {
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id='map'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
    );
}
}
export default MapView;