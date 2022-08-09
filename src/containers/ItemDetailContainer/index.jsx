import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState();
  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {

    const getProductDetail = async () => {
      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productDetail = { id: docSnap.id, ...docSnap.data() };
          setProductDetail(productDetail);
        } else {
          navigate("*");
        }

      } catch (error) {
        console.log(error);
      }
    }

    getProductDetail();
  }, [productId, navigate]);

  return (
    <div className='bg-black text-center min-vh-100'>
      {productDetail ?
        <ItemDetail gameDetail={productDetail} />
        :
        <div className="spinner-grow text-light position-absolute top-50 start-50" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  )
}

export default ItemDetailContainer