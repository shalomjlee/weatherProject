import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';

const WeatherInfo = () => {
	const { weatherLocation, tempUnit } = useContext(
		UserContext
	);

	// useEffect(() => {
	// 	setNewSearch(false);

	// }, []);

	// const getTempUnit = () => {
	// 	let displayUnit = '';
	// 	switch (selectUnit) {
	// 		case 'M':
	// 			displayUnit = 'C';
	// 			break;
	// 		case 'S':
	// 			displayUnit = 'K';
	// 			break;
	// 		default:
	// 			displayUnit = 'F';
	// 	}

	// 	return displayUnit;
	// };

	if (weatherLocation.error) {
		return <h1>Can't find the location you were looking for :(</h1>;
	} else if (!weatherLocation.data) {
		return <h1>Whose weather would you like to view?</h1>;
	} else {
		return (
			<div>
				<h1>Whose weather would you like to view?</h1>
				<h2>Ah... {weatherLocation.data[0].city_name}'s weather.</h2>
				<h2>
					At {weatherLocation.data[0].ob_time} it is {weatherLocation.data[0].temp}{tempUnit} but feels like {weatherLocation.data[0].app_temp}{tempUnit} in {weatherLocation.data[0].city_name}
				</h2>
				<h2>Current skies: {weatherLocation.data[0].weather.description}</h2>
				<h2>Relative humidity is at {weatherLocation.data[0].rh}% </h2>
			</div>
		);
	}
};

export default WeatherInfo;
