"use strict";
// Basic Types 
let age = 25;
let hobby = "Soccer";
let isAdult = true;
let fruit = "apple";
// Arrays
let fruits = ["Apple", "Orange"];
let arr = [22, "a", true];
let numArr = [[1], [2]];
//Tuples
let employee = [1, "Jack"];
let employees = [
    [1, "Jack"],
    [2, "Sarah"]
];
let newCar = {
    brand: "Lexus",
    year: 2020
};
// Union 
let x = 22;
let jackOccupation = "student";
// Type Assertion 
let y = "a";
y = 22;
// Functions
function add(x, y) {
    return x + y;
}
function sayHi() {
    console.log("Hi");
}
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCop = copyArr(["1", "2", "3"]);
//Enums
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "Common Eye Color";
    EyeColor["blue"] = "Rare Eye Color";
    EyeColor["green"] = "Very Rare Eye Color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "Jack",
    eyeColor: EyeColor.brown
});
