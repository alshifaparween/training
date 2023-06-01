// //find longest length from an array
// function array(str) {
//     let sum = str.split(" ")
//     let res = ""
//     for (let i = 0; i < sum.length; i++) {
//         if (sum.length > res.length) {
//             res = sum[i]
//         }

//     }
//     return res
// }
// let g = array("megalodonshark is a great language")
// console.log(g);


//map function 

// let object = [{
//     name: "Alshifa",
//     age: 21
// },
// {
//     name: "karishma",
//     age: 28
// },
// {
//     name: "Nigar",
//     age: 30
// },

// ]
// let res = object.filter((val) => {
//     return val.age >= 22
// })
// console.log(res);

// let student = [{
//     id: 123,
//     name: "rahila"
// },
// {
//     id: 345,
//     name: "Shaheen"
// },]
// let result = student.filter((val) => {
//     return val.id == 345
//     console.log(val);
// })
// console.log(result);

//changing first letter to capital
// function titleCase(str) {
//     var word = str.toLowerCase().split(" ");
//     console.log(word);
//     for (let i = 0; i < word.length; i++) {
//         word[i] = word[i][0].toUpperCase() + word[i].slice(1);
//         return word.join(" ");

//     }
// }
// titleCase("i am a little teapot");

function titleCase(str) {
    var titled = str.toLowerCase().split(" ").map(function (elem) {
        return elem[0].toUpperCase() + elem.slice(1);
    })
    return titled.join(" ");

}
let d = titleCase("i am a little tea pot")
console.log(d)