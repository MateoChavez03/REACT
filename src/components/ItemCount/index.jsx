import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { BsMinecart } from 'react-icons/bs';

const ItemCount = ({stock, initial, onAdd, game}) => {

    const [count, setCount] = useState(initial);
    const navigate = useNavigate();


    const addProduct = (num) => {
        setCount(count + num);
    }

    const navigateDetail = () => {
        navigate(`/detail/${game.id}`);
    }
    
    return (
        <ButtonGroup size='lg'>
            <Button variant="light" onClick={navigateDetail}> <IoIosInformationCircleOutline size={25} /> </Button>
            <Button variant="light" onClick={() => {addProduct(-1)}} disabled={count === initial ? true : null}> <IoIosRemoveCircleOutline size={25} /> </Button>
            <Button variant="light"> {count} </Button>
            <Button variant="light" onClick={() => {addProduct(1)}} disabled={count === stock ? true : null}> <IoIosAddCircleOutline size={25} /> </Button>
            <Button variant="light" onClick={() => onAdd(count)}> <BsMinecart size={25} /></Button>
        </ButtonGroup>
    )
}

export default ItemCount