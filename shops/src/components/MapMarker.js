import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import MarkerIcon from "../static/markerIcon.svg";
import "../css/markerPopup.css";
import Shops from "../data/venice_shops.json";
import Locations from "../data/store_locations.json";

let DefaultIcon = L.icon({
    iconSize: [30,35],
    iconUrl: MarkerIcon,
  });

function MapMarker({ filter }) {
    const shopsLocations = Shops.map(shop =>({
        ...Locations.find((location) => (shop.parent_id === location.parent_id)),...shop 
        }));
    
    const [data, setData] = React.useState(shopsLocations);
    console.log(data);

    const filterUpdate = React.useEffect(() => {
        setData(shopsLocations.filter(element => 
            element.year_collected == filter.year
        ))
        console.log(data)
    }, [filter]);

    
    return( 
        <div>
            {data.map((shopsData, index)=>(

                <Marker position={[shopsData.lat, shopsData.lng]} icon={DefaultIcon} key={index}>
                        <Popup className="shop" maxWidth="98%">
                            <h4 className="pop-up">{shopsData.store_name}</h4>
                            <div className= "image">
                            {/* Image caroseul placeholder */}
                            </div>
                            <h5>Address</h5>
                            <h6>{shopsData.address_street}</h6>
                            <h5>Year collected</h5>
                            <h6>{shopsData.year_collected}</h6>
                            <div className="full">
                                <div className="split">
                                    <h5>Shop Type</h5>
                                    <h6>{shopsData.store_type}</h6>
                                    <h5> Year Opened</h5>
                                    <h6>{shopsData.year_open}</h6>
                                </div>
                                <div className="split">
                                    <h5>Group Type</h5>
                                    <h6>{shopsData.group_type}</h6>
                                    <h5>NACE Code</h5>
                                    <h6>{shopsData.nace_code}</h6> 
                                </div>
                            </div>
                        </Popup>
                    </Marker>
            ))}
        </div>);
    
}
export default MapMarker;