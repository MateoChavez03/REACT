import React from 'react'
import Item from '../Item';

const ItemList = ({products}) => {
    return (
        <div className='d-flex row justify-content-around'>
            {products.map(producto => {
                return <Item product={producto} key={producto.id}/>
            })}
        </div>
    )
}

export default ItemList