import React from "react";
import { useParams } from 'react-router-dom';
import style from './City.module.css';
import { Redirect } from 'react-router-dom';

export default function City( {getCity} ) {
    let params = useParams();
    let city = getCity(params);

    if(city){
        return(
            <div className={style.container} >
                <h1>{city.name}</h1>
                <div>
                    <div>Temperatura: {city.main.temp} ºC</div>
                    <div>Clima: {city.weather[0].description}</div>
                    <div>Viento: {city.wind.speed} km/h</div>
                    <div>Cantidad de nubes: {city.clouds.all}</div>
                    <div>Latitud: {city.coord.lat}º</div>
                    <div>Longitud: {city.coord.long}º</div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <img  src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" />
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <Redirect to='/' />
            </div>
        )
    }
}