// var count = 1;
// while (count <= 10) {
//     console.log("hello everyone");
//     count = count + 1
// }
// var sum=2;
// while (sum <=10) {
//     console.log("hello world");
//     sum++
//     }
// var num=8;
// while (num  <=20) {
//     console.log("today is good day");
//     num++
//      }
// var temp = 1;
// do {
//     console.log("today's temp is 44 degree", temp);
//     temp = temp + 1

// } while (temp <= 19);
// var stud = 8;
// do {
//     console.log("they are brilliant student");
//     stud = stud + 1
// } while (stud <= 20);
// var sum = 0;
// var array = ["12", "15", "20", "15"]
// for (let index = 0; index < array.length; index++) {
//     sum = sum + Number(array[index]);
// }
// // console.log(sum);
// var num = 0;
// var array = ["20", "40", "45", "50"]
// for (let index = 0; index < array.length; index++) {
//     num = num + Number(array[index]);

// }
// console.log(num);
// var max = [23, 24, 66, 77, 14];
// let res = max[0]
// for (let i = 0; i < max.length; i++) {
//     if (max[i] > res) {
//         res = max[i]
//     }
// }
// console.log(res);
// var sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1)
//         sum = sum + i;

// }
// console.log(sum);
// var num = 0;
// for (let i = 2; i <= 20; i++) {
//     if (i % 2 == 1)
//         num = num + i;

// }
// console.log(num);
// var max = ["30", "25", "76", "40"]
// var res = max[0]
// for (let i = 0; i > max.length; i++) {
//     if (max[i] > res) {
//         res = max[i]
//     }

// }
// console.log(res);
// var max = [112, 789, 234, 124, 789.098]
// var res = max[0]
// for (let i = 0; i < max.lengt; i++) {
//     if (max[i] > res) {
//         res = max[i]
//     }
// }
// console.log(res);
// var sum = 0;
// var Array = [12, 23, 69, 00, 75, 76]
// for (let i = 0; i < Array.length; i++) {
//     sum = sum + Number(Array[i])
// }
// console.log(sum);



// 1 
let array = [2, 4, 2, 4, 2, 4, 5, 5, 6, 7]

let dabba = []
for (let i = 0; i < array.length; i++) {  // array[i]= 2
    let count = 0
    for (let j = 0; j < array.length; j++) { //  array[j] = 2,4...
        if (!dabba.includes(array[i]) && array[i] == array[j]) {
            count += 1
            // for finding duplicate
            // if (count > 1) {
            //     dabba.push(array[i])
            //     break;
            // }

        }
    }
    // for removing duplicate
    if (count == 1) {
        dabba.push(array[i])
    }
}
console.log("dabba", dabba)

// function checkDup(arr) {
//     let dabba = []
//     for (let i = 0; i < array.length; i++) {  // array[i]= 2
//         let count = 0
//         for (let j = 0; j < array.length; j++) { //  array[j] = 2,4...
//             if (!dabba.includes(array[i]) && array[i] == array[j]) {
//                 count += 1
//                 if (count > 1) {
//                     dabba.push(array[i])
//                     break;
//                 }

//             }
//         }
//     }
//     return dabba
// }


// let returnValue = checkDup(array)
// console.log("return", returnValue)














