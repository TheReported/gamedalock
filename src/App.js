import React from 'react';
import './App.css';
import Image from './components/Logo';
import Part from './components/Part';

function App() {
  return (
    <div className='contenedor'>
      <Image />
      <form>
        <Part />
      </form>
    </div>
  )
}

export default App;
