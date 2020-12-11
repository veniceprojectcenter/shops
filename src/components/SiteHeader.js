import React from 'react';
import Sidebar from './Sidebar';
/**
 * SiteHeader()
 * Component for sitewide header, includes sidebar navigation component
 */
function SiteHeader(){
    return(
        <div className="site-header">
            <Sidebar pageWrapID={'site-body'} outerContainerId={'site-header'} />
            <h1 id="site-title">VENICE SHOPS</h1>
        </div>
    );
}
export default SiteHeader;