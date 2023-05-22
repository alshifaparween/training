// let array = "javascript is a great language"
// var res = array.split("").reverse().join("").split(" ").reverse().join(" ")
// console.log(array);
//console.log(res);

// for (let i = 0; i < res.length; i++) {

// }
// console.log(result);

// function sum(a, b) {
//     let x = a
//     let y = b
//     let z = x + y
//     return z

// }
// let res = sum(10, 23)
// console.log(res);
let arr = [7, 3, 5, 8, 2]
let target = 10;
let tar = []
for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
        let num1 = arr[j]
        if (num + num1 === target) {
            tar.push(num, num1)
        }
    }
}
console.log(tar);

