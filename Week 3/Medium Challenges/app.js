// // Q1 Falsy or Truthy?

// function falsyOrTruthy(elem1, elem2) {
//     return !elem1 ? elem1 : elem2;
// }

// console.log(falsyOrTruthy(2,5))

// Q2 Return the length of any given array 

// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([1, 5, 4, 2, 7]));

// // Q3 Get the last element in the array

// function arrLength(arr) {
//     return arr[arr.length - 1];
// }

// console.log(arrLength([0, 1, 5, 50]));

// // Q4 Find the sum of an array

// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         // This is how you loop through every element in an array
//         sum = sum + arr[i];
        
//     }
//     return sum;
    
// }

// console.log(arrSum([2, 2, 2]));

// // Q5 Add up the numbers from a single number

// function progressiveSum(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum
// }

// console.log(progressiveSum(600));

// // Q6 Calculate the time 

// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(130));

// Q7 Find the largest number

// function getMax(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(getMax([-250, -500, -750, -200]));


// function getMax(arr) {
//     let max = arr[0]
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(getMax([0, 1, 5, 10]));

// Q8 Reverse a String

// function reverseString(str) {
//     let reversedString = '';
//     for (let i = 0; i < str.length; ++i) {
//         // This is how you loop through every character in a string
//         reversedString = str[i] + reversedString;
//     }
//     return reversedString;

// }

// console.log(reverseString('abc'));

// 'abc'.split('').reverse().join('')
// split turns the string into an array,
//  reverse will reverse the array and join turns array into string.

// Q9 Turn every element in an array into 0

// function convertToZeros(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         arr[i] = 0;
//     }
//     return arr;
// }

// function convertToZeroes(arr) {
//     return new Array(arr.length).fill(0);
// }

// function convertToZeros(arr) {
//     return arr.map(elem => {return 0});
// }

// console.log(convertToZeros([5, 100, 0]));

// Q10 Filter out all the apples

// function removeApples(arr) {
//     let noApples = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple') {
//            noApples.push(arr[i]);
//         //    .push is how you add an element to an array.
//         }
//     }
//     return noApples;
   

// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));

// function removeApples(arr) {
//     return arr.filter(elem => elem !== 'Apple');
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));


// // Q11 Filter out all the falsy values 

// function filterOutFalsy(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i]) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]));

// Q12 Truthy to true, Falsy to false

function convertToBoolean(arr) {
  return arr.map(elem => !!elem)
  
}

console.log(convertToBoolean(['', NaN, 500, null, false, 0]))