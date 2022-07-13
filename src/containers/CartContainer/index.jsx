import React, { useContext } from 'react';
import { Cart } from '../../context/CartContext';

import { Table, Button } from 'react-bootstrap';

const CartContainer = () => {

  const {cart, clearCart, removeProduct} = useContext(Cart);
  const totalPrice = cart.reduce((accum, game) => accum + (game.price * game.quantity), 0);

  return (
    cart.length === 0 ?
    <div className='bg-black text-center min-vh-100 text-white'>
      EMPTY CART
    </div>
    :
    <div className='bg-black text-center min-vh-100'>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className='align-middle'>
            <th>NAME</th>
            <th>QUANTITY</th>
            <th>STOCK</th>
            <th>TOTAL PRICE (${totalPrice})</th>
            <th className="d-grid gap-2"><Button variant='dark' className='fw-bold' onClick={clearCart}>CLEAR</Button></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => {
            return <tr className='align-middle' key={product.id}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.stock}</td>
            <td>${product.quantity * product.price}</td>
            <td className="d-grid gap-2"><Button variant='dark' className='bg-transparent border-0' onClick={() => removeProduct(product.id)}>REMOVE</Button></td>
          </tr>
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default CartContainer