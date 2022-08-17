import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import Swal from 'sweetalert2';
import getCollection from '../../firebase/getCollection';

const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const {categoryId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const getProducts = async () => {
      try {
        const products = await getCollection("products");
        setProducts(products);
        setProductsFiltered(products);
      } catch (error) {
        Swal.fire(`Error: ${error}`);
      }
    }
    getProducts();

  }, [])
  
  useEffect(() => {
    if (categoryId) {
      const productsFiltered = products.filter(el => el.console === categoryId);
      if (productsFiltered.length === 0) {
        navigate("*");
      } else {
        setProductsFiltered(productsFiltered);
      }
    } else {
      setProductsFiltered(products);
    }
  }, [categoryId, products, navigate])
  
  
  return (
    <div className='bg-black text-center min-vh-100' >
      {products.length !== 0 ?
        <ItemList products={productsFiltered} />
        :
        <div className="spinner-grow text-light position-absolute top-50 start-50" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  )
}

export default ItemListContainer