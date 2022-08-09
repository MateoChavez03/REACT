import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import createOrder from '../../helpers/createOrder';
import saveOrder from '../../helpers/saveOrder';

const PurchaseForm = ({ cart, totalPrice }) => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  const confirmOrder = () => {
    const order = createOrder(name, surname, email, phoneNumber, cart, totalPrice);
    saveOrder(cart, order);
  }

  const textOnly = (event) => {

    if (!(((event.keyCode >= 65) && (event.keyCode <= 90)) ||
      (event.keyCode === 192) ||
      (event.keyCode === 8) ||
      (event.keyCode === 32)
    )) {
      event.preventDefault()
    }
  }

  return (
    <Form>
      <p> Total Price: ${totalPrice}</p>
      <Form.Group className="mb-3" controlId="First Name">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          minLength={3}
          onChange={(event) => setName(event.target.value)}
          onKeyDown={(event) => textOnly(event)}
          type="text"
          placeholder="First Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Last Name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          minLength={3}
          onChange={(event) => setSurname(event.target.value)}
          onKeyDown={(event) => textOnly(event)}
          type="text"
          placeholder="Last Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Phone Number">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          required
          minLength={3}
          onChange={(event) => setPhoneNumber(event.target.value)}
          type="number"
          placeholder="Phone Number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirm email</Form.Label>
        <Form.Control
          required
          onChange={(event) => setEmailConfirm(event.target.value)}
          type="email"
          placeholder="Confirm email"
        />
      </Form.Group>
      <Button variant="dark" type="button" onClick={() => {
        confirmOrder()
      }}
        disabled={((name.length > 3) && (surname.length > 3) && (email.includes("@")) && (emailConfirm === email) && (emailConfirm.includes("@"))) ? false : true}>
        Checkout
      </Button>
    </Form>
  );
}

export default PurchaseForm;