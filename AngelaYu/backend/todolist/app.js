const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//templating
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extented:true}));

let items = [];

app.get('/list',(req,res)=>{
	res.render("list", { listItems: items });
});

app.post('/list',(req,res)=>{
	let item = req.body.newItem;
	items.push(item);
	res.redirect("list");
})



app.listen(port,()=>{
	console.log(`Server is running on ${port}`);
})