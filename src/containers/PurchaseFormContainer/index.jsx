import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import PurchaseForm from '../../components/PurchaseForm';

const PurchaseFormContainer = ({ cart, totalPrice }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered variant="light">
            <thead>
              <tr>
                <td> Name </td>
                <td> Quantity </td>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => {
                return <tr className='align-middle' key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                </tr>
              })}
            </tbody>
          </Table>
          <PurchaseForm cart={cart} totalPrice={totalPrice} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PurchaseFormContainer
