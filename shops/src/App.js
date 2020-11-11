import React from 'react';
import MapView from './components/MapView';
import MapFilter from './components/MapFilter';
import SiteHeader from './components/SiteHeader';
import './css/homeMap.css';
import './css/siteLayout.css';

function App() {
  return (
    <div className="content">
      <SiteHeader />
      <div className="site-body">
        <MapView />
        <MapFilter />
      </div>
    </div>
  );
}
export default App;
