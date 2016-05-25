var Animal = function(age, name, sound, region) {
	this.age = age;
	this.name = name;
	this.sound = sound;
	this.region = region;
}

Animal.prototype.say = function() {
	console.log("Hello, I am " + this.name);
}

var Dog = new Animal(2, "Bob", "Bow", "Ukraine");
Dog.goAway = function() {
	console.log("Go away!");
}

var Cat = new Animal(5, "Garry", "Meow", "England");
Cat.goAway = function() {
	console.log("Go away!");
}

var Woodpecker = new Animal(1, "Woody", "Knock", "USA");
Woodpecker.goAway = function() {
	console.log("Go away!");
}

// check
console.log("My name is " + Dog.name + ", I am " + Dog.age + " y.o., usually I say " + Dog.sound + " and I am from " + Dog.region);

Dog.say();
Cat.say();
Woodpecker.say();


function getType(obj){
	(obj.goAway) ? console.log(obj) : console.log ("Animal");
}

function getType2(){
	(this.goAway) ? console.log(this) : console.log ("Animal");
}

getType(Dog);
getType2.call(Dog);
getType2.apply(Dog);
getType2.bind(Dog)();