import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ItemListContainer from '../../containers/ItemListContainer';
import ItemDetailContainer from '../../containers/ItemDetailContainer';
import Cart from '../../containers/CartContainer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const AppRouter = () => {
  return (
    <BrowserRouter >
        <Container fluid>
            <Row>
                <NavBar />
            </Row>
            <Row>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}> </Route>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}> </Route>
                    <Route path='/detail/:productId' element={<ItemDetailContainer/>}> </Route>
                    <Route path='/cart' element={<Cart/>}> </Route> 
                </Routes>
            </Row>
        </Container>
    </BrowserRouter>
  )
}

export default AppRouter