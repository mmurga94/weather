import React from 'react';
import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleButton = () => {
    onSearch(input)
    setInput('')
  }

  return (
    <div className={style.div}>
        <input className={style.input} type="text" name="" placeholder='Ingresa una ciudad' value={input} onChange={handleInput}/>
        <button className={style.button} onClick={handleButton}>Agregar</button>
    </div>
  )
};