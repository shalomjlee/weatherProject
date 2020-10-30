import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const WeatherInfo = () => {
	const { weatherLocation } = useContext(UserContext);
	if (weatherLocation.error) {
		return <h1>Hey! Can't find it</h1>;
	} else if (!weatherLocation.data) {
		return <h1>Whose weather would you like to view?</h1>;
	} else {
		console.log(weatherLocation.data[0])
		return (
			<div>
				<h1>Welcome to {weatherLocation.data[0].city_name}</h1>
				<h2>At {weatherLocation.data[0].datetime} it is {weatherLocation.data[0].temp}F in {weatherLocation.data[0].city_name}</h2>
				<h2>Current skies:{weatherLocation.data[0].weather.description}</h2>
				<h2>Relative humidity is at {weatherLocation.data[0].rh}% </h2>
			</div>
		);
	}
};

export default WeatherInfo;
