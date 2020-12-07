import React from 'react';
import MapFilter from '../components/MapFilter';
import MapView from '../components/MapView';
import '../css/mapFilter.css';

/*Component Javascript file that houses the entire map/home screen of the website */
function MapPage() {
    const [filter, setFilter] = React.useState({
        year: 2018,
        shopType: [],
        groupType: []
    });
    console.log(filter.year)
    return (
        <div className="site-body">
            <MapView filter={filter} setFilter={setFilter} />
            <MapFilter filter={filter} setFilter={setFilter} />
        </div>
    );
}
export default MapPage;