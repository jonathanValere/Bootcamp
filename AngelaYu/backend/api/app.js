const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const https = require('https');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
		res.sendFile(__dirname + "/index.html");
	});

app.post('/',(req,res)=>{
	const query = req.body.city;
	const apiKey = "f867ee0081ba8647a08c0753a0f0790f";
	const units = "metric";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${apiKey}`;
		
	https.get(url, (response)=>{
		response.on("data", (data)=>{
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const weatherDescription =  weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
			const city = weatherData.name;
			res.write(`<a href="/">Back to home</a>`);
			res.write(`<h1>${temp}°C at ${city}</h1>`);
			res.write(`<p>The weather is currently ${weatherDescription}</p>`);
			res.write(`<img src="${imageURL}" alt="weather">`);
			res.send();
		});
	});
})




app.listen(port,()=>{
	console.log(`Server is running on ${port}`);
})