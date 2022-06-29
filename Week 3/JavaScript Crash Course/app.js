// console.log('Hello World' [10]) 
// console.log('12345'.length)

// let str = 'Jamie'
// console.log(str[str.length - 1])

// let fullName = "Jamie O'Brien"
// let isRaining = true
// let temperature = 20
// let planet = 'Earth'

// temperature = temperature + 2

// console.log(temperature)

// Converting Temperatures

// let celsius = 10;
// let fahrenheit = celsius * 1.8 + 32;
// console.log(fahrenheit);

// let bool = '1' !== 1

// console.log(bool)

// let subscribed = false
// let loggedIn = true

// if (subscribed === true) {
//     console.log('show the video')
// }

// else if (loggedIn === true) {
//     console.log('tell the user to upgrade their subscription')
// }

// else {
//     console.log('Tell user to log into account')
// }


// let cash = 55
// let price = 120
// let difference = cash - price

// if (cash > price) {
//     console.log(`You paid extra - here's ${difference} dollars change`)
// }
// else if (cash === price) {
//     console.log("you have paid the exact amount, have a nice day!")
// }

// else {
//     console.log(`not enough money - you still owe ${difference * -1} dollars`)
// }

// let cash = 50
// let price = 40
// let isStoreOpen = true

// let val = "Jamie";


// if (val) {
//     console.log(!!val)
// }

// else {
//     console.log(!!val)
// }

// let hot = true
// hot ? console.log('weather is hot outside') : console.log('weather is cold')

// let subscribed = true
// let = loggedIn = true

// let str = subscribed || loggedIn ? 'show the video' : 'hide the video'
// console.log(str);

// let cash = 50
// let price = 40
// let isStoreOpen = true

// let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
// console.log(str)

// DRY = Don't Repeat yourself

// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

// for (let i = 1; i < 100; i+= 2) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; ++i) {
//      if (i % 5 === 0 && i % 3 === 0) {
//         console.log(`${i} --> Frontend Simplified`)
//     }
//     else if (i % 3 === 0) {
//         console.log(` ${i} --> Frontend`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} --> Simplified`)
//     }
   
//     else  {
//         console.log(`${i} --> ${i}`)
//     }
// }

// tried it myself

// for (let i = 0; i <= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} --> Frotend Simplified`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} --> Simplified`)
//     }
//     else if (i % 3 === 0) {
//         console.log(`${i} --> Frontend`)
//     }

//     else {
//         console.log(`${i} --> ${i}`)
//     }
    
// }

// const str = "Frontend Simplified";

// for (let i = 0; i < str.length; ++i) {
//     console.log(str[i])
// }

// Function defiintion
// function welcomePersonToFES(firstName, lastName) {
//     console.log(`Welcome to FES, ${firstName} ${lastName}`)

// }

// // Call the function
// welcomePersonToFES('Jamie', "O'Brien");


// function fn() {
//     return 5
//     console.log('my function')
// }

// console.log(fn());

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2
// }

// console.log(sumOfTwoNumbers(10,10));

// function convertCelsiusToFahrenheit(C) {
//     return C * 1.8 + 32

// }

// console.log(convertCelsiusToFahrenheit(0));
// console.log(convertCelsiusToFahrenheit(10));
// console.log(convertCelsiusToFahrenheit(30));

// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit(0));

// let arr = [20, 30, 40, 50 ,100]

// // First element of array:
// console.log(arr[0])

// // Last element of array:
// console.log(arr[arr.length - 1])

// // How to add an element to an array
// arr.push(200)

// console.log(arr[arr.length - 1]);

// call back function
// let newArr = arr.filter(element) => {
//     console.log(element)
//     if (element < 50) {
//         return true;
//     }
//     }) 

//     let newArr = arr.filter(element => element < 50)
// console.log(newArr)

// let grades = ['A+', 'A', 'FAIL']

// // let goodGrades = grades.filter((element) => {
    
// //     if (element !== 'FAIL') {
// //         return true;
// //     }
// // })

// let goodGrades = grades.filter(element => element !== 'FAIL'
// )
// console.log(goodGrades)

// let grades = ['A+', 'A', 'FAIL']

// // Create a new empty array called 'goodGrades'

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i]);
//     }
//     // add the current element onto 'goodGrades' only if 
//     // the current element is not equal to 'FAIL'
//     console.log(grades[i]);
// }

// //  console log ' goodGrades'
// console.log(goodGrades);


// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return undefined;
// })

// console.log(newArray)

// let dollars = [1, 5, 10, 3];

// let cents = dollars.map(element => element * 100)

// console.log(cents);

// let dollars = [1, 5, 10, 3];

// // create new 'cents' array
// let cents = [];

// //  loop over every element in 'dollars'
// for (let i = 0; i < dollars.length; ++i) {
//     cents.push(dollars[i] * 100)
// ;}
//     // multiply the element by 100
//     // add this element onto 'cents' array

//     //  console log cents
// console.log(cents);

// let users = [{
//     username: 'Jamie',
//     email: 'j.obrien4412@gmail.com',
//     password:'456',
//     subscriptionStatus: 'VIP',
//     discordId: 'Madaox#9656',
//     lessonsCompleted: [0, 1],
// },
//   {
//     username: 'Jamie',
//     email: 'j.obrien4412@gmail.com',
//     password:'456',
//     subscriptionStatus: 'VIP',
//     discordId: 'Madaox#9656',
//     lessonsCompleted: [0, 1],
// },
// ];

// function login(email, password) {
//     for (let i = 0; i < users.length; ++i) {
//         if (users[i].email === email) {
//             console.log(users[i]);
//             if (users[i].password === password) {
//                 console.log('log the user in - the details are correct')
//             }
//             else {
//                 console.log('password is incorrect - try again')
//             }
//             return;
//         }
//     }
//     console.log('could not find an email that matches')
// }

// // console.log(users[0].lessonsCompleted.map(elem => elem * 2))

// // login('j.obrien4412@gmail.com', '123');

// function register(user) {
//     users.push(user);
   
// }

// register({
//   username:  "Jamie",
//    email: "j.obrien4412@gmail.com",
//   password:  "jam123",
//    subscritpionStatus: "VIP",
//    discordId: "madaox#9656",
//     lessonsCompleted: [0, 2]
// }
// );


// console.log(users);

// First way of accessing an element
// console.log(document.querySelector('#title'));

// // Second way of accessing an element
// console.log(document.getElementById('title'));

// How to access and change any eleemnt in the dom
// document.querySelector('#title').innerHTML += 'Frontend Simplified';

// // Change CSS
// document.querySelector("#title").style.color = 'red';

// function changeTitleToRed() {
//     document.querySelector('#title').style.color = 'blue';
//     console.log('Clicked')
// }
function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme");
}