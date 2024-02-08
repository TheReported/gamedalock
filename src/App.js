import React, {useState, useEffect} from 'react';
import './App.css';
import Image from './components/Logo';
import NumChar from './components/NumChar';
import IncSymbol from './components/IncSymbol';
import IncMayus from './components/IncMayus';
import IncNumber from './components/IncNumber';
import GeneratePass from './components/GeneratePass';
import { Container } from 'react-bootstrap';
import generatePassword from './functions/generatePassword';

const defaultConf = {
  'numChars': 12,
  'symbols': true,
  'numbers': true,
  'mayus': true,
  'genPass': "",
}

function App() {
  for (const [field, value] of Object.entries(defaultConf)){
    localStorage.setItem(field, value)
  }
  const [password, setPassword] = useState(localStorage.getItem('genPass'))
  useEffect(() => {
    const newPassword = generatePassword(localStorage)

    setPassword(newPassword)
    localStorage.setItem("genPass", newPassword)

}, [])


  const onSubmit = (event) => {
    event.preventDefault()
    const newPassword = generatePassword(localStorage)

    setPassword(newPassword)
    localStorage.setItem("genPass", newPassword)
  }

  return (
    
    <Container className='contenedor'>
      <Image />
      <form onSubmit={onSubmit}>
        <NumChar />
        <IncSymbol />
        <IncMayus />
        <IncNumber />
        <GeneratePass prop={password}/>
      </form>
    </Container>
  )
}



export default App;
