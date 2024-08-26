import { useState } from 'react'
import './App.css'

function Grilla() {
    const [value, setValue] = useState('');

    const values = (value) => {
      setValue(((prevValue) => prevValue + value)); 
    };
    const limpiar = (value) => {
        setValue(''); 
      };

  return (

    <>
      <input className='input' type="number"  value={value} />
   <div className="grid-container">
   <button className="item" onClick={() => values(1)}>1</button>
      <button className="item" onClick={() => values(2)}>2</button>
      <button className="item" onClick={() => values(3)}>3</button>
      <button className="item" onClick={() => values(4)}>4</button>
      <button className="item" onClick={() => values(5)}>5</button>
      <button className="item" onClick={() => values(6)}>6</button>
      <button className="item" onClick={() => values(7)}>7</button>
      <button className="item" onClick={() => values(8)}>8</button>
      <button className="item" onClick={() => values(9)} >9</button>
    </div>
    <button onClick={limpiar} className='button'>limpiar</button>
    </>
  )
}

export default Grilla
