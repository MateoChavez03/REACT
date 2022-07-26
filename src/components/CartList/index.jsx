import React from 'react';
import { Button } from 'react-bootstrap';

const CartList = ({cart, onAdd}) => {
    return (
        <tbody>
            {cart.map(product => {
                return <tr className='align-middle' key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.stock}</td>
                <td>${product.quantity * product.price}</td>
                <td className="d-grid gap-2"><Button variant='dark' className='bg-transparent border-0' onClick={() => onAdd(product.id)}>REMOVE</Button></td>
              </tr>
            })}
        </tbody>
    )
}

export default CartList