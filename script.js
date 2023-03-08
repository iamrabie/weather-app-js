// alert("testing")
// alert("testing")
 fetch('http://api.weatherapi.com/v1/forecast.json?key=34e20e10a3224f1d83c62231222305&q=London&days=6&aqi=no&alerts=no').then((data => { 
     console.log(data);
     return data.json();
})).then((completedata) => {

document.getElementById("partly").innerHTML = completedata.forecast.forecastday[0].day.condition.text;
document.getElementById("name").innerHTML = completedata.location.name;
document.getElementById("cT").innerHTML =  completedata.current.temp_c;
 


 var weather = [];


 for (var i = 0 ; i < completedata.forecast.forecastday.length ; i++)
 {

  //console.log(i);
    weather[i] = 
    {
      date :  completedata.forecast.forecastday[i].date,
      condition : completedata.forecast.forecastday[i].day.condition.text,
      max_temp : completedata.forecast.forecastday[i].day.maxtemp_c,
      min_temp : completedata.forecast.forecastday[i].day.mintemp_c

    }

  
 }
 //console.log(weather);



 var forecast = [ 'w1' , 'w2' , 'w3'];
 var tempMax = [ 'max1' , 'max2' , 'max3'];
 var tempMin = [ 'min1' , 'min2' , 'min3'];
 var days = [ 'a' , 'b' , 'c' , 'd' , 'e' , 'f' ];

 for ( j = 0; j < weather.length; j++)
 {
   // console.log(j);
    document.getElementById(tempMax[j]).innerHTML = weather[j].max_temp;
    document.getElementById(tempMin[j]).innerHTML = weather[j].min_temp;
    document.getElementById(forecast[j]).innerHTML = weather[j].condition;
    var dayy = new Date(weather[j].date);
    document.getElementById(days[j]).innerHTML = `${dayy.toLocaleString('en-GB', {weekday:'long'})}`;
    

 }

 console.log(completedata);
 

  
})


/* var array = ["Thursday", "Friday", "Saturday", "Monday", "Tuesday", "Wednesday"];
var id = ["a" , "b" , "c" , "d" , "e" , "f"];

 var dayy = new Date(weather[j].date);
    document.getElementById(days[j]).innerHTML = `${dayy.toLocaleString('en-GB', {weekday:'long'})}`;

for (var i=0; i < array.length; i++)
{
    //console.log("i", i);
    var result = document.getElementById(id[i]);
    //console.log(result);
    //console.log("result id", result.id);
    //console.log("id[i]" , id[i]);

    if (result.id == id[i])
    {
        //console.log("yoooo");
        result.innerHTML = array[i];
    }
} 
 */
/* var weather = [
    {
      'date': '01-06-22',
      'day' : 'Wednesday',
      'condition' : 'Cloudy',
      'maxTemp' : 23,
      'minTemp' : 22
    },

    {
        'date': '02-06-22',
        'day' : 'Thursday',
        'condition' : 'Sunny',
        'maxTemp' : 37,
        'minTemp' : 33
      },

      {
        'date': '03-06-22',
        'day' : 'Friday',
        'condition' : 'Partly Cloudy',
        'maxTemp' : 23,
        'minTemp' : 17
      },

      {
        'date': '04-06-22',
        'day' : 'Saturday',
        'condition' : 'Raining',
        'maxTemp' : 25,
        'minTemp' : 19
      },

      {
        'date': '05-06-22',
        'day' : 'Monday',
        'condition' : 'Raining',
        'maxTemp' : 26,
        'minTemp' : 21
      },

      {
        'date': '06-06-22',
        'day' : 'Tuesday',
        'condition' : 'Raining',
        'maxTemp' : 24,
        'minTemp' : 17
      }
]
  
  console.log(weather);
  document.getElementById("partly").innerHTML = weather[2].condition;
  var days = [ 'a' , 'b' , 'c' , 'd' , 'e' , 'f' ];
  var forecast = [ 'w1' , 'w2' , 'w3' , 'w4' , 'w5' , 'w6'];
  var tempMax = [ 'max1' , 'max2' , 'max3' , 'max4' , 'max5' , 'max6' ];
  var tempMin = [ 'min1' , 'min2' , 'min3' , 'min4' , 'min5' , 'min6' ];


  console.log("array1 length" , weather.length);
  ///console.log( document.getElementById(tempMax[1]));
   for (var i = 0; i < weather.length; i++)
  {
    document.getElementById(tempMax[i]).innerHTML = weather[i].maxTemp;
    document.getElementById(tempMin[i]).innerHTML = weather[i].minTemp;
    document.getElementById(forecast[i]).innerHTML = weather[i].condition;
    //document.getElementById(days[i]).innerHTML = weather[i].day;
     weather.forEach(function(dateString) {
      const date = new Date(dateString);
      console.log(`${date.toLocaleString('en-GB', {weekday:'long'})}`)
    })
   
   var result = weather[i].date;
    console.log(result)
    var date = new Date(result);
    console.log(date)
    var day = date.getDay();
    console.log(day); 

  } 

 */




