import React, { createContext, useState } from 'react';

export const Cart = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [inCartProducts, setInCartProducts] = useState();

    const calculateTotal = () => {
        setTotalPrice(cart.reduce((accum, game) => accum + (game.price * game.quantity), 0));
    }

    const calculateProducts = () => {
        setInCartProducts(cart.reduce((accum, game) => accum + game.quantity, 0));
    }

    const addProduct = (product, qty) => {

        const productInCart = isInCart(product);

        if (productInCart) {
            productInCart.quantity += qty;

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
        <Cart.Provider value={{ cart, totalPrice, inCartProducts, addProduct, clearCart, removeProduct, calculateTotal, calculateProducts }}>
            {children}
        </Cart.Provider>
    )

}

export default CartProvider