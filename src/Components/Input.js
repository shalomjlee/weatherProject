// import React, { useState, useContext} from 'react';
// import {UserContext} from '../UserContext'


// const Input = () => {
//     const {userLocation, setUserLocation} =
//     useContext(UserContext)
//     const [location, setLocation] = useState('');
//     console.log({userLocation})
//     return (
//         <div>
//             <h3>Hello from input</h3>
//            <form onSubmit={(event) => {
//                event.preventDefault();
//                setUserLocation({location})
//            }}>
//             <input type='text' placeholder='What location?' 
//             value={location}
//             onChange = {(event) => {
//                 setLocation(event.target.value)
//             }}
//                 />
//             <button type='submit'>Submit</button>
//            </form>
//         </div>
//     );
// };

// export default Input;