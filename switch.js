//logical operator example

//let age = 15
//if (age <= 18 && age <= 40) //logical and
//{ console.log("eligible for vote"); }
//else {
//  console.log("not eligible for vote");
//}

//comparision operator
//let a=5;
//let b=10;  // both are true
//if(a>0 && b>0){
//   console.log("both a and b are positive");
//}
//let a = 5;
//let b = 10;
//if (a > 0 || b > 0) {
//  console.log("either a or b is positive");
//}
//logical not example when write correct ans it give opposite ans
//let a=5;
//let b=-10;
//if(!(a>0)) {
//  console.log("a is not positive");
//}
// if (!(b>0)){
//     console.log("b is  positive");
// }
//logical condition
// let age = 18;
// let qualification = "technical"
// if (age >= 18 && age<=40 && qualification === "technical") {
//   console.log("eligible for IT");
// }
// else {
//   console.log("not eligible for IT");
// }
//switchcase

// let age = 18
// let qualification = "technical"
// switch (true) {
//   case (age >= 18): console.log("eligible");

//     break;

//   default: console.log("not eligible");

// }
//string method
// 1)length(property) 2)toLowerCase() 3)toUpperCase()4)includes() 5)indexOf() 6)lastIndexOF() 7)concat() 8)split()
// 9)substr() 10)slice() 11)toString() 12)join() 13)Replace() 14)subString() 15)
// let str="i love india"
// let str1=" react"
// let str2=" bootstrap"
// let res=str.concat(str1,str2);
// console.log(res);
// let a = 5;
// console.log(a.toString() + 10);
// let z = "javascript is a great languge is"
// console.log(z.indexOf("is", 23));

let num = 56.10;
// let number=num.toPrecision(2)
let number = num.toFixed(1)
console.log(number);