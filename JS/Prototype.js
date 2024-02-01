// const person = {
//     name:"sachin",
//     class:9,
//     roll : 54
// }
// console.log(person);

function Person(fname ,lname){
    this.firstName = fname ,
    this.lastName = lname ,
    this.details = function(){
        return `${this.firstName} + ${this,this.lastName}`//this method and properties can be accessible by all other objects.
    }
};
let p  = new Person('Soni' , 'Singh');
// console.log(Person);
console.log(Person.prototype);
console.log(Object.prototype)
Person.prototype.greet = function(){
    return ` hi ${this.firstName} and ${this.lastName}`//this function  can be accessible by all other objects.
}
let s = new Person('Sai' , 'sim');
console.log(s.greet());
console.log(p.greet());
console.log(s.details())
console.log(p.details());

let w = new Person ('Tom' , 'Jerry');
w.wish = function(){
    return `${this.firstName} and ${this.lastName}`
}
console.log(w.wish());//here we are defining a function in the w object , so all other objects  can not access this.

// console.log(p.wish());(here we are trying to access the wish method in the p object which is not possible thats why it will give an error i.w type error wish is not an function)

console.log(w);
console.log(p);
console.log(s);
console.log(s.__proto__);
console.log(p.__proto__);
console.log(Object.getPrototypeOf(p));
console.log(s.__proto__ === p.__proto__);//true
console.log(Object.getPrototypeOf(s)==s.__proto__)//true
console.log(Object.getPrototypeOf(s)==Person.prototype)//true
console.log(Object.getPrototypeOf(p)==Person.prototype)//true
console.log(p.constructor.prototype === Object.getPrototypeOf(p))//true
console.log(p);



//Shadowing
w.greet = function(){
    return `${this.firstName} and ${this.lastName} and welcome to Odisha`
}

console.log(w.greet());