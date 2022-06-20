import React from 'react';

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2 className="text-center text-light">{greeting}</h2>
    </div>
  )
}

export default ItemListContainer