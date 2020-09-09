import React from 'react';

import './custom-button.styles.scss';

const CustomBtn = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? isGoogleSignIn : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomBtn;