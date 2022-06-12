"use strict";

// Task 1
let Arr1 = [1, 5, "4", "hello"];
let Arr2 = [true, {}, ["a"], 222];
console.log("2 елемент 1го масиву ", Arr1[1]);
console.log("2 елемент 2го масиву ", Arr2[1]);
console.log("Сума двох других елементі: ", Arr1[1] + Arr2[1]);

// Task 2
Arr1[Arr1.length] = 22;
console.log(Arr1);

// Task 3
for (const value of Arr2) {
  console.log(value, typeof value);
}
