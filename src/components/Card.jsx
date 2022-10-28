import React from 'react';
import style from './Card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card({onClose, name, min, max, img, id}) {
  // acá va tu código
  return (
      <div className={style.divPrincipal}>
        <button className={style.button} onClick={onClose}>X</button>
        <h1 className={style.title}>{name}</h1>
        <section className={style.sectionSubCard}>
          <div className={style.sectionCardData}>
            <h5>Min:</h5>
            <p>{min}</p>
          </div>
          <div className={style.sectionCardData}>
            <h5>Max:</h5>
            <p> {max}</p>
          </div>
          <img className={style.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </section>
        <NavLink className={style.link} to={`/city/${id}`}> Más Detalle </NavLink>
      </div>
  )
};