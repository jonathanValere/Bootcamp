const express = require('express');
const app = express();
const port = 3000;

let names = ['John', 'Daevon', 'Wilou'];
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get("/", (req,res)=>{
	// let names = ['John', 'Daevon', 'Wilou'];
	res.render('home', { names });
	// res.render('home', { allNames: name }); We can write this
})

app.get("/random", (req,res)=>{
	const num = Math.floor(Math.random()*10);
	res.render('random', { rand:num })
})

app.get('/page/:data',(req,res)=>{
	const {data} = req.params;
	res.render('data', { data });
})

app.get('/contact', (req,res)=>{
	res.render('contact', { names });
})

app.listen(port,()=>{
	console.log('Listening port');
})