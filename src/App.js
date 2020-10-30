import React, { useState } from 'react';
// import './App.css';
import WeatherInfo from './Components/WeatherInfo';
import Header from './Components/Header';
import { UserContext } from './UserContext';

function App() {
	const [weatherLocation, setWeatherLocation] = useState('');
	const [searchString, setSearchString] = useState('');
	const [selectUnit, setSelectUnit] = useState('I')
	const getSearchData = () => {
		const url = `https://api.weatherbit.io/v2.0/current?city=${searchString}&units=${selectUnit}&key=
		${process.env.REACT_APP_STOCK_API_KEY}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				return res;
			})
			.then((resJson) => setWeatherLocation(resJson))
			.catch(() => console.log('There was an error'));
	};
		
	}
	return (
		<div className='App'>
			<h1>Find the weather</h1>
			<UserContext.Provider
				value={{
					weatherLocation,
					setWeatherLocation,
					searchString,
					setSearchString,
					getSearchData,
					selectUnit, setSelectUnit,
				}}>
				<Header />
				<WeatherInfo />
			</UserContext.Provider>
		</div>
	);
}

export default App;
