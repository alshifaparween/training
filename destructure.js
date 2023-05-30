// const vehicles = ['mustang', 'f-150', 'expedition'];
// // let [data, x, y] = vehicles;
// let x =vehicles[0]
// let y =vehicles[1]
// let z =vehicles[2]
// console.log(y);

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021,
//     color: 'red'
// }
// let { brand: names, model: model } = vehicleOne
// let names = vehicleOne.brand
// console.log(names);
// Input: let result = (10 > 0) ? true : false;
// Output: true
// Input: let message = (20 > 15) ? "Yes" : "No";
// Output: Yes

// if (4 > 5) {
//     console.log("true");

// } else {
//     console.log("false");
// }

// let res = (2 > 5) ? console.log("true") : console.log("false");
// let age = 48
// age >= 18 && age <= 40 ? console.log("Eligible") : console.log("NotEligible");

//rest parameter
// function rest(...abc) {
//     let sum = 0
//     for (let i = 0; i < abc.length; i++) {
//         sum = sum + abc[i];

//     } console.log(sum);
// }
// rest(2, 4, 6, 7, 8, 9)

//spread parameter
// let array1 = ["javascript", "algorithm", "PHP"]
// let array2 = ["01", "56", "34"]
// let res = [...array1, ...array2]
// console.log(res);

// let object1 = { class: "java", time: "4:30" }
// let object2 = { name: "HTML", schedule: "4:00" }
// let result = { ...object1, ...object2 }
// console.log(result);

//generate otp
// let otp = ""
// for (let i = 1; i <= 4; i++) {
//     otp = otp + Math.floor(Math.random() * 9)

// }
// console.log(otp);

//array destructure
// let array = ["science", "Math", "History"]
// let [names, x, y] = array
// console.log(y);

//object distructre
// let object = { science: "78", math: "80", hist: "78", language: { eng: "80", urdu: "90" } }
// let { science: num, math: numb, hist: num1, language: { eng: name, urdu: name2 } } = object
// console.log(names);

//ternary operator

// let temp = 50
// temp = temp <= 40 && temp <= 30 ? console.log("hot") : console.log("cold");
// console.log(temp);

//find total duplicate count from an array
// let array = [44, 23, 89, 56, 23, 56, 89, 89, 89]
// let max = array[0]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]
//     }
// }

// let count = 0;

// for (let i = 0; i < array.length; i++) {

//     if (array[i] == max) {
//         count++;
//     }
// }
// console.log(count);

let array = [22, 45, 67, 23, 67, 37, 67]
let max = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]
    }

}
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == max) {
        count++;

    }

} console.log(count);