const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
	console.log(req);
	res.send(`<h1>Welcome to my website</h1>`);
})

app.get('/contact',(req,res)=>{
	res.send("Contact page");
})

app.get('/user/:id/:article',(req,res)=>{
	const { id, article } = req.params;
	res.send(`User: ${id}, Article: ${article}`);
})

app.get(`/search`, (req,res)=>{
	const { q } = req.query;
	if(!q){
		res.send(`Nothing to search`);
	}
	res.send(`Search: ${q}`);
})

// app.get('*',(req,res)=>{
// 	res.send("<p>This is a page</p>")
// })

app.listen(port, ()=>{
	console.log(`Example app listening at http://localhost:${port}`);
})