import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imgurl, size }) => {
    return (
        <div className={`menu-item ${size}`}>

            <div className='background-image' style={{ backgroundImage: `url(${imgurl})` }}></div>

            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>        
    );
}

export default MenuItem;