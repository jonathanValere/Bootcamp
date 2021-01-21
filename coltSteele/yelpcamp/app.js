const express = require('express');
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Campground = require("./models/campground")

const port = 3000;
const path = require('path');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  console.log('Database connected!')
});

const app = express();

//paramètre pour ejs et views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//paramètre pour la méthode post et l'url
app.use(express.urlencoded({extended: true}));
//paramètre méthode dans formulaire
app.use(methodOverride("_method"));

//page accueil
app.get('/',(req,res)=>{
	res.render("home");
});

//liste de tous les campings
app.get('/campgrounds',async (req,res)=>{
	const campgrounds = await Campground.find({});
	res.render("campgrounds/index", { campgrounds });
});

//Affiche formulaire pour créer un camping
app.get('/campgrounds/new',(req,res)=>{
	res.render('campgrounds/new');
});

//Post le nouveau camping
app.post('/campgrounds',async (req,res) => {
	const campground = new Campground(req.body.campground);
	await campground.save();
	res.redirect(`/campgrounds/${campground._id}`);
});

//Affiche un camping en particulier
app.get('/campgrounds/:id',async (req,res)=>{
	const campground = await Campground.findById(req.params.id);
	res.render('campgrounds/show', { campground });
});

//Edit un camping
app.get('/campgrounds/:id/edit', async (req,res)=>{
	const campground = await Campground.findById(req.params.id);
	res.render('campgrounds/edit', { campground });
})

app.put("/campgrounds/:id", async(req,res)=>{
	const {id} = req.params;
	const campground = await Campground.findByIdAndUpdate(id,{...req.body.campground});
	res.redirect(`/campgrounds/${campground._id}`);
})

//supprimer le camping
app.delete("/campgrounds/:id", async  (req,res)=>{
	const { id } = req.params;
	const campground = await Campground.findByIdAndDelete(id);
	res.redirect("/campgrounds");
})


app.listen(port, ()=>{
	console.log(`Serving on port ${port}`);
})