let s = (function(a,b,...args){
    console.log(args);
    return args.filter((x)=>{
        return typeof x == 'number';
    })
    .reduce((a,b)=>{
        return a+b;
    });
})(1,2,"hii" , 7,"sonu" ,3)
console.log(s);
// let y =s(1,2,"hii" , 7,"sonu" ,3);
// console.log(y);

// let s1 = (function(a,b,...args){
//     console.log(args);
//     return args.filter((x)=>{
//         return typeof x == 'number';
//     })
//     .reduce((a,b)=>{
//         return function(d){
//             return `Hii ${a+b}`

//         };
//     });
// })(1,2,"hii" , 7,"sonu" ,3)("ello");