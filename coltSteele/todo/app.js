let user = prompt("What would you like to do?");
const todo = ['cuir le poulet', 'toilette du chien'];


while(user !== "quit" && user !== "q"){
	if (user === "new"){
		const task = prompt("What task would you to add?");
		todo.push(task);
		console.log(`${task} added on todo list.`);
	} else if (user === "list") {
		console.log('My todo list -------');
		for(let i = 0; i < todo.length; i++){
			console.log(`#${i+1} - ${todo[i]}`);
		}
		console.log('----------');
	} else if (user === "delete"){
		const task = parseInt(prompt("What task would you to remove?"));
		if(!Number.isNaN(task)){
			const deleted = todo.splice(task-1,1);
			console.log(`${deleted} deleted!`);
		}else{
			console.log("this not a number or the element doesn't exist!");
		}
	} else {
		console.log('You have to choose!');	
	}
	user = prompt("What would you like to do?");
}

console.log("Good bye!");