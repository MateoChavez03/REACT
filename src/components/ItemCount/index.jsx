import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoIosAddCircleOutline } from 'react-icons/io'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { BsMinecart } from 'react-icons/bs';

const ItemCount = ({stock, initial, onAdd}) => {

    let [count, setCount] = useState(initial);

    const handleAdd = () => {
        count < stock && setCount(count + 1);
    }

    const handleDecrement = () => {
        count > initial && setCount(count - 1);
    }
    
    return (
        <ButtonGroup aria-label="Basic example" size='lg'>
            <Button variant="light"> <IoIosInformationCircleOutline size={25} /> </Button>
            <Button variant="light" onClick={handleDecrement} disabled={count === initial}> <IoIosRemoveCircleOutline size={25} /> </Button>
            <Button variant="light"> {count} </Button>
            <Button variant="light"  onClick={handleAdd} disabled={count === stock}> <IoIosAddCircleOutline size={25} /> </Button>
            <Button variant="light" onClick={() => onAdd(count)}> <BsMinecart size={25} /></Button>
        </ButtonGroup>
    )
}

export default ItemCount