import React from 'react';
import {slide as Menu} from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Map
            </a>
            <a className="menu-item" href="/reportsandstats">
                Reports and Statistics
            </a>
            <a className="menu-item" href="http://www.veniceprojectcenter.org/vpc">
                Venice Project Center
            </a>
            <a className="menu-item" href="https://ckdata.herokuapp.com/">
                CK Data
            </a>
            <a className="menu-item" href="https://sites.google.com/view/ve20-comm/home?authuser=2">
                About Venice Shops
            </a>
            <a className="menu-item" href="/">
                Map Tutorial
            </a>
        </Menu>
    );
};