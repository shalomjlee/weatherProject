import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import './Input.css';
import 'react-dropdown/style.css';

const Input = () => {
	const {
		searchString,
		setSearchString,
		getSearchData,
		selectUnit,
		setSelectUnit,
		getTempUnit,
	} = useContext(UserContext);

	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					getSearchData();
					getTempUnit();
				}}>
				<input
					type='text'
					placeholder='What is your location?'
					value={searchString}
					onChange={(event) => setSearchString(event.target.value)}
				/>

				<select
					type='select'
					value={selectUnit}
					onChange={(event) => {
						setSelectUnit(event.target.value);
					}}>
					<option selected value='I' className='btn btn-primary'>
						Fahrenheit
					</option>
					<option value='M'>Celsius</option>
					<option value='S'>Kelvin</option>
				</select>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Input;
