import React from 'react';

import './custom-button.styles.scss';

const CustomBtn = ({ children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? isGoogleSignIn : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomBtn;