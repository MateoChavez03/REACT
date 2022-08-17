import React, { useContext } from 'react';

import { BsMinecart } from 'react-icons/bs';
import { BsMinecartLoaded } from 'react-icons/bs';
import { Cart } from '../../context/CartContext';

const CartWidget = () => {

    const { cart, inCartProducts, calculateProducts } = useContext(Cart);

    setTimeout(() => {
        calculateProducts();
    }, 1500);

    return (
        cart.length === 0 ?
            <BsMinecart size={35}/>
            :
            <div className="position-relative">
                <BsMinecartLoaded size={35} />
                <span className="position-absolute top-50 start-50 translate-middle"> {inCartProducts}</span>
            </div>
    )
}

export default CartWidget