import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext'

const Input = () => {
    const { searchString, setSearchString, getSearchData} =useContext(UserContext)
    // const [location, setLocation] = useState('');
    // console.log({location})
    return (
        <div>
            <h3>Hello from input</h3>
           <form onSubmit={(event) => {
               event.preventDefault();
               getSearchData()
           }}>
            <input type='text' placeholder='What location?' 
            value={searchString}
            onChange = {
                (event) => 
                    setSearchString(event.target.value)

                

            }
                />
            <button type='submit' >Submit</button>
           </form>
        </div>
    );
};

export default Input;
//only send API request when button is submitted