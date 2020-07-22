import React from 'react';
import SHOP from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP
        };
    }

    render() {
        return (
            <div className='shop-page'>
                shop page
                {
                    this.state.collections.map( ({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    ) )
                }
                
            </div>
        );
    }
}

export default ShopPage;