const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const request = require('request');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req,res)=>{
	const { firstName, lastName, email } = req.body;
	res.send(`${firstName} ${lastName}`);
})

app.listen(port,()=>{
	console.log(`Server is running on ${port}`);
})