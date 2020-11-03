import React from 'react';
import MapView from './components/MapView';
import './css/homeMap.css';
import './css/siteLayout.css';

function App() {
  return (
    <div className="content">
      <div className="site-header">
        {/* Hamburger Menu */}
        <h1 id="page-title">Shops by Venice Project Center</h1>
      </div>
      <div className="site-body">
        <MapView/>
      </div>
    </div>
  );
}

export default App;
