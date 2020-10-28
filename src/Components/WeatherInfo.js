import React from 'react';
import { UserContext } from '../UserContext'


const WeatherInfo = ({userLocation, setUserLocation}) => {

    return (
        <div>
            <UserContext.Consumer>
                 {({ userLocation }) => {
                 if(userLocation.location ==='') {
                     return(<h2>Hello, pick a location</h2>)
                 } else {
                     return(
                     <div>
                       
                       <h2> Here's some information from {userLocation.location} </h2>
                       <p>
                           
                          </p>
                   </div>
                   )
               }}
            }
            </UserContext.Consumer>
        </div>
    );
};

export default WeatherInfo;