import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import './Input.css';


const Input = () => {
	
	const {
		searchString,
		setSearchString,
		getSearchData,
		selectUnit,
		setSelectUnit,
		tempUnit,
		setTempUnit,
		getTempUnit,
	} = useContext(UserContext);

	return (
		<div>
			<h3>Hello from input</h3>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					// setSelectUnit(tempUnit);
					getSearchData();
					getTempUnit();
				}}>
				<input
					type='text'
					placeholder='What location?'
					value={searchString}
					onChange={(event) => setSearchString(event.target.value)}
				/>
				<select
					type='select'
					value={selectUnit}
					onChange={(event) => {
						console.log('hello world');
						
						setSelectUnit(event.target.value);
					}}>
					
					
					<option selected value='I'>
						Fahrenheit
					</option>
					<option value='M'>Celsius</option>
					<option value='S'>Kelvin</option>
				</select>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Input;
//only send API request when button is submitted

//when select a value, fetchs API to change the units={this} portion to the option value
//i need to figure out how to get select value and set it as the getselectunit.
