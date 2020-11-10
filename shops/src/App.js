import React from 'react';
import MapView from './components/MapView';
import MapFilter from './components/MapFilter';
import './css/homeMap.css';
import './css/siteLayout.css';

function App() {
  return (
    <div className="content">
      <div className="site-header">
        {/* Hamburger Menu */}
        <h1 id="page-title">Venice Shops</h1>
        {/* <a href="http://www.veniceprojectcenter.org/vpc"><h1 id="VPC">Visit VPC</h1></a> */}
      </div>
      <div className="site-body">
        <MapView />
        <MapFilter />
      </div>
    </div>
  );
}
export default App;
