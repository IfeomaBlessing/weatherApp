 const apiKey ="4d01b39e3f9c6d370e203fb8ec3a408a";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const inputBox = document.getElementById("inputBox");
 const button = document.getElementById("btn");
 const weatherIcon = document.getElementById("weather-icon")


 async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
          
    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display ="none";
    }else{
        document.querySelector(".error").style.display = "none";
    }
        let data = await response.json();

        console.log(data);
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src= "./images/clouds.png"}

        else if(data.weather[0].main === "Rain"){
        weatherIcon.src= "./images/rain.png"}

        else if(data.weather[0].main === "Snow"){
        weatherIcon.src= "./images/snow.png"}
        
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src= "./images/drizzle.png"}

        else if(data.weather[0].main === "Clear"){
        weatherIcon.src= "./images/clear.png"}

        else if(data.weather[0].main === "Mist"){
            weatherIcon.src= "./images/mist.png"
        }

    document.querySelector(".weather").style.display ="block";
 };

 button.addEventListener("click",function(){
    checkWeather(inputBox.value);
 });


