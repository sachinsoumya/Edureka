


console.log(name) // 'Sachin'
console.log(getAge())//  24


var name = "Sachin";


function getAge(){

    return 24;
}


// let x ;


//** console.log(x) - */;
//** console.log(y) - give the RefferenceError x is not yet initialized */ ;

let x = [1,3,5,6];
const y = 77;

console.log(x , y) // [1,3,5,6] 77


//** console.log(fn())  - give TypeError fn is not a function */ ;


let fn = function(){

    return "88";
}


console.log(fn())//88


//* Arrow functions and function expressions are not hoisted but function declaration is hoisted *//
//* variable declared with var keyword will be hoisted and  variable declared with let and const  keyword will also be hoisted but not initialised *//




// console.log(name);