// console.log(global);

// const double = (num) => num*2;
// console.log(double(10));
// console.log(process.argv);//[node location , file location , value in cmmd line argument]

const triple = (num1,num2)=> num1+num2;


const [ , , n1 ,n2] = process.argv;
// console.log(double(n));
console.log(triple(n1,n2));
console.log(triple(+n1,+n2));


// const fs = require("fs");

// const quote = "Little more";

// fs.writeFile("text.txt" ,quote , ()=>{
//     console.log("completed");
// })

// // for(let i =0 ;i<=10;i++){
// //     fs.w
// // }