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
            <Button variant="dark"> <IoIosInformationCircleOutline size={30}/> </Button>
            <Button variant="dark" onClick={handleDecrement} disabled={count === initial}> <IoIosRemoveCircleOutline size={30}/> </Button>
            <Button variant="dark"> {count} </Button>
            <Button variant="dark"  onClick={handleAdd} disabled={count === stock}> <IoIosAddCircleOutline size={30}/> </Button>
            <Button variant="dark" onClick={() => onAdd(count)}> <BsMinecart size={30}/></Button>
        </ButtonGroup>
    )
}

export default ItemCount