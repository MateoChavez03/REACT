import React, { useEffect, useState } from 'react';

import ItemList from '../../components/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {

      const getProducts = async () => {
        try {
          const response = await fetch('/mocks/data.json');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.log(error);
        }
      }

      getProducts();

      }, [])

    return (
      <div className='bg-black text-center d-flex'>
        {products ?
          <ItemList products={products} />
          :
          null
        }
      </div>
    )
}

export default ItemListContainer