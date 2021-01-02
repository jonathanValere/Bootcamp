"user strict"

class Person{
	constructor(firstName,lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHi(){
		return `Hello, my name's ${this.firstName} ${this.lastName}`;
	}

}

class Student extends Person{
	constructor(firstName,lastName, especialty){
		super(firstName,lastName);
		this.especialty = especialty;
	}
	sayMyClass(){
		return `I am in ${this.especialty}'s class`;
	}
}