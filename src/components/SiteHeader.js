import React from 'react';
import Sidebar from './Sidebar';
import '../css/siteLayout.css';

function SiteHeader(){
    return(
        <div className="site-header">
            <Sidebar pageWrapID={'site-body'} outerContainerId={'site-header'} />
            <h1 id="site-title">VENICE SHOPS</h1>
        </div>
    );
}
export default SiteHeader;