import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate()

  const goHome = () => {
    navigate("/");
  }

  return (
    <div className='bg-black text-center min-vh-100 text-white d-flex flex-column justify-content-center align-items-center'>
      <h1>Page not found</h1>
      <Button variant='light' onClick={goHome} className="d-block mt-3"> BACK HOME </Button>
    </div>
  )
}

export default NotFound