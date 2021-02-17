const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
	res.send(`Welcome to my homepage`);
});

app.get("/calculatebmi",(req,res)=>{
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/calculatebmi", (req,res)=>{
	let height = parseFloat(req.body.height);
	let weight = parseFloat(req.body.weight);
	let bmi = weight / (height*height);
	res.send(`My BMI is: ${bmi}`);
});

app.listen(port, ()=>{
	console.log(`Server started on port ${port}`);
})