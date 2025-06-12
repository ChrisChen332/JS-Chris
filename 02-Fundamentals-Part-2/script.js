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
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
const calcAge4 = (birthYear) => {
  const age = 2037 - birthYear;
  const ans = 65 - age;
  return ans;
};
console.log(calcAge4(1991));
