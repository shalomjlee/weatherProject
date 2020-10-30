import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext'
import './Input.css'
const Input = () => {
    const { searchString, setSearchString, getSearchData} =useContext(UserContext)
    // const [location, setLocation] = useState('');
    // console.log({location})
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
				<select>
					<option value='F'>Fahrenheit</option>
					<option value='C'>Celsius</option>
					<option selected value='K'>
						Kelvin
					</option>
				</select>
			</div>
		);
};

export default Input;
//only send API request when button is submitted