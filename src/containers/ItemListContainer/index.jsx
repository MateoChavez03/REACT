import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemListContainer = () => {

  const [products, setProducts] = useState();
  const { categoryId } = useParams();

  useEffect(() => {

    const getProducts = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const products = []
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() })
        });

        if (categoryId) {
          const filter = products.filter(el => el.console === categoryId);
          setProducts(filter);
        } else {
          setProducts(products);
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
        <div className="spinner-grow text-light position-absolute top-50 start-50" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  )
}

export default ItemListContainer