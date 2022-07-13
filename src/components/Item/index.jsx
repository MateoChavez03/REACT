import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import { Cart } from '../../context/CartContext';

import { Button, ButtonGroup, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Item = ({product, size, inDetail}) => {

    const [qtyAdded, setQtyAdded] = useState(0);
    const navigate = useNavigate();
    const {addProduct} = useContext(Cart);

    const toCart = () => {
        navigate("/cart");
    }

    const toHome = () => {
        navigate("/");
    }

    const onAdd = (count) => {

        setQtyAdded(count);
        addProduct(product, count);

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
        <Card border='light' id={product.id} bg={"black"} text={"light"} style={{ width: size}} className={"fs-5 m-4 max-vw-100"}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className='bg-black text-white'>Price: ${product.price}</ListGroupItem>
                <ListGroupItem className='bg-black text-white'>Console: {product.console}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                {inDetail ?
                      !qtyAdded ?
                          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} game={product}/>
                      :
                          <ButtonGroup size='lg'>
                            <Button variant='light' onClick={toCart}> Go to cart </Button>
                            <Button variant='light' onClick={toHome}> Back Home </Button>
                          </ButtonGroup>
                :
                    <ItemCount stock={product.stock} initial={1} onAdd={onAdd} game={product}/>
                }
            </Card.Body>
        </Card>
    )
}

export default Item