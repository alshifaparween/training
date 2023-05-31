// // const vehicles = ['mustang', 'f-150', 'expedition'];
// // // let [data, x, y] = vehicles;
// // let x =vehicles[0]
// // let y =vehicles[1]
// // let z =vehicles[2]
// // console.log(y);

// // const vehicleOne = {
// //     brand: 'Ford',
// //     model: 'Mustang',
// //     type: 'car',
// //     year: 2021,
// //     color: 'red'
// // }
// // let { brand: names, model: model } = vehicleOne
// // let names = vehicleOne.brand
// // console.log(names);
// // Input: let result = (10 > 0) ? true : false;
// // Output: true
// // Input: let message = (20 > 15) ? "Yes" : "No";
// // Output: Yes

// // if (4 > 5) {
// //     console.log("true");

// // } else {
// //     console.log("false");
// // }

// // let res = (2 > 5) ? console.log("true") : console.log("false");
// // let age = 48
// // age >= 18 && age <= 40 ? console.log("Eligible") : console.log("NotEligible");

// //rest parameter
// // function rest(...abc) {
// //     let sum = 0
// //     for (let i = 0; i < abc.length; i++) {
// //         sum = sum + abc[i];

// //     } console.log(sum);
// // }
// // rest(2, 4, 6, 7, 8, 9)

// //spread parameter
// // let array1 = ["javascript", "algorithm", "PHP"]
// // let array2 = ["01", "56", "34"]
// // let res = [...array1, ...array2]
// // console.log(res);

// // let object1 = { class: "java", time: "4:30" }
// // let object2 = { name: "HTML", schedule: "4:00" }
// // let result = { ...object1, ...object2 }
// // console.log(result);

// //generate otp
// // let otp = ""
// // for (let i = 1; i <= 4; i++) {
// //     otp = otp + Math.floor(Math.random() * 9)

// // }
// // console.log(otp);

// //array destructure
// // let array = ["science", "Math", "History"]
// // let [names, x, y] = array
// // console.log(y);

// //object distructre
// // let object = { science: "78", math: "80", hist: "78", language: { eng: "80", urdu: "90" } }
// // let { science: num, math: numb, hist: num1, language: { eng: name, urdu: name2 } } = object
// // console.log(names);

// //ternary operator

// // let temp = 50
// // temp = temp <= 40 && temp <= 30 ? console.log("hot") : console.log("cold");
// // console.log(temp);

// //find total duplicate count from an array
// // let array = [44, 23, 89, 56, 23, 56, 89, 89, 89]
// // let max = array[0]
// // for (let i = 0; i < array.length; i++) {
// //     if (array[i] > max) {
// //         max = array[i]
// //     }
// // }

// // let count = 0;

// // for (let i = 0; i < array.length; i++) {

// //     if (array[i] == max) {
// //         count++;
// //     }
// // }
// // console.log(count);

// //let array = [22, 45, 67, 23, 67, 37, 67]
// //let max = array[0]
// //for (let i = 0; i < array.length; i++) {
// //  if (array[i] > max) {
// //    max = array[i]
// //}

// //}
// //let count = 0;
// //for (let i = 0; i < array.length; i++) {
// //  if (array[i] == max) {
// //    count++;

// //}

// //} console.log(count);


// //checking pallindrome

// let palin = ["Dad", "mOm", "Wow"]
// //let res = []
// //for (let i = 0; i < palin.length; i++) {
// //  const element = palin[i].toLowerCase().split("").reverse().join("");
// //console.log(element);
// //if (palin[i].toLowerCase() == element) {
// //       res.push(element)

// //}
// //}

// //console.log(res);

// //object destructre

// let person = {
//     firstname: "Alshifa",
//     lname: "Parween",
//     sayhello() {
//         console.log("hello ! i am" + this.firstname + "and i have a " + car.brand)
//     }

// };
// let car = {
//     brand: "Tata",
//     model: "safari"
// }
// person.sayhello();

// //for of loop

// //let array = [3, 5, 6, 7, 8]

// //for (i of array) {
// //   console.log([i]);
// //}
// //for (i in array) {
//     //console.log([i]);
// //}

// //maps in javascript

// //const fruits = new Map([
// //  ["apples", 500],
// // ["bananas", 300],
// //["oranges", 200]
// //]);
// //let res = fruits.get("apple");
// //console.log(res);



// //call back function
// //function alshifa(a) {

// //}
// //let c = alshifa(3)
// //console.log(c);

// //function sum(x) {
//   //  return 7 + x
// //}
// //let y = sum(5)
// //console.log(y);
// //let z = alshifa(sum(5))
// //console.log(z);

// function num(para) {
//     let i = 2
//     return i + para
// }
// let t = num(4)
// console.log(t);

// let s = sum(num(4))
// console.log(s);

// //map method in javascript
// let array = [4, 3, 5, 6]
// let h = array.map((a) => (a))
// console.log(h);

// let array1 = [0, 7, 8, 9]
// let res = []
// let s = array1.filter((b) => (b >  7))
// // if (array1.splice(2, 1)) {

// //     res.push(array1)
// // }
// console.log(s);
// let arr = [9, 8, 6, 23, 45]
// let sum = arr.filter((e) => (e != 23))
// console.log(sum);

//find in array
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.filter(myFunction);
// function myFunction(value, index, array) {
//     console.log(index);
//     return value > 16;
// }
// console.log(first);
let number = [2, 5, 44, 23, 87]
let second = number.find(names);
function names(value) {
    return value > 23

}
console.log(second);

