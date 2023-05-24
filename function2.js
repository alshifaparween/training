//alphabetically sajana hain
// function alphabet_order(str) {
//     return str.split('').sort().join('');
// }
// console.log(alphabet_order("webmaster"));

// var first = "Mary"
// var second = "Army"
// function isAnagram(firstWord, secondWord) {
//     var first = firstWord.toLowerCase();
//     var second = secondWord.toLowerCase();
//     first = first.split('').sort().join('');

// }
//checking anagram

// console.log(isAnagram(firstWord, secondWord));
function checkStringsAnagram(a, b) {
    let len1 = a.toLowerCase();
    let len2 = b.toLowerCase();
    // if (len1 !== len2) {
    //     console.log('Invalid Input');
    //     return
    // }
    let str1 = len1.split('').sort().join('');
    let str2 = len2.split('').sort().join('');
    if (str1 === str2) {
        console.log("true");
    } else {
        console.log("false");
    }
}
checkStringsAnagram("Mary", "Army")

//find second largest number from an array
// let array = [12, 34, 23, 45, 67, 78, 90]
// array.sort(function (a, b) {
//     return b - a
// })
// console.log(array[1]);
//finding duplicate from an array
// let array = [12, 13, 14, 12, 15, 16, 15, 17, 18, 17]
// let container = []
// for (let i = 0; i < array.length; i++) {

//     let count = 1
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] == array[j]) {

//             count = count + 1
//         }
//     }

//     if (count == 2) {
//         container.push(array[i])
//     }

// }
// let sum = 0
// for (let index = 0; index < container.length; index++) {

//     sum = sum + container[index]
// }
// console.log(sum);

//how to remove duplicate from an array
// let array = [12, 13, 14, 12, 15, 16, 15, 17, 18, 17]
// let res = []
// for (let i = 0; i < array.length; i++) {
//     if (res.indexOf(array[i]) == -1) {
//         res.push(array[i])
//     }

// }
// console.log(res);

// let arr = [12, 11, 12, 13, 11, 14, 15, 16, 11, 11, 16, 8, 10, 65];

//  output --->
// let result = {
//     "12" : 2,
//     "11" : 4,
//     "16" : 2,
// }