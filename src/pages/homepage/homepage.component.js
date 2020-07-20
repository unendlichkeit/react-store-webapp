import React from 'react';

import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

class HomePage extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        console.log(this.props);
        return (
            <div className='homepage'>
                <Directory />
            </div>
        )        
    }
} 

export default HomePage;