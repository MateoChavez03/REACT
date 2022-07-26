import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../context/CartContext';

import { Table, Button} from 'react-bootstrap';
import CartList from '../../components/CartList';
import createOrder from '../../helpers/createOrder';
import saveOrder from '../../helpers/saveOrder';

const CartContainer = () => {
  const navigate = useNavigate()
  const { cart, clearCart, removeProduct } = useContext(Cart);

  const totalPrice = cart.reduce((accum, game) => accum + (game.price * game.quantity), 0);

  const confirmOrder = async () => {
    const order = createOrder("Mateo Chavez", "mateochavez@gmail.com", 1111111, cart, totalPrice);
    saveOrder(cart, order);
  }

  const goHome = () => {
    navigate("/");
  }

  return (
    cart.length === 0 ?
      <div className='bg-black text-center min-vh-100 text-white d-flex flex-column justify-content-center align-items-center'>
        <div className='mt-3'> EMPTY CART </div>
        <Button variant='light' onClick={goHome} className="d-block mt-3"> BACK HOME </Button>
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
          <CartList cart={cart} onAdd={removeProduct} />
        </Table>
        <Button variant='light' className='mx-3' onClick={goHome}>Keep buying</Button>
        <Button variant='light' className='mx-3' onClick={confirmOrder}>Checkout</Button>
      </div>
  )
}

export default CartContainer