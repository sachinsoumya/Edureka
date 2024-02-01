// var person = 10;

var person = function  (){
    var rupee1 = 10;
    var name1="Sachin"
    console.log(name1 + "has" + rupee1 +"rupee" + this);

};

(function person1 (){
    var rupee1 = 30;
    var name1="Sachin"
    console.log(name1 + "has" + rupee1 +"rupee" + this);

}).prototype;

// var person1 = function  (){
//     var rupee1 = 10;
//     var name1="Sachin"
//     console.log(name1 + "has" + rupee1 +"rupee" + this);

// }






function person2 (){
    var rupee1 = 20;
    var name1="Sachin"
    console.log(name1 + "has" + rupee1 +"rupee" + this);

}

var person4 = function (){
    console.log("Hello");
};

(()=>{
    console.log("I am an arrow function" + this);
})();

var storeValue = (()=>{return 50})();
console.log(window.storeValue);

console.log(window.person1);
// s

console.log(window.person2)

console.log(window.person1)
console.log(window.person4);

// console.log(window.person())
// console.log()


// console.log(rupee1);


// console.log(person);
// console.log(window.person);







// let person2 =  function  (){
//     var rupee2=100;
//     var name2 = "Sam" 
//     console.log(name2 + "has" + rupee2 +"rupee")
// }

// // person2();

// console.log(window.person2)



// let person3 = (function (){
//     var rupee3 = 1000;
//     var name3= "John";
//     console.log(name3 + "has" + rupee3 +"rupee")
// });

// console.log(window.person3)