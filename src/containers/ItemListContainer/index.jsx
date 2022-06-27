import React from 'react';
import ItemCount from '../../components/ItemCount';
import Swal from 'sweetalert2';

const ItemListContainer = () => {

  const onAdd = (count) => {
    Swal.fire({
      position: 'bottom',
      width: '32rem',
      title: `Added ${count} to cart`,
      showConfirmButton: false,
      timer: 1500,
      showClass: {
          popup: 'animate__animated animate__fadeInUp'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown'
        },
      customClass: {
        title: 'fs-6 m-0'
      }
    })
  }

  return (
    <div className='bg-black text-center'>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer