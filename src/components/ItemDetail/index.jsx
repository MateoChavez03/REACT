import React from 'react';
import Item from '../Item';

const ItemDetail = ({gameDetail}) => {

    return (
        <div className='d-flex flex-wrap justify-content-evenly'>
            <Item product={gameDetail} size={"40rem"}/>
            <div className='mt-3 text-white text-center'>
              <h2>{gameDetail.name}</h2>
              <p className='fs-4 mt-4'>Console: {gameDetail.console}</p>
              <p className='fs-4 mt-4'>Price: ${gameDetail.price}</p>
              <p className='fs-4 mt-4 px-5'>{gameDetail.info}</p>
            </div>
        </div>
    )
}

export default ItemDetail