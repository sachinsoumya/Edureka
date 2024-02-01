const person = {
    firstName:'Sachin',
    lastName:'Panda',
    roll:56
};

console.log(person.firstName);
console.log(person.toString());
console.log(person.roll.toString());//js finds thr toString() because by default the the person object inherits the properties and methods from object.prototype 
console.log(person.prototype);
console.log(person);
console.log(person.__proto__);
console.log(Object.prototype);
console.log(person.__proto__ === Object.prototype);

let teacher = {
    name:'Raj',
    greet : function(){
        return `${this.name} is our chemistry teacher`
    }
}

console.log(teacher);
console.log(teacher.greet());
console.log(teacher.__proto__);
console.log(teacher.__proto__ === person.__proto__);
// teacher.__proto__ = person;
// console.log(teacher.roll);

teacher  = Object.create(person);
console.log(teacher.roll);

let parents = Object.create(person);//1
console.log(parents);

parents.name = "Bapa maa",
parents.age = "50"
parents.details = function (){
    return `${parents.name} is the best`
}
console.log(parents.details());


let study = Object.create(person , {//2
    name:{value:"Methematics"},
    exam:{value:"20th Feb"},
    work:{value:function(){
        return `${this.firstName} has exam on ${study.name} om ${study.exam}`
    }}
});

console.log(study);
console.log(study.name , study.exam , study.roll , study.work());




// function Person (fName , lName){
//     this.firstName = fName,
//     this.lastName = lName
// }
// let p = new Person('joe' , "dii");
// console.log(p);
// console.log(Person.prototype);