import React from 'react';

import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({items, title}) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {
                items.filter((elem, id) => id<4).map( ({id, ...restOfParams}) => (
                    <CollectionItem item={id} {...restOfParams} />
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;