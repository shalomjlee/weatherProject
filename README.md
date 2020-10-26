# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### DESCRIPTION

### TECHNOLOGIES USED

### GETTING STARTED/INSTALLATION INSTRUCTIONS

### CONTRIBUTION GUIDELINES

### PRE-PROJECT DELIVERABLES
    ## DESCRIPTION OF PROJECT
    I want to create a website where users can go to see the weather of the place that they searched for. When they search, they should get a dropdown of the information of the current place - such as the current temperature (in fahrenheit), how it currently feels, the current humidity, and the current weather, such as if it is sunny or rainy.
    ## WIREFRAMES

![IMG_6371](https://media.git.generalassemb.ly/user/31202/files/c2139400-1769-11eb-9036-fdf8a377e155)

    ## USER STORIES REPRESENTING PROJECT MVP
    #MVP
    As a user, I want to set the location of the weather I am viewing
    As a user, I want to see the current temperature, the current humidity, and how it currently 'feels-like'
    As a user, I want to see the current weather description (sunny, cloudy, rainy, etc.)
    As a user, I only want the data for the current location I am viewing.
    As a user, I want to see what time they checked the temperature at, in their timezone
    #BRONZE
    As a user, I want to see a picture of how the weather currently is.
    As a user, I want to see the exact longitudeand latitude the weather is at.
    #SILVER
    As a user, I want to be able to check the weather in metric, scientific and fahrenheit, not just fahrenheit
    


    ## LINK TO API PLANNING TO USE, EXAMPLE OF DATA RESPONSE 
    https://weatherstack.com/documentation

    http://api.weatherstack.com/current?access_key=ACCESS-KEY-HERE
    &query=Austin&units=f'

    ##VISUAL OF COMPONENT HIERARCHY


![IMG_6372_2](https://media.git.generalassemb.ly/user/31202/files/fdae5e00-1769-11eb-87c2-f5b343712677)


    # REQUIRED SHOWING OF RECEPTION OF DATA 
 
{request: {…}, location: {…}, current: {…}}
current:
cloudcover: 0
feelslike: 61
humidity: 66
is_day: "yes"
observation_time: "01:29 AM"
precip: 0
pressure: 1020
temperature: 61
uv_index: 5
visibility: 6
weather_code: 116
weather_descriptions: Array(1)
0: "Partly cloudy"
length: 1
__proto__: Array(0)
weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"]
wind_degree: 60
wind_dir: "ENE"
wind_speed: 1
__proto__: Object
location:
country: "South Korea"
lat: "37.566"
localtime: "2020-10-26 10:29"
localtime_epoch: 1603708140
lon: "127.000"
name: "Seoul"
region: ""
timezone_id: "Asia/Seoul"
utc_offset: "9.0"
__proto__: Object
request:
language: "en"
query: "seoul"
type: "City"
unit: "f"
__proto__: Object
__proto__: Object# weatherProject
