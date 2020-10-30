import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import './Input.css';
const Input = () => {
	const {
		searchString,
		setSearchString,
		getSearchData,
		selectUnit,
		getSelectUnit,
	} = useContext(UserContext);

	return (
		<div>
			<h3>Hello from input</h3>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					getSearchData();
				}}>
				<input
					type='text'
					placeholder='What location?'
					value={searchString}
					onChange={(event) => setSearchString(event.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					selectUnit();
				}}>
				<select>
					<option selected value='I'>
						Fahrenheit
					</option>
					<option value='M'>Celsius</option>
					<option value='S'>Kelvin</option>
				</select>
			</form>
		</div>
	);
};

export default Input;
//only send API request when button is submitted

//when select a value, fetchs API to change the units={this} portion to the option value
//i need to figure out how to get select value and set it as the getselectunit.
