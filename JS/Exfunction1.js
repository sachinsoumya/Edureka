function add (a,b){
    let sum =a+b;
    return sum;

}

let sum = add;
console.log(sum(2,3)); // 5

function sum2 (a,b){
    return a+b;
}

let s = sum2;

function average(x,y ,t){
    return t(x,y)/2;
}

console.log(average(10,10,s));


 function cmToInch(length){
    return length/2.54;

}

 function inchToCm(length){ 

    return length*2.54;

}


function convert (fn , length){ //here we pass the function as an argument
     return fn(length);//return the function call
    


}


console.log(convert(cmToInch , 25));
console.log(convert(inchToCm , 11));

// (function () {
// console.log("hlo")
    
    
// })();

const calculate = function (r){
    return 3.141*r*r;
}

console.log('area of circcle is ' + calculate(7));

setTimeout(function (){
    console.log(6000);
} , 5000);
console.log("2024");


 const s1=(function() {
    return "5"+88;
})();

console.log(calculate);
console.log(s1);
console.log((function() {
    return "5"+88;
}));


// console.log(typeof(s1));

let person = {
    name:"Sailendra" , 
    age :27,
     city () {
    return this ;
  }
};

console.log(person.city());

(function(){
    console.log(person.name + "is of" + person.age +"years old");
})();


const result = function (){
    return person.name;
}

console.log(result())

function result2 (){
    person.name="Sujit";
    return this;
}

console.log(result2());

const love = function (){
    return `Do love to whom you wanna marry`
}

const love2 = ()=>{
    return `Do love to whom you wanna marry`
}

const addition = x => x+" hii";

console.log(addition(6,7));
console.log(love())
console.log(love2())

// console.log(window.person);















