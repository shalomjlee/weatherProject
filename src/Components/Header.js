import React from 'react';
import Input from './Input'
const Headers = () => {
    return (
			<div>
				<div className='jumbotron text-center'>
				<h1>The Weather Finder!</h1>
				<h2>Whose weather would you like us to provide?</h2>
                </div>
				<Input />
			</div>
		);
};

export default Headers;