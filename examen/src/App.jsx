import { useState } from 'react'
import './App.css'
import Grilla from './Grilla'

function App() {
  return (
    <>
  
    <Grilla/>
    
    <div className='buttons'>
    <button className='button'>sumar</button>
    <button className='button'>restar</button>
    <button className='button' >mostrar resultados</button>
    <button className='button' >dividir</button>
    <button className='button' >multiplicar</button>
 
    </div>
    </>
  )
}

export default App
