function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}
Robot.prototype.maker = "Human";
Robot.prototype.errorMessage = "All systems go";
Robot.prototype.reportError = function () {
  console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function () {
  this.errorMessage = "I appear to have a short circuit!";
};
//assigning variables
let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "Goerge Jetson");

//calling each method
rosie.reportError();
rosie.spillWater();

//console log
console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));

//space robot object constructor
function SpaceRobot(name, year, owner, homePlanet) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.homePlanet = homePlanet;
}
//assigning new prototype for space robot
SpaceRobot.prototype = new SpaceRobot();
SpaceRobot.prototype.speak = function () {
  if (this.name === "Megatron") {
    console.log("I'm here to destroy Earth!");
  } else if (this.name === "Autimus Prime") {
    console.log("I'm here to save Earth.");
  }
};
SpaceRobot.prototype.pilot = function () {
  console.log(this.name + " says, blast cannon.");
};
//assigning new robot variables
let megatron = new SpaceRobot("Megatron", 3071, "Decepticon", "Scrapmetal");
let prime = new SpaceRobot("Autimus Prime", 3075, "Autobots", "Emerald");

megatron.speak();
megatron.pilot();
prime.speak();
