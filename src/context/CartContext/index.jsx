import React, { createContext, useState } from 'react';

export const Cart = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProduct = (product, qty) => {

        const productInCart = isInCart(product);

        if (productInCart) {
            productInCart.quantity += qty;
            productInCart.quantity = Math.min(productInCart.quantity, productInCart.stock);
            setCart([...cart]);
        } else {
            setCart([...cart, { ...product, quantity: qty }]);
        }
    }

    const isInCart = (product) => {
        return cart.find(game => game.id === product.id)
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeProduct = (id) => {
        const filter = cart.filter(product => product.id !== id)
        setCart(filter);
    }

    return (
        <Cart.Provider value={{ cart, setCart, addProduct, clearCart, removeProduct }}>
            {children}
        </Cart.Provider>
    )

}

export default CartProvider