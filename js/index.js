/*
function CarPrototype(make, year, color, model) {
  this.make = make;
  this.year = year;
  this.color = color;
  this.model = model;
  this.started = true;
  this.start = function () {
    this.started = false;
  };
  this.stop = function () {
    this.started = false;
  };
  this.drive = function () {
    if (this.started) {
      console.log(
        this.make + " " + this.color + " " + this.model + " goes zoom zoom."
      );
    } else {
      console.log("You need to start the engine first.");
    }
  };
}
let honda = new CarPrototype("Honda", 2010, "blue", "accord");
let acura = new CarPrototype("Acura", 2013, "red", "nsx");
honda.drive();
acura.drive();
*/

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
let buddy = new Dog("Buddy", "Poodle", 20);
let spot = new Dog("Spot", "Golden Retriever", 50);
let cupcake = new Dog("Cupcake", "Bully", 32);
let dogs = [buddy, spot, cupcake];

for (let i = 0; i < dogs.length; i++) {
  let size = "small";
  if (dogs[i].weight > 10) {
    size = "large";
  } else {
    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
  }
}
