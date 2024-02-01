let myFunction = function(x,y){
    return `${x} families has ${y} children`
}

let msg = myFunction(4,6);
console.log((msg));

let myFunction2 = (child1 , child2)=>{
    return `${child1} and ${child2} both have 12 chuas`
}

console.log(myFunction2("John" ,"Rahul"))

let myFunction3 = name => `${name} is a good boy`;
console.log(myFunction3('Ram'));


let myFunction4 =(_)=>{
    return `Hii this is another form of me`;
}
console.log(myFunction4());

let myFunction5 =(_)=>`Hii this is another form of me`;

console.log(myFunction5());

console.log(typeof(myFunction4));
console.log(myFunction4 instanceof Function);

function checkIt(){
    console.log("Hrlo")
}
console.log(window.myFunction);
console.log(window.hasOwnProperty('checkIt'));
console.log(window.hasOwnProperty('myFuntion'));



let rules = ()=>  this;

console.log(rules());

let rules2 = (()=>
{
    return `JII`;
})();
console.log(rules2);

let rules_3 = ((x
    ,
    y)=> x+
    y
    )(7,6);
console.log(rules_3);


 let code = function(color){
    return {value:color};
    

 }

 let currentColor = code('red');
 console.log(currentColor.value);



//  let decode = color =>{value:color};   
//so here it shows value undefined error its becaus does not identify wheather {value.color} is an object or a statement for arrow functione js engine does not identify wheather {value.color} is an object or a statement for arrow function
 let decode = color =>({value:color});//to fix we can use paranthesish around return object in arrow function i.e ().
let nowColor = decode('blue');
 console.log(nowColor.value);

 function Car (){
    this.speed = 0 ;
   this.velocity = function(spedd){
    this.speed = spedd;
    console.log(this);
    
    // let self = this;
    setTimeout(function(){
        console.log(this.speed)
        
    },1000);
   }


 }

 let s = new Car();
 s.velocity(300);//here what happens is the anonomous function inside the setTimeout shadows the this.speed  which inside the velocity function thats why it found undefined 


 function Bike (){
    this.speed = 0 ;
   this.velocity = function(spedd){
    this.speed = spedd;
    setTimeout(()=>{
        console.log(this.speed);
        console.log(this.velocity);
    },1000);
   }

    

 }
 let b = new Bike();
 b.velocity(300);//but incase of arrow function it always takes lexical scope . so it will give this.speed vlaue

var  idea = true;
 let object2 = {
    name:'sonu',
    arr:function(){
        return this.name;
    }
 }
 console.log(object2.arr());

 let object3 = {
    name:'sonu',
    arr:()=>{
        return this.idea;
    }
 }
 console.log(object3.arr());

 function closer(){
    let s =3;
    return function inner(){
        return s+3;
    }
 }

 let x = closer();
 console.log(x());

 let y = (function(a,b){
    return function(){
        return a+b;

    }
 })(5,5)();
 console.log(y);
 console.log(window.y)

 let goal = function(){
    return 10 + arguments[0];
 }
 console.log(goal(5,4));
 
 let cup = function(){
    return ()=> `I love you ${arguments[1]} times` 
 }
 console.log(cup(50,100)());

//  let Sum = ()=>{
//     console.log(new.target)//it will not work in arrow function

//  }

//  let ss = new Sum(); 

 let Add = function(){
    console.log(new.target);
 }
 let addition = new Add();

 let arrow = ()=>{
    return 'return';
 }
 console.log(arrow());
 console.log(arrow.hasOwnProperty('prototype'));
 console.log(Add.hasOwnProperty('prototype'));

 var showMe = new Function('...args' , 'console.log(args)')
 console.log(showMe);
 console.log(Function);



 