async function fetchWeatherData(cityName)
{
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1906379d73b08b65d0f488584dc8ce57`;
	const response=await fetch(url);
	const data = await response.json();
	console.log(data)
}



function fetchCity()
{
	let cityName = document.getElementById("cityname");
		if(cityName.value==="")
		{
			alert("Enter a city name");
		}
		else{
			// console.log(cityName);
			fetchWeatherData(cityName.value);
			cityName.value="";

		}
}	