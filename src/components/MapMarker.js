import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import MarkerDefault from "../static/markerDefault.svg";
import Marker2004 from "../static/marker2004.svg";
import Marker2005 from "../static/marker2005.svg";
import Marker2009 from "../static/marker2009.svg";
import Marker2010 from "../static/marker2010.svg";
import Marker2011 from "../static/marker2011.svg";
import Marker2012 from "../static/marker2012.svg";
import Marker2015 from "../static/marker2015.svg";
import Marker2018 from "../static/marker2018.svg";
import "../css/markerPopup.css";
import Shops from "../data/venice_shops.json";
import Locations from "../data/store_locations.json";

/**
 * MapMarker(filter)
 * Component creates variable markers to be view over tilelayer in parent component
 *
 * Builds unifie array of Store Locations and Venice Shops based on foreign key relation
 * 
 * Filters array to then generate markers from temporary array using the state hook named data
 */

function MapMarker({ filter }) {

    const shopsLocations = Shops.map(shop =>({
        ...Locations.find((location) => (shop.parent_id === location.parent_id)),...shop 
        }));
    
    const [data, setData] = React.useState(shopsLocations);

    //Generating the various marker colors for each year 
    const iconDefault = L.icon({
        iconSize: [30, 35],
        iconUrl: MarkerDefault,
    });

    const icon2004 = L.icon({
        iconSize: [30, 35],
        iconUrl: Marker2004,
    });

    const icon2005 = L.icon({
        iconSize: [30, 35],
        iconUrl: Marker2005,
    });

    const icon2009 = L.icon({
        iconSize: [30, 35],
        iconUrl: Marker2009,
    });

    const icon2010 = L.icon({
        iconSize: [30, 35],
        iconUrl: Marker2010,
    });

    const icon2011 = L.icon({
        iconSize: [30, 35],
        iconUrl: Marker2011,
    });

    const icon2012 = L.icon({
        iconSize: [30, 35],
        iconUrl: Marker2012,
    });

    const icon2015 = L.icon({
        iconSize: [30, 35],
        iconUrl: Marker2015,
    });

    const icon2018 = L.icon({
        iconSize: [30, 35],
        iconUrl: Marker2018,
    });
    //--------------------------------------
    
    
    //Builds temporary array by setting data equal to filtered options of combined dataset
    React.useEffect(() => {
            setData(shopsLocations.filter(element => {
                if(filter.groupType.some(type => type.value === element.group_type) || filter.shopType.some(type => type.value === element.store_type)){
                    if(filter.selected2004 === true && element.year_collected === 2004){
                        return element
                    }
                    if(filter.selected2005 === true && element.year_collected === 2005){
                        return element
                    }
                    if(filter.selected2009 === true && element.year_collected === 2009){
                        return element
                    }
                    if(filter.selected2010 === true && element.year_collected === 2010){
                        return element
                    }
                    if(filter.selected2011 === true && element.year_collected === 2011){
                        return element
                    }
                    if(filter.selected2012 === true && element.year_collected === 2012){
                        return element
                    }
                    if(filter.selected2015 === true && element.year_collected === 2015){
                        return element
                    }
                    if(filter.selected2018 === true && element.year_collected === 2018){
                        return element
                    }
                }
                return false;
            }))
    }, [filter, shopsLocations]);

    
    return( 
        <div>
            {data.map((shopsData, index)=>(

                <Marker position={[shopsData.lat, shopsData.lng]} 
                icon={shopsData.year_collected === 2004 ? icon2004 
                    :shopsData.year_collected === 2005 ? icon2005
                    :shopsData.year_collected === 2009 ? icon2009
                    :shopsData.year_collected === 2010 ? icon2010
                    :shopsData.year_collected === 2011 ? icon2011
                    :shopsData.year_collected === 2012 ? icon2012
                    :shopsData.year_collected === 2015 ? icon2015
                    :shopsData.year_collected === 2018 ? icon2018
                    :iconDefault} 
                key={index}>
                        <Popup className="shop" maxWidth="98%">
                            <h4 className="pop-up">{shopsData.store_name}</h4>
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