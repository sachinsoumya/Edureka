function show(){
    let sh = 1

    function add(){
        console.log("this is "+sh +" one closer");
    }

    add();
}

show();


function another(){
    let sh = 2;
    return function add(){
        // console.log(`this is ${sh} closer`);
        return `${sh}nd closer`
    }
}

let s = another();
console.log(s());


let Iifc1 = function(){
    return `hello sir`;
}
console.log(Iifc1());

//immediately invoked function (IIFC)
let Iifc2 = (function(){
    return `hello sir`;
}());
console.log(Iifc2);
 
//we can also use named IIFC
(function Iifc3 (args){
    console.log(`Hello mamdam you are a ${args} perosn`);
})(true);

//syntax

// (function(){

// }())

// //(function myName(){

// }())

let Iifc4 = ((msg)=>{
 return `good morning ${msg} times`
})(100);

console.log(Iifc4);


let myFun = (function (){
    let num = 10 ;
    let num2 = 11;
    function add(){
        return num + num2;
    }
    return add();
})();
console.log(myFun);
console.log(window.myFun);
console.log(window.show);
console.log(Iifc1);

// function add(a,b){
//     return a+b;
// }
// function mul(a,b){
//     return a*b;
// }

// function add(x,y){
//     return 'add';
// }

// console.log(add(6,8));
// console.log(mul(5,6));


let calculator = (function(){
    function add(a,b){
        return a+b;
    }

    function mul(a,b){
        return a*b;
    }
    return {
        add:add,
        mul:mul
    }
})();

function add(){
    return `add`;
}

console.log(calculator.add(5,6));
console.log(add());


 
