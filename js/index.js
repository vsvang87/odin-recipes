//dog constructor
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
//assigning each Dog variables
let barnaby = new Dog("Barnaby", "German Shepard", 52);
let spot = new Dog("Spot", "Mixed", 40);
let buddy = new Dog("Buddy", "Poodle", 23);
//setting prototype for Dog
Dog.prototype.species = "canine";
Dog.prototype.sitting = false;
//setting prototype methods
Dog.prototype.wag = function () {
  console.log(this.name + " is wagging it's tail.");
};
Dog.prototype.bark = function () {
  console.log(this.name + " is barking.");
};
Dog.prototype.run = function () {
  console.log(this.name + " is running.");
};
Dog.prototype.sit = function () {
  //if else statement
  if (this.sitting) {
    console.log(this.name + " is already sitting.");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting.");
  }
};
//calling each Dog the sit method
buddy.hasOwnProperty("species");
buddy.sit();
spot.hasOwnProperty("sitting");
spot.sitting = true;
buddy.wag();

//adding Showdog constructor
function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}
//adding showdog prototype
ShowDog.prototype = new Dog();
//showdog prototype constructor
ShowDog.prototype.constructor = ShowDog;
ShowDog.prototype.league = "Super League";
ShowDog.prototype.stack = function () {
  console.log("Stack");
};
ShowDog.prototype.bait = function () {
  console.log(this.handler + " is using Bait");
};
ShowDog.prototype.gait = function () {
  console.log(kind + "ing");
};
ShowDog.prototype.groom = function () {
  console.log(this.handler + " is Grooming his dog.");
};
//assigning variables to the dog
let scooby = new ShowDog("Scooby", "Husky", 42, "Beef");
let stark = new ShowDog("Stark", "Rockweiler", 30, "cookies");
let beatrice = new ShowDog("Beatrice", "Pomerian", 12, "Hamilton");

scooby.stack();
scooby.bait();
console.log(scooby.league);
console.log(scooby.species);
stark.bark();
beatrice.groom();

//testing Dog
let fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
  console.log("Fido is a dog");
}
if (fido instanceof ShowDog) {
  console.log("Fido is a showdog");
}
let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookies");
if (scotty instanceof Dog) {
  console.log("Scotty is a dog");
}
if (scotty instanceof ShowDog) {
  console.log("Scotty is a showdog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);

//adding new object constructor
function CompetitionDog(name, breed, weight, talent) {
  Dog.call(this, name, breed, weight);
  this.talent = talent;
}
//calling the Dog Contructor to CompetitionDog
CompetitionDog.prototype = new Dog();
CompetitionDog.prototype.constructor = CompetitionDog;

//adding prototype to competitionDog
CompetitionDog.prototype.jump = function () {
  console.log(this.name + " is jumping over the hoops.");
};
CompetitionDog.prototype.swim = function () {
  if (this.talent === "swim") {
    console.log(this.name + " is swimming across the pool.");
  } else {
    console.log(this.name + " is riding on a boat across the pool.");
  }
};
CompetitionDog.prototype.juggle = function () {
  if (this.weight >= 30) {
    console.log(this.name + " is juggling the ball.");
  } else {
    console.log(this.name + " is rolling the ball.");
  }
};
//assigning a dog variables
let sparky = new CompetitionDog("Sparky", "Golden Retriever", 25, "juggle");
sparky.juggle();
sparky.swim();
//assigning another dog variables
let blue = new CompetitionDog("Blue", "Mixed", 12, "swim");
blue.swim();
blue.juggle();
