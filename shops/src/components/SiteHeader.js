import React from 'react';
import Menu from '../static/menu-white-24dp.svg';

class SiteHeader extends React.Component{
    render(){
        return(
            <div className="site-header">
                <img id="menu" src={Menu} alt="Navigation Menu"/>
                <h1 id="page-title">Venice Shops</h1>
            </div>
        );
    }
}
export default SiteHeader;