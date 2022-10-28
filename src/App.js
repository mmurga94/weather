import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav';
import {Route} from 'react-router-dom';
import About from './components/About';
import City from './components/City';

function App() {

  const [cities, setCities] = useState([]);

  const filtro = (city) => {
    let boleean = true;
    cities.forEach(e => {
      if(e.name === city.name) boleean = false;
    })
    return boleean;
  }

  const handleCities = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(r => r.json())
    .then(data => {
      data.main !== undefined && filtro(data) ? setCities([...cities, data]) : alert('Ciudad no encontrada o ya registrada')
    })
  }

  const removeCity = (city) => {
    setCities(cities.filter(e => e.name !== city.name))
  }

  const getCity = (city) => {
    city = cities.filter(e => e.id === Number(city.id));
    return city[0];
  }

  return (
    <div className="App">
      <Nav onSearch={handleCities}></Nav>
      <hr />
      <Route exact path='/' >
        <Cards
            cities={cities}
            onClose={removeCity}
          />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/city/:id'>
        <City getCity={getCity} />
      </Route>
    </div>
  );
}

export default App;
