const colors = ["#BFBDC1", "#6D6A75", "#37323E", "#DEB841"];

// setTimeout(function(){
// 	document.body.style.backgroundColor = colors[0];
// 	setTimeout(function(){
// 	document.body.style.backgroundColor = colors[1];
// 		setTimeout(function(){
// 		document.body.style.backgroundColor = colors[2];
// }, 1000);
// }, 1000);
// }, 1000);

// async function sing(){
// 	return `la la la la la`;
// }

// sing().then((data)=>{
// 	console.log('Promise resolved', data);
// });

// const movies = document.querySelector("#movies")
// console.log(movies);

// fetch('http://www.omdbapi.com/?apikey=fa8d53b9&s=world')
// 	.then(res=>res.json())
// 	.then(data=>{
// 		for(let movie of data.Search){
// 			// console.log(movie.Title);
// 		let titre = `<li>
// 		<p>${movie.Title} - <em>${movie.Year}</em></p>
// 		<img src="${movie.Poster}" alt="Affiche movie">
// 		</li>`;
// 		movies.insertAdjacentHTML("beforeend", titre);
// 	}
// 	})
// 	// .then(data=>titre.textContent = data.Search.Title)
// 	.catch(e=>{
// 		console.log('Oh no:', e);
// 	})

const url = "https://restcountries.eu/rest/v2/all";
const country = document.querySelector("#country"); 
fetch(url)
	.then(res=>res.json())
	.then(data=>{
		for(let result of data){
			const name = `<h4>${result.name}</h4>
			<ul>
				<li>
				<p>Capitale: ${result.capital? result.capital: "-"}</p>
				<p>Population: ${result.population}</p>
				</li>
			</ul>
			`;
			country.insertAdjacentHTML("beforeend", name)
		}
	})
	.catch(e=>{
		console.log(e);
	})