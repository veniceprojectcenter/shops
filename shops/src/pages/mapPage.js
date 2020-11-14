import React from 'react';
import MapFilter from '../components/MapFilter';
import MapView from '../components/MapView';
import SiteHeader from '../components/SiteHeader';
import '../css/homeMap.css';


function MapPage() {
    return (
        <div className="site-body">
            <MapView />
            <MapFilter />
        </div>
    );
}
export default MapPage;