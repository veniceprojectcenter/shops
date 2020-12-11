import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import MapMarker from '../components/MapMarker';


/**
 * MapView(filter)
 * Component to display the map of Venice using react-leaflet and pulling the map tiles from mapbox currently
 * Calls MapMarker component to render markers over tilelayer when Filter statehook changes
 */

function MapView({filter}) {
  return (
    <div style={{height: '100%', position: "relative", zIndex: 0}}>
      <MapContainer style={{ height: "100%"}} center={[45.4359, 12.3341]} zoom={14.5} id='map'>
      <TileLayer
        attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        // url to use for open-source map
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        accessToken= "pk.eyJ1IjoibGFmZXJuIiwiYSI6ImNrZ3U5YTNobDA2dGcyc2xsanRnbTg3a3UifQ.te0Hwi2LVObc0uDhrqQa_g"
        id= "mapbox/streets-v11"
        maxZoom= "20"
      />
      <MapMarker filter={filter} />
      </MapContainer>
    </div>
  );
}
export default MapView;