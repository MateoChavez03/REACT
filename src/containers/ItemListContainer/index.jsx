import React, { useEffect, useState } from 'react';

import ItemList from '../../components/ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState(null)

    useEffect(() => {

      const getProductos = async () => {
        try {
          const response = await fetch('/mocks/data.json');
          const data = await response.json();
          setProductos(data);
        } catch (error) {
          console.log(error);
        }
      }

      getProductos();

      }, [])

    return (
      <div className='bg-black text-center d-flex'>
        {productos ?
          <ItemList products={productos} />
          :
          null
        }
      </div>
    )
}

export default ItemListContainer