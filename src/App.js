import React, { useState } from 'react';
// import './App.css';
import WeatherInfo from './Components/WeatherInfo';
import Header from './Components/Header';
import { UserContext } from './UserContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import Documentation from './Components/Documentation';

function App() {
	const [weatherLocation, setWeatherLocation] = useState('');
	const [searchString, setSearchString] = useState('');
	const [selectUnit, setSelectUnit] = useState('I');
	const [tempUnit, setTempUnit] =useState('');

	const getTempUnit = () => {
		let displayUnit = '';
		switch (selectUnit) {
			case 'M':
				displayUnit = 'C';
				break;
			case 'S':
				displayUnit = 'K';
				break;
			default:
				displayUnit = 'F';
		}

		return setTempUnit(displayUnit);
	};
	const getSearchData = () => {
		const url = `https://api.weatherbit.io/v2.0/current?city=${searchString}&units=${selectUnit}&key=
		${process.env.REACT_APP_STOCK_API_KEY}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// setNewSearch(true);
				console.log(res);
				return res;
			})
			.then((resJson) => setWeatherLocation(resJson))
			.catch(() => console.log('There was an error'));
	};

	return (
		<div className='App'>
			<h1>The Weather Finder!</h1>
			<UserContext.Provider
				value={{
					weatherLocation,
					setWeatherLocation,
					searchString,
					setSearchString,
					getSearchData,
					selectUnit,
					setSelectUnit,
				
					tempUnit,
					setTempUnit,
					getTempUnit,
				}}>
				<Header />
				<WeatherInfo />
			</UserContext.Provider>
		</div>
	);
}

export default App;
