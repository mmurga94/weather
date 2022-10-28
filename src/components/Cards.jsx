import React from 'react';
import Card from './Card';
import style from './Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={style.cards}>
          {
          cities.map && cities.map(e => <Card 
                            name={e.name} 
                            max={e.main.temp_max} 
                            min={e.main.temp_min} 
                            img={e.weather[0].icon} 
                            onClose={() => onClose(e)}  
                            key={cities.indexOf(e)}
                            id={e.id}
                            /> )
          }
    </div>
  )
};