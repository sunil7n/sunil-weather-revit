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


