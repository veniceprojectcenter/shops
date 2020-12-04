import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import MarkerIcon from "../static/markerIcon.svg";
import "../css/markerPopup.css";
import Shops from "../data/venice_shops.json";
import Locations from "../data/location_test.json";

let DefaultIcon = L.icon({
    iconSize: [30,35],
    iconUrl: MarkerIcon,
  });

function MapMarker(){
    
    return( 
        <div>
            {Locations.map(locationData=>(
                <Marker position={[locationData.lat,locationData.lng]} icon={DefaultIcon}>
                        <Popup className="shop" maxWidth="98%">
                                <h4 class="pop-up">test</h4>
                                <div class= "image">
                                {/* Image caroseul placeholder */}
                                </div>
                                <h5>Address</h5>
                                <h6>CAMPIELLO GIOVANNI ANDREA DELLA CROCE O DE LA MALVASIA 2343</h6>
                                <h5>Year collected</h5>
                                <h6>2018</h6>
                                <div class="full">
                                    <div class="split">
                                        <h5>Shop Type</h5>
                                        <h6>Hotel with Restaurant</h6>
                                        <h5> Year Opened</h5>
                                        <h6>2015</h6>
                                    </div>
                                    <div class="split">
                                        <h5>Group Type</h5>
                                        <h6>Residential</h6>
                                        <h5>NACE Code</h5>
                                        <h6>G.52.4.8.24</h6> 
                                    </div>
                                </div>
                        </Popup>
                    </Marker>
            ))}
        </div>);
    
}
export default MapMarker;








// function MapMarkers(){
//     return(
//         <Marker position={[45.4359, 12.3341]} icon={DefaultIcon}>
//             <Popup className="shop" maxWidth="98%">
//                     <h4 class="pop-up">Antica Agenzia Artorizzata Peroperazion Presso il Mente Di Preta</h4>
//                     <div class= "image">
//                     {/* Image caroseul placeholder */}
//                     </div>
//                     <h5>Address</h5>
//                     <h6>CAMPIELLO GIOVANNI ANDREA DELLA CROCE O DE LA MALVASIA 2343</h6>
//                     <h5>Year collected</h5>
//                     <h6>2018</h6>
//                     <div class="full">
//                         <div class="split">
//                             <h5>Shop Type</h5>
//                             <h6>Hotel with Restaurant</h6>
//                             <h5> Year Opened</h5>
//                             <h6>2015</h6>
//                         </div>
//                         <div class="split">
//                             <h5>Group Type</h5>
//                             <h6>Residential</h6>
//                             <h5>NACE Code</h5>
//                             <h6>G.52.4.8.24</h6> 
//                         </div>
//                     </div>
//             </Popup>
//         </Marker>
//     );
// }
// export default MapMarkers;