//object literal
let carParams = {
  make: "Chevy",
  model: "Impala",
  year: 2020,
  color: "white",
  passengers: 4,
  convertible: false,
  mileage: 1200,
};
let carChevy = new Cars(carParams);

//object constructor
function Cars(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = false;
  (this.start = function () {
    this.started = true;
  }),
    (this.stop = function () {
      this.started = false;
    }),
    (this.drive = function () {
      if (this.started) {
        console.log(this.make + " " + this.model + " " + " goes zoom zoom.");
      } else {
        console.log("Start the engine first.");
      }
    });
}
//assign value to the constructor
let chevy = new Cars(
  "Chevy",
  "Impala",
  2020,
  "Navy Blue",
  4,
  false,
  12000,
  true
);
let honda = new Cars("Honda", "Accord", 2018, "white", 4, false, 1320, true);
//test drive method
let testDrive = new Cars(
  "Webville Motors",
  "Test Car",
  2014,
  "marine",
  2,
  true,
  21
);

let cars = [chevy, honda, testDrive];
for (let i = 0; i < cars.length; i++) {
  cars[i].start();
  cars[i].drive();
  cars[i].stop();
}
