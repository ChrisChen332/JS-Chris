"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//   console.log("lol");
// }

// function logger() {
//   console.log("lol");
// }

// logger();

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age2);
// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge3(1991);
// const calcAge4 = (birthYear) => {
//   const age = 2037 - birthYear;
//   const ans = 65 - age;
//   return ans;
// };
// console.log(calcAge4(1991));

// const calcTip = (bill) => bill>=50 && bill<=300 ? bill * 0.15 : bill * 0.2;

// const bills = [125,555,44]
// const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])]
// console.log(calcTip(bills[0]))
// const totals = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2] ]

// const chris = {
//   firstName: "chris",
//   lastName: "chen",
//   birthYear: 1991,
//   job: "student",
//   friends: ["Micheal", "Jack", "ryan"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//   },
// };

// // console.log(chris.firstName);
// // console.log(chris["firstName"]);

// // console.log(
// //   `${chris.firstName} has ${chris.friends.length} friends, and his best friend is called ${chris.friends[0]}`
// // );
// chris.calcAge();

// console.log(chris.age);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = (this.mass / this.height) * this.height;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = (this.mass / this.height) * this.height;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// } else if (john.bmi < mark.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else {
//   console.log("Equal");
// }
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(tips);

function calcAverage(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
