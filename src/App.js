import React, { useState } from 'react'
import './App.css';
import WeatherInfo from './Components/WeatherInfo'
import Header from './Components/Header'
import { UserContext } from './UserContext'

function App() {
  const [weatherLocation, setWeatherLocation]= useState('')
  const [searchString, setSearchString]=useState('')
 
  const getSearchData = () => {

    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_STOCK_API_KEY}&query=${searchString}&units=f`;
  
  
      fetch(url)
        .then((res) => res.json())
        .then((resJson) => setWeatherLocation(resJson))
        .then(res => console.log(res))
  
        .catch(console.error);
  }
  return (
    <div className="App">
      <h1>Find the weather</h1>
<UserContext.Provider value={{weatherLocation, setWeatherLocation, searchString, setSearchString, getSearchData}}>
     <Header/>
    <WeatherInfo />
</UserContext.Provider>
    </div>
  );
}

export default App;

//PSEUDO CODE
//So I will need grab the weather URL, and depending on which location I put in, the fetch should query from that location. 
//I will need to use fetch, and useState


//Once queried, the location's weather data should show up in a readable fashion.

//type in input ba