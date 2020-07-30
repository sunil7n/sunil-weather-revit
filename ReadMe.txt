Sunil's simple weather app for technical challenge - RevIT
--------------------------------------------------------------

This is simple weather app to display weather forecast with more than 20 degrees, sunny days in the next 5 days from current date.

I never used Github and Javascript before, thanks to this website, whcih provided the basics

https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d

Step 1: OpenWeatherMap

Just use the API key in the code in Step 4 or create one as mentioned below.

For this we’ll be using the Free ‘Current Weather’ API. Head on over to this link https://openweathermap.org/ and sign up for an account. All you need is an email address and password.
Once signed in, select the API keys tab. From Here you can Create a Key on the right hand side of the page. Enter a name (anything works) and select generate. Your API Key will appear on the left. Copy this key for later.


Step 2: Setting up the project

Create an empty directory named sunil-weather and run the following command at the command line:
--------------
npm init
-------------

Fill out the required information to initialize our project.

Create a file named index.js in the sunil-weather folder — this file will house the code for our application or copy the file from Github

Step 3: 

From the directory named sunil-weather, run the following command at the command line:
-----------------------------
npm install request --save
-----------------------------

Step 4:

Copy this code into index.js file or copy the file from Github

*************************************************************************************************************************
let request = require('request');
let weatherPars = '';
let apiKey = '192aa93172694cb6166b08263c162681';
let city = 'sydney';
let aboveTwentyTemp = '';
let aboveTwentyDate = '';
let sunnyDate = '';

let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weatherPars = JSON.parse(body);
    
  
   for (let i = 0; i < weatherPars.cnt; i++) {
     
         if (weatherPars.list[i].main.temp_max > 20){
               aboveTwentyTemp = weatherPars.list[i].main.temp_max;
               aboveTwentyDate = weatherPars.list[i].dt_txt;
               console.log("Temperature above 20 degress in the next 5 days in Sydney will be", aboveTwentyTemp, "degrees on", aboveTwentyDate);
         } 
    }

    for (let i = 0; i < weatherPars.cnt; i++) {
     
         if (weatherPars.list[i].weather[0].main == 'Clear'){
      		sunnyDate = weatherPars.list[i].dt_txt;
      		console.log("Sunny weather in Sydney for the next 5 days will be on", sunnyDate);
         } 
    }
    
    
    }   
  


});


*************************************************************************************************************************


Step 5 : From the directory named sunil-weather, run the following command at the command line:

-----------------------------
node index.js
-----------------------------

Results will be displayed in the console, change the city in the code, save the file and run Step 5 to get results for other cities.


