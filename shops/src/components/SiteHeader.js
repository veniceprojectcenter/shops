import React from 'react';
import Sidebar from './Sidebar';
// import Menu from '../static/menu-white-24dp.svg';

class SiteHeader extends React.Component{
    

    render(){
        return(
            <div className="site-header">
                <Sidebar pageWrapID={'site-body'} outerContainerId={'site-header'} />
                <h1 id="page-title">VENICE SHOPS</h1>
            </div>
        );
    }
}
export default SiteHeader;