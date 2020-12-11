import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import '../css/sideBar.css';

/**
 * Sidebar
 * Component to generate the sidebar navigation menu. Using the react-burger-menu library
 * all aspects of the navigation menu are generated here as well in the respective CSS file.
 * Only modification to note is that this navigation menu doesn't support Google's accessibility
 * features due to overidden modifications in sideBar.css. The library does inherently support it
 * if it ever needed to be reveresed. 
 */
const Sidebar = () => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Map
            </a>
            <a className="menu-item" href="https://sites.google.com/view/ve20-comm/home?authuser=2">
                About Venice Shops
            </a>
            <a className="menu-item" href="http://www.veniceprojectcenter.org/vpc">
                Venice Project Center
            </a>
            <a className="menu-item" href="https://ckdata.herokuapp.com/">
                CK Data
            </a>
        </Menu>
    );
};
export default Sidebar;