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
// function table(a) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${a}*${i}=${a * i}`);

//     }

// }
// table(2)
// table(5)

// //checking pallindrome
// let input = "aba"
// let a = input.toString()
// let b = a.split('').reverse().join('')
// if (a == b) {
//     console.log("pallindrome");

// }
// else {
//     console.log("not pallindrome");
// }





// }
// console.log(count);



// let date = new Date("2001-12-12");
// // date.setMonth(date.getMonth() - 260)
// let res = date.toDateString(" ")
// console.log(res);

//math method in javascript
//1)round() 2)floor() 3)ceil() 4)pow() 5)sqrt() 6)min() 7)max() 8)random()

// let arr = math.min(12, 23, 24, 56)
// console.log(arr);

// let array = [21, 23, 14, 15, 21, 23, 15, 23, 99]
// let count = array[0];
// let max = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > count) {
//         count = array[i]

//     }
// }
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == count) {
//         max = max + 1
//     }

// }
// console.log(max);


// History of Javascript

//  1997 ECMA 1   European Computer Manufactures Associtaion
//  1998 ECMA 2   
//  1999 ECMA 3   
//  2005 ECMA 5  
//  2009 ECMA 5.1  
//  2015 ECMA (es6) 
//  2016 ECMA (es61) 
//  2017 ECMA (es62) 
//  2018 ECMA (es63) 


// 1) let 2)const
// 2)Default Parameter

// function func(name = "skjdb") {
//     console.log(name);
// }
// func("abc")

// 3)Rest Parameter (...)

// function sum(...abc) {
//     let store = 0
//     for (let i = 0; i < abc.length; i++) {
//         store = store + abc[i]
//     }
//     return store
// }
// let result = sum(2, 3, 4, 5, 87)
// console.log(result);
// 4)Spread Operators(...)
// let arr1 = { name: "Shahid", adress: "webel" }
// let arr2 = { age: 20 }
// let spr = { ...arr2, ...arr1 }
// console.log(spr);

// 5)Template literial 

// let name = "Ro hit"
// let lname = "Sharma"

// let res = "My Name is " + name + "last name is" + lname;
// let res1 = `My Name is ${name}. Last Name is ${lname}.`
// console.log(res);
// let text = `He's often called "Johnny"`
// console.log(text);

// 6)Array destructure

// let ardst = ["Apple", "Banana", "orange", ["adress", "webel"]]
// let [j] = ardst;
// console.log(j);
// let fruit1 = ardst[0]
// let fruit2 = ardst[1]
// let fruit3 = ardst[2]

// let [fruit1, fruit2, fruit3, [adr, res]] = ardst
// console.log(res);

// 7)Object Destructure

let obj = { name: "Dhoni", age: "20", adress: { mainAdress: "Ranchi", minRoad: "Hind" } }

// console.log(obj.adress);

// let n1 = obj.name;

// let { name: name, age: age, adress: { mainAdress: abc, minRoad: minRoad } } = obj
// console.log(abc);

//math method in javascript

//1)round() 2)ceil() 3)floor() 4)sqrt() 5)pow() 6)max() 7)min() 8)random()
// let round = Math.pow(2, 5)
// console.log(round);
// let max = Math.max(12, 23, 34, 89, 90)
// console.log(max);
// console.log(max);

let otp = ""
for (let i = 0; i <= 4; i++) {
    console.log(i);
    otp = otp + Math.floor(Math.random() * 9)
    console.log(otp);

}


