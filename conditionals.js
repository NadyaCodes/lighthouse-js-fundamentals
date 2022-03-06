//two if statements
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

/*if...else statement 
const cold = false; */

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

//if...else if statment

const temperature = 22;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

//Logical operators

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

/*Logical operators case 2
from above: const temperature = 22
*/

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}

/*Logical operators case 3
from above: const raining = true;
*/

if (!raining) {
  console.log("Leave your umbrella at home!");
}