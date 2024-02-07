import React, {useState} from 'react';
import './App.css';
import Image from './components/Logo';
import NumChar from './components/NumChar';
import IncSymbol from './components/IncSymbol';
import IncMayus from './components/IncMayus';
import IncNumber from './components/IncNumber';
import GeneratePass from './components/GeneratePass';
import { Container } from 'react-bootstrap';
import generatePassword from './functions/generatePassword';

function App() {

  const onSubmit = (event) => {
    event.preventDefault()
    
    generatePassword()
  }

  return (
    
    <Container className='contenedor'>
      <Image />
      <form onSubmit={onSubmit}>
        <NumChar />
        <IncSymbol />
        <IncMayus />
        <IncNumber />
        <GeneratePass />
      </form>
    </Container>
  )
}



export default App;
