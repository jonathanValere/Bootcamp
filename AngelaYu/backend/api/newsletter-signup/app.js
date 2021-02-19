const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const request = require('request');

app.get("/",(req,res)=>{
	res.send('hello');
})

app.listen(port,()=>{
	console.log(`Server is running on ${port}`);
})