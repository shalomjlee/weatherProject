import React, { useState, useEffect } from 'react';
import './App.css';
import ChosenLocation from './Components/ChosenLocation';
import WeatherInfo from './Components/WeatherInfo';
import Header from './Components/Header';
import { UserContext } from './UserContext';

function App() {
	const [userLocation, setUserLocation] = useState("");


  useEffect(() => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_STOCK_API_KEY}&query=${userLocation.location}&units=f`;

	fetch(url)
		.then((res) => res.json())
		.then(console.log)
		.catch(console.error);
  
  }, []);

	return (
		<div className='App'>
			<h1>Find the weather</h1>
			<UserContext.Provider value={{ userLocation, setUserLocation }}>
				<Header />
				<ChosenLocation />
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
