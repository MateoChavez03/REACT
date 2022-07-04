import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
      const getProducts = async ( ) => {
        try {
            const response = await fetch('/mocks/data.json');
            const data = await response.json();
            if(categoryId){
                const filter = data.filter(el => el.console === categoryId);
                setProducts(filter);
            }else{
                setProducts(data);
            }
        } catch (error) {
            console.log(error)
        }        
      }
      
      getProducts();
      
    }, [categoryId])

    return (
      <div className='bg-black text-center min-vh-100' >
        {products ?
          <ItemList products={products} />
          :
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
      </div>
    )
}

export default ItemListContainer