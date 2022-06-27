import React from 'react';
import ItemCount from '../../components/ItemCount';

const ItemListContainer = () => {

  const onAdd = (count) => {
      count === 1 ? alert(`Se agrego ${count} al carrito`) : alert(`Se agregaron ${count} al carrito`);
  }

  return (
    <div className='bg-black  text-center'>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer