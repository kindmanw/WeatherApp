let currentLocation = document.getElementById("currentLocation");
     let temp = document.getElementById("temp");
     let weatherDesc = document.getElementById("weatherDesc");
     let countryCode = document.getElementById("countryCode");
     let searchCity = document.getElementById("searchCity");

     let lat;
     let long;
     const apiKey = "b5e6fa02638347554314e33aab8bb714"

   const currentWeather = async () => {
          try {

              navigator.geolocation.getCurrentPosition(async (positionNow) =>{
                    // console.log(positionNow.coords.lat, positionNow.coords.long)
                    lat = positionNow.coords.latitude;
                    long = positionNow.coords.longitude;
                    // console.log(lat, long)
                    const weatherNow = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
                    console.log(weatherNow)
                    currentLocation.innerHTML = `Current Location: ${weatherNow.data.name}`
                    temp.innerHTML = `Temperature: ${Math.floor(weatherNow.data.main.temp -273)}<sup>0</sup>C`
                    weatherDesc.innerHTML = `Weather Desc: ${weatherNow.data.weather[0].description}`
                    countryCode.innerHTML = `Country Code: ${weatherNow.data.sys.country}`
               })
          } catch (error) {
               console.log(error)  
               alert("Error fetching current weather condition")
          }
     }
     currentWeather();
     
     async function City(){
          try {
               let location = searchCity.value;
              const searchLocation = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
              currentLocation.innerHTML = `Current Location: ${searchLocation.data.name}`
               temp.innerHTML = `Temperature: ${Math.floor(searchLocation.data.main.temp -273)}<sup>0</sup>C`
               weatherDesc.innerHTML = `Weather Desc: ${searchLocation.data.weather[0].description}`
               countryCode.innerHTML = `Country Code: ${searchLocation.data.sys.country}`
         } catch (error) {
          console.error(error)
          alert("Error fetching current weather condition")
         } 
     }