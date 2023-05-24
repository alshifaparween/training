// function add() {
//     if (arguments.length == 0) {
//         console.log("no parameter passed !");

//     } else {
//         let sum = 0
//         for (let i = 0; i < arguments.length; i++) {
//             sum = sum + arguments[i];

//         }
//         console.log(sum);
//     }
// }
// add(5, 7)
// let first = "webmaster"
// let second = first.split('').sort().join('')
// console.log(second);

//how to create table in javascript

// function mulTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num}*${i}=${num * i}`);

//     }
// }
// mulTable(3)

// function add(a, b) {
//     console.log(a * b);
// }
// add(13, 14)

// let arr = [12, 8, 15, 18, 17, 11, 6]
// for (let i = 0; i < arr.length; i++) {
//    for (let index = i+1; index < arr.length; index++) {


//    }

// }
let arr = [12, 8, 15, 18, 17, 11, 6]
arr = arr.sort(function (a, b) {
    return b - a

})

console.log(arr[1]);

let sum = "this is a very good process"
let res = sum.split('')
