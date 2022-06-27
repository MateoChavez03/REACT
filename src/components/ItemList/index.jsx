import React from 'react'
import Item from '../Item';

const ItemList = ({products}) => {
    return (
        <div className='d-flex row justify-content-around'>
            {products.map(game => {
                return <Item product={game} key={game.id}/>
            })}
        </div>
    )
}

export default ItemList