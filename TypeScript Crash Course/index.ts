// Basic Types 
let age: number = 25
let hobby: string = "Soccer"
let isAdult: boolean = true
let fruit: any = "apple"

// Arrays
let fruits: string[] = ["Apple", "Orange"]
let arr: any[] = [22, "a", true]
let numArr: number[][] = [[1], [2]]

//Tuples
let employee: [number, string] = [1, "Jack"]
let employees: [number, string][] = [
    [1, "Jack"],
    [2, "Sarah"]
]

//Objects

type Car = {
    brand: string
    year: number
}

// let car1: Car = {
//     brand: "Lexus",
//     year: 2020
// }

// Interface

interface car1 {
    brand: string,
    year: number
}

let newCar: car1 = {
    brand: "Lexus",
    year: 2020
}

// Union 
let x: string | number = 22
type occupation = "employed" | "student"
let jackOccupation: occupation = "student"

// Type Assertion 

let y: any = "a"
y = <number> 22


// Functions

function add(x:number, y:number):number {
    return x + y
}

function sayHi(): void {
    console.log("Hi")
}

function copyArr<T>(arr: T[]): T{
    return [...arr]
}

let numCopy = copyArr<number>([1, 2, 3])
let strCop = copyArr<string>(["1", "2", "3"])

//Enums

enum EyeColor {
    brown = "Common Eye Color",
    blue = "Rare Eye Color",
    green = "Very Rare Eye Color"
}

interface Student{
    name: String,
    age?: number,
    eyeColor: EyeColor
}

function displayStudent(student: Student): void {
    const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor
    document.body.innerText = info
}

displayStudent({
    name: "Jack",
    eyeColor: EyeColor.brown
})