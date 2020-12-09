import React from 'react';
import MapFilter from '../components/MapFilter';
import MapView from '../components/MapView';
import '../css/mapFilter.css';

/*Component Javascript file that houses the entire map/home screen of the website */
function MapPage() {
    const [filter, setFilter] = React.useState({
        selected2004: false,
        selected2005: false,
        selected2009: false,
        selected2010: false,
        selected2011: false,
        selected2012: false,
        selected2015: true,
        selected2018: true,
        shopType: [],
        groupType: [
            { value: 'Mixed', label: 'Mixed' },
            { value: 'Residential', label: 'Residential' },
            { value: 'Tourist', label: 'Tourist' }
        ]
    });

    return (
        <div className="site-body">
            <MapView filter={filter}/>
            <MapFilter filter={filter} setFilter={setFilter} />
        </div>
    );
}
export default MapPage;