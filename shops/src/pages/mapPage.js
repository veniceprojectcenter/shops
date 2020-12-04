import React from 'react';
import MapFilter from '../components/MapFilter';
import MapView from '../components/MapView';
import '../css/mapFilter.css';

/*Component Javascript file that houses the entire map/home screen of the website */
function MapPage() {
    return (
        <div className="site-body">
            <MapView />
            <MapFilter />
        </div>
    );
}
export default MapPage;