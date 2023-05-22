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
// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if (len1 !== len2) {
//         console.log('Invalid Input');
//         return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if (str1 === str2) {
//         console.log("false");
//     } else {
//         console.log("true");
//     }
// }
// checkStringsAnagram("Mary", "Army")
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
//             // container.push(array[j])
//             count = count + 1
//         }
//     }

//     if (count == 2) {
//         container.push(array[i])
//     }

// }
// console.log(container);

//how to remove duplicate from an array
let array = [12, 13, 14, 12, 15, 16, 15, 17, 18, 17]
let res = []
for (let i = 0; i < array.length; i++) {
    if (res.indexOf(array[i]) == -1) {
        res.push(array[i])
    }

}
console.log(res);