
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//api.openweathermap.org/data/2.5/weather?q=rabat&appid=bab77ee8a0252977cc8d8947e552f824
const weather={
	apiKey:'bab77ee8a0252977cc8d8947e552f824',
	fetchWeather:(city)=>{
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apiKey}`)
		.then(resp=>resp.json())
		.then(data=>weather.dispalyWeather(data))
		.catch(err=>console.log(err))
	},
	dispalyWeather:(data)=>{
		//find all element in page and replace their content.
		const {name} = data;
		const {icon,description}=data.weather[0];
		const {temp,humidity}=data.main;
		const {speed}= data.wind;
		//console.log(name,icon,description,temp,humidity,speed)
		//change html
		window.document.querySelector('.city').innerText=`Weather in ${name}`;

		window.document.querySelector('.temp').innerText=`It's ${temp}°C`;

	window.document.querySelector('.description').innerText=`${description}`;

		document.querySelector(".icon").src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
		

		window.document.querySelector('.humidity').innerText=`humidity: ${humidity}%`;

		window.document.querySelector('.wind').innerText=`Wind speed: ${speed}km/h`;
	}
}


weather.fetchWeather("Rabat")
function search(){
	let cityName=document.querySelector('.search-bar').value
	weather.fetchWeather(cityName)
}

document.querySelector('.search-bar').onkeyup=function(event){
	if(event.key==='Enter'){
		search()
	}
}