import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState();
    const { productId } = useParams();

    useEffect (() => {

      const getProductDetail = async () => {
        try {
            const response = await fetch('/mocks/data.json');
            const data = await response.json();
            const filter = data.find(el => el.id.toString() === productId);
            setProductDetail(filter);
        } catch (error) {
            console.log(error);
        }
      }
      
      getProductDetail();
      
    }, [productId]);

    return (
      <div className='bg-black text-center min-vh-100'>
        {productDetail ?
          <ItemDetail gameDetail={productDetail} />
          :
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      </div>
    )
}

export default ItemDetailContainer