// import React, { useContext } from 'react';
// import { UserContext } from '../UserContext';

// const WeatherInfo = () => {
// 	const { weatherLocation } = useContext(UserContext);
//     if (
//         weatherLocation.error) {
//             return <h1>Hey! Can't find it</h1>;
//         } else if (!weatherLocation.current) {
//             return <h1>Whose weather would you like to view?</h1>;
// 	} else {
// 		return (
// 			<div>
// 				<h1>Welcome to {weatherLocation.location.name}</h1>
// 				<h2>Here's the weather information from {weatherLocation.location.name}</h2>
// 				<h3>
// 					At {weatherLocation.current.observation_time} the temperature
// 					is {weatherLocation.current.temperature}
// 					{weatherLocation.request.unit}, and feels like {weatherLocation.current.feelslike}{weatherLocation.request.unit}
// 				</h3>
//                 <h3>The current humidity is {weatherLocation.current.humidity}%</h3>
// 				<h3>
// 					There is currently {weatherLocation.current.weather_descriptions} weather
// 					<img
// 						src={weatherLocation.current.weather_icons}
// 						alt='current weather'
// 					/>
// 				</h3>
// 			</div>
// 		);
// 	}
// };

// export default WeatherInfo;

import React from 'react';

const WeatherInfo = () => {
    return (
        <div>
            
        </div>
    );
};

export default WeatherInfo;
