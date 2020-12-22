
### DESCRIPTION
This website allows you to specify city and state to direct a call to the weatherbit API, which then outputs specific information from the weatherbit API which shows the user the pertinent weather of the inputted city.
### TECHNOLOGIES USED
https://www.weatherbit.io/api
I used weatherbits API to direct calls using HTTPS. Website was created from the front end using react, javascript, html, and CSS.

### CONTRIBUTION GUIDELINES
Shoutout to weatherbit.io/api for their great API!
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
