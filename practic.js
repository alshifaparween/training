//how to find sum of an array?
// let arr = [12, 13, 79, 90, 23,]//output=217
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]

// }
// console.log(sum);

//find dup in array?

// 
//find product of an array?

// let array = [12, 13, 14, 12, 15, 16, 15, 17, 18, 17]
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 1) {
//         sum = sum + 1
//     }
// }
// console.log(sum);

//find all the odd number in an array

// let sum = [2, 13, 14, 75, 19, 20]
// let res = []
// for (let i = 0; i < sum.length; i++) {
//     if (sum[i] % 2 == 1) {
//         res.push(sum[i])

//     }

// }
// console.log(res);

// find maximum number from an array

// let array = [23, 90, 18, 78, 68]
// let max = [0]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]

//     }

// }
// console.log(max);

//how to check number in array


// function p(k) {

//     if (typeof k === "string") {
//         console.log(true);;

//     }
//     else console.log(false);
// }
// p("alshifa")


//how to convert a series in descending order

// let str = "javascript"
// let res = str.split('').sort().join('')
// console.log(res);

//how to make a table
function table(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${a}*${i}=${a * i}`);

    }

}
table(2)
table(5)

//checking pallindrome
let input = "aba"
let a = input.toString()
let b = a.split('').reverse().join('')
if (a == b) {
    console.log("pallindrome");

}
else {
    console.log("not pallindrome");
}