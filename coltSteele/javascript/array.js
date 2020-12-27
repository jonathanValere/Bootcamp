const arr = [2,6,9,76,14];
const str = ["jonathan","   daevon "," wilou ","  nala"," ori   "];
// arr.forEach((el)=>{
// 	if(el % 2 == 0){
// 	console.log(el);
// 	};
// });
const nums = [4,9,6,2];
console.log(Math.max(...nums));
//Arrow functions
const greet=(str)=>{
    return `Hey ${str}!`;
}

//SETTIMEOUT AND SETINTERVAL------------
// console.log('Hello!!')
// setTimeout(()=>{
// 	console.log("...Are you still here?");
// }, 3000)
// console.log('Goodbye!');

// const id = setInterval(()=>{
// 	console.log(Math.random())
// }, 1000);


//EVERY AND SOME METHODS
//ils renvoient true or false

// function allEvens(arr){
//     if(arr.every(num=>num % 2 === 0)){
//     	return true;
//     }else{
//     	return false;
//     }
// }