import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const WeatherInfo = () => {
	const { weatherLocation, tempUnit } = useContext(UserContext);

	if (weatherLocation.error) {
		return <h1>Can't find the location you were looking for :(</h1>;
	} else if (!weatherLocation.data) {
		return <h1>Whose weather would you like to view?</h1>;
	} else {
		return (
			<div>
				<h1>Whose weather would you like to view?</h1>
				<h2>Ah... {weatherLocation.data[0].city_name}'s weather.</h2>
				<h3>
					At {weatherLocation.data[0].ob_time} it is{' '}
					{weatherLocation.data[0].temp}
					{tempUnit}
				</h3>

				<h3>
					Feels like {weatherLocation.data[0].app_temp}
					{tempUnit} in {weatherLocation.data[0].city_name}
				</h3>
				<h3>Current skies: {weatherLocation.data[0].weather.description}</h3>
				<h3>Relative humidity is at {weatherLocation.data[0].rh}% </h3>
			</div>
		);
	}
};

export default WeatherInfo;
