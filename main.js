// var firstName = "Ibrahim";
// var lastName = "Mirzayev";
// var age = 16;

// var isMarried = false;

// var stringType = "";

// var undefinedVariable = undefined;

// var nullVariable = null;

// var objectIbrahim = {
//   firstName: "Ibrahim",
//   lastName: "Mirzayev",
//   age: 16,
// };

// console.log(objectIbrahim.isStudent);

// objectIbrahim.isStudent = true;
// objectIbrahim.age = 17;

// var keyName = "lastName";
// console.log(array[44]);

// console.log(objectIbrahim.isStudent);
// var array = [1, 2, 3, 4, 5, 6, null, "Salam", true];
// array[9] = false;
// array[13] = 22;
// array[14] = null;
// console.log(array[9]);
// console.log(array[10]);
// console.log(array[11]);
// console.log(array[12]);
// console.log(array[13]);
// console.log(array[14]);

// console.log(objectIbrahim[keyName]);
// console.log(typeof array);

// console.log(test);
// var test = "salam";
// console.log(test);
// var test = "sagol";
// console.log(test);

// console.log(test);
// let test = "Salam";
// console.log(test);

// let test2 = "sagol";
// console.log(test2);

// const testConstant = "Hello world";

// const test = ""

// const personObject = {
//   firstname: "Muhammed",
//   lastname: "Mikayilov",
// };

// personObject = "Test";

// personObject.isTeacher = true;

// console.log(personObject);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 5));

// console.log(sum(10, 20));

// sum(5, 5);

// sum(10, 30);

// function totalSum(a, b) {
//   return sum(a, b);
// }

// console.log(totalSum(6, 10));
// console.log(totalSum(20, 10));
// console.log(totalSum(6, 50));
// console.log(totalSum(66, 11));

// function test(fn) {
//   return fn();
// }

// const anonymFunction = function () {
//   return 5 + 10;
// };

// function exampleFunc() {
//   return 5 + 10;
// }

// console.log(test(() => 5 + 10));

// const tFn = (a, b) => a + b;

// console.log("TEST:", tFn(6, 10));

// console.log("TEST:", tFn(5 + 10));

// const anonymFunction = function () {
//   return 5 + 10;
// };

// console.log(test(anonymFunction()));

// console.log(test(anonymFunction));

// );

// const testFunc = function () {
//   return a + b;
// };

// console.log(a + b);

const carObject = { brand: "hyundai", model: "Tucson", year: 2013 };
const person = { firstname: "Muhammed" };

// carObject.color = "gray";

// console.log(carObject);

// let propertyName = "test";

// carObject[propertyName] = "red";

// function addNewProperty(key, value, object) {
//   object[key] = value;
// }

// addNewProperty("color", "red", carObject);
// addNewProperty("lastname", "Mikayilov", person);

// console.log(carObject);
// console.log(person);

// var test;

// function testFn() {
//   console.log("Inside func");
// }

// var test = undefined;

// console.log(test);
// var test = undefined;

// console.log(test);

// if (!test) {
//   console.log("Show B page");
// }

// var test = "salam";
// // var test = "Sagol";

// console.log(test);

// testFn();

// function testFn() {
//   console.log("Inside func");
// }

// let a = 2;
// let b = 15;

// if (a === 5) {
//   console.log("IF");
// } else if (b == 15) {
//   console.log("ELSE If");
// } else {
//   console.log("ELSE");
// }

// let a = 2;
// let b = 10;

// if (a === 2 && b === 15) {
//   console.log("IF");
// } else {
//   console.log("ELSE");
// }

// let a = 2;
// let b = 15;

// if (a !== 2 || b !== 15) {
//   console.log("IF");
// } else {
//   console.log("ELSE");
// }

let a = 5;

// switch (a) {
//   case "Yanvar":
//     console.log("YANVAR");
//     break;
//   case "Mart":
//     console.log("MART");
//     break;
//   default:
//     console.log("Belə ay yoxdu");
//     break;
// }

// function sum(x, y) {
//   return x + y;
// }

// function minus(x, y) {
//   return x - y;
// }

// function devide(x, y) {
//   return x / y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function calculate(x, y, operator) {
//   switch (operator) {
//     case "+":
//       return sum(x, y);
//     case "-":
//       return minus(x, y);
//     case "*":
//       return multiply(x, y);
//     case "/":
//       return devide(x, y);
//     default:
//       return "Duzgun operator secin";
//   }
// }

// console.log(calculate(10, 5, "+"));
// console.log(calculate(10, 5, "-"));
// console.log(calculate(10, 5, "*"));
// console.log(calculate(10, 5, "/"));
// console.log(calculate(10, 5, "fdsfdsf"));

// const arrowFn = () => {}; // Arrow function

// const anonymFn = function () {}; // Anonym function

// function namedFn() {} // Named function

// console.log(this);

const car = {
  model: "bmw",
  brand: "535i",
  changeModel: function () {
    // console.log("Open Door:", this);
    this.model = "535i";
  },
};

const newCar = {
  model: "bmw",
  brand: "535i",
  changeModel: () => {
    // console.log("Open Door:", this);
    this.model = "535i";
  },
};

car.changeModel();
newCar.changeModel();
// car.closeDoor();

console.log(car);
console.log(newCar);

console.log(this.model);

// function tst() {
//   console.log(this);
// }

function testFunction(value) {
  if (value === 10) {
    console.log("TRUE");
  }
}

testFunction(2000);
