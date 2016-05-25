var Animal = {
	constructor: function(age, name, sound, region) {
		this.age = age;
		this.name = name;
		this.sound = sound;
		this.region = region;
		return this;
	},
	say: function() {
		console.log("Hello, I am " + this.name);
	}
};

var Dog = Object.create(Animal).constructor(2, "Bob", "Bow", "Ukraine");
Dog.goAway = function() {
	console.log("Go away!");
}

var Cat = Object.create(Animal).constructor(5, "Garry", "Meow", "England");
Cat.goAway = function() {
	console.log("Go away!");
}

var Woodpecker = Object.create(Animal).constructor(1, "Woody", "Knock", "USA");
Woodpecker.goAway = function() {
	console.log("Go away!");
}

Dog.say();
Cat.say();
Woodpecker.say();

// check
console.log("My name is " + Dog.name + ", I am " + Dog.age + " y.o., usually I say " + Dog.sound + " and I am from " + Dog.region);

function getType(obj){
	(obj.goAway ) ? console.log(obj) : console.log ("Animal");
}

function getType2(){
	(this.goAway) ? console.log(this) : console.log ("Animal");
}

getType(Dog);
getType2.call(Dog);
getType2.apply(Dog);
getType2.bind(Dog)();