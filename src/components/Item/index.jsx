import React from 'react';
import ItemCount from '../ItemCount';

import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

import Swal from 'sweetalert2';

const Item = ({product}) => {

    const onAdd = (count) => {
        count === 1 ?
        Swal.fire({
          position: 'bottom',
          width: '32rem',
          title: `${count} copy of ${product.name} added to cart`,
          showConfirmButton: false,
          timer: 1500,
          showClass: {
              popup: 'animate__animated animate__fadeInUp'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown'
            },
          customClass: {
            title: 'fs-6 m-0'
          }
        })
        :
        Swal.fire({
          position: 'bottom',
          width: '32rem',
          title: `${count} copies of ${product.name} added to cart`,
          showConfirmButton: false,
          timer: 1500,
          showClass: {
              popup: 'animate__animated animate__fadeInUp'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown'
            },
          customClass: {
            title: 'fs-6 m-0'
          }
        })
    }

    return (
        <Card border='light' id={product.id} bg={"black"} text={"light"} style={{ width: '28rem'}} className={"fs-5 m-5"}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className='bg-black text-white'>Price: ${product.price}</ListGroupItem>
                <ListGroupItem className='bg-black text-white'>Console: {product.console}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    )
}

export default Item